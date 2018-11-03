import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ClinicalHistory } from '../../../../models/clinicalHistory';
import { RegisterService } from '../../../services/register-service.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { userModel } from '../../../../models/userInfoResponseModel';
import { AuthGuardService } from '../../../services/auth-guard.service';
import { GetInfoService } from '../../../services/getInfo-services.service';

@Component({
    selector: 'app-clinical-history',
    templateUrl: './clinical-history.component.html',
    styleUrls: ['./clinical-history.component.css']
})
export class ClinicalHistoryComponent implements OnInit {

    public clinicalHistory: ClinicalHistory;
    public groupBloods: string[];
    adult: userModel = new userModel();
    clinicHisotry: ClinicalHistory = new ClinicalHistory();
    loggedUser: userModel;

    medical_preceedings_form_group: FormGroup = new FormGroup({
        medical_preceedings: new FormArray([new FormControl("", Validators.required),
        new FormControl("", Validators.required)]),
    });

    allergies_form_group: FormGroup = new FormGroup({
        allergies: new FormArray([new FormControl("", Validators.required),
        new FormControl("", Validators.required)]),
    });

    coronary_problems_form_group: FormGroup = new FormGroup({
        coronary_problems: new FormArray([new FormControl("", Validators.required),
        new FormControl("", Validators.required)]),
    });



    constructor(private registerService: RegisterService,
        private toastrService: ToastrService,
        private router: Router, private activeRoute: ActivatedRoute,
        private authGuardService: AuthGuardService,
        private getInfo: GetInfoService) {

        this.authGuardService.active$.subscribe(active => {
            if (active) {
                this.authGuardService.user$.subscribe(user => {
                    if (user != undefined) {
                        this.loggedUser = user;
                        this.activeRoute.params.subscribe(params => {
                            let adultId = params['id'];
                            this.getInfo.getAdult(adultId).subscribe(adulto => {
                                console.log(adulto);
                                this.adult = adulto;
                            })
                            this.getInfo.adultClinicHistory(adultId).subscribe(history => {
                                console.log(history);
                                this.clinicHisotry = history;
                            })
                        })
                    }
                });
            } else {
                this.router.navigate(['/']);
            }
        });

    }

    ngOnInit() {
        this.groupBloods = ["0+", "0-", "A+", "A-", "B+", "B-", "AB+", "AB-"];
        this.adult.first_name = "--";
        this.adult.last_name = "--";
        if (!this.clinicalHistory) {
            this.clinicalHistory = new ClinicalHistory();
        }


        this.clinicalHistory = new ClinicalHistory({
            adultId: this.adult.id,
            doctorId: this.loggedUser.id,
            interview_date: this.clinicHisotry.interview_date,
            regular_doctor_name: this.clinicHisotry.regular_doctor_name,
            regular_doctor_phone: this.clinicHisotry.regular_doctor_phone,
            actual_diagnossis: this.clinicHisotry.actual_diagnossis,
            weight: this.clinicHisotry.weight,
            height: this.clinicHisotry.height,
            pulse: this.clinicHisotry.pulse,
            heart_rate: this.clinicHisotry.heart_rate,
            breathing_rate: this.clinicalHistory.breathing_rate,
            temperature: this.clinicHisotry.temperature,
            observations: this.clinicHisotry.observations,
            allergies: this.clinicHisotry.allergies,
            coronary_problems: this.clinicHisotry.coronary_problems,
            medical_precedings: this.clinicHisotry.medical_precedings
        });

    }


    getFullNameClient(): string {
        if (this.adult.first_name == null) return "name not found";
        return this.adult.first_name + " " + this.adult.last_name;
    }

    hasValuesArray(array: Array<string>): boolean {
        if (!array || array.length <= 0) return false;

    }

    getValuesControlForm(formControls: FormArray): Array<string> {
        var array: Array<string> = [];
        for (let i = 0; i < formControls.controls.length; i++) {
            var formControl: FormControl = formControls.controls[i] as FormControl;
            array.push(formControl.value);
        }

        return array;
    }
    onFormSubmit({ value, valid }: { value: ClinicalHistory, valid: boolean }) {

        this.clinicalHistory.coronary_problems = this.getValuesControlForm(this.coronary_problems);
        this.clinicalHistory.medical_precedings = this.getValuesControlForm(this.medical_preceedings);
        this.clinicalHistory.allergies = this.getValuesControlForm(this.allergies);

        //Web Service
        this.registerService.postHistotiesReg(this.clinicalHistory).subscribe(
            data => {
                console.log("Clinic Histories response");
                console.log(data);

                this.toastrService.success("Historia clinica guardada con éxito !", "Exito")
                this.router.navigate(['/']);
            }, error => {
                this.toastrService.error("Error guardando la historia clinica. Verfica que los datos son correctos", "Error");
            });
        this.router.navigate(['']);
    }

    addClinicalPrecending(): void {
        this.medical_preceedings.push(new FormControl("", Validators.required));
    }

    removeClinicalPrecending(index): void {
        this.medical_preceedings.removeAt(index);
    }


    addAllergy(): void {
        this.allergies.push(new FormControl("", Validators.required));
    }

    removeAllergy(index): void {
        this.allergies.removeAt(index);
    }



    addCoronary(): void {
        this.coronary_problems.push(new FormControl("", Validators.required));
    }

    removeCoronary(index): void {
        this.coronary_problems.removeAt(index);
    }

    get coronary_problems(): FormArray { return this.coronary_problems_form_group.get('coronary_problems') as FormArray; }
    get medical_preceedings(): FormArray { return this.medical_preceedings_form_group.get('medical_preceedings') as FormArray; }
    get allergies(): FormArray { return this.allergies_form_group.get('allergies') as FormArray; }

}
