'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`<nav>
    <ul class="list">
        <li class="title">
            <a href="index.html" data-type="index-link">adultservices documentation</a>
        </li>
        <li class="divider"></li>
        ${ isNormalMode ? `<div id="book-search-input" role="search">
    <input type="text" placeholder="Type to search">
</div>
` : '' }
        <li class="chapter">
            <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
            <ul class="links">
                    <li class="link">
                        <a href="overview.html" data-type="chapter-link">
                            <span class="icon ion-ios-keypad"></span>Overview
                        </a>
                    </li>
                    <li class="link">
                        <a href="index.html" data-type="chapter-link">
                            <span class="icon ion-ios-paper"></span>README
                        </a>
                    </li>
                    <li class="link">
                        <a href="dependencies.html"
                            data-type="chapter-link">
                            <span class="icon ion-ios-list"></span>Dependencies
                        </a>
                    </li>
            </ul>
        </li>
        <li class="chapter modules">
            <a data-type="chapter-link" href="modules.html">
                <div class="menu-toggler linked" data-toggle="collapse"
                    ${ isNormalMode ? 'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                    <span class="icon ion-ios-archive"></span>
                    <span class="link-name">Modules</span>
                    <span class="icon ion-ios-arrow-down"></span>
                </div>
            </a>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                    <li class="link">
                        <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-AppModule-dc6ff715f99fa78e4aabadf0bb15a0b2"' : 'data-target="#xs-components-links-module-AppModule-dc6ff715f99fa78e4aabadf0bb15a0b2"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-AppModule-dc6ff715f99fa78e4aabadf0bb15a0b2"' : 'id="xs-components-links-module-AppModule-dc6ff715f99fa78e4aabadf0bb15a0b2"' }>
                                        <li class="link">
                                            <a href="components/AdultFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AdultFormComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/ClientValidationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ClientValidationComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/DoctorRegistrationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DoctorRegistrationComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">FooterComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomeComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/NurseRegistrationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">NurseRegistrationComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/TableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">TableComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/TableRowComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">TableRowComponent</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#injectables-links-module-AppModule-dc6ff715f99fa78e4aabadf0bb15a0b2"' : 'data-target="#xs-injectables-links-module-AppModule-dc6ff715f99fa78e4aabadf0bb15a0b2"' }>
                                    <span class="icon ion-md-arrow-round-down"></span>
                                    <span>Injectables</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="injectables-links-module-AppModule-dc6ff715f99fa78e4aabadf0bb15a0b2"' : 'id="xs-injectables-links-module-AppModule-dc6ff715f99fa78e4aabadf0bb15a0b2"' }>
                                        <li class="link">
                                            <a href="injectables/AuthGuardService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>AuthGuardService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/RegisterService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>RegisterService</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/SignInModuleModule.html" data-type="entity-link">SignInModuleModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-SignInModuleModule-a0aaacb5a21ce90ed250fd674e940524"' : 'data-target="#xs-components-links-module-SignInModuleModule-a0aaacb5a21ce90ed250fd674e940524"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-SignInModuleModule-a0aaacb5a21ce90ed250fd674e940524"' : 'id="xs-components-links-module-SignInModuleModule-a0aaacb5a21ce90ed250fd674e940524"' }>
                                        <li class="link">
                                            <a href="components/SignInComponentComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">SignInComponentComponent</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#injectables-links-module-SignInModuleModule-a0aaacb5a21ce90ed250fd674e940524"' : 'data-target="#xs-injectables-links-module-SignInModuleModule-a0aaacb5a21ce90ed250fd674e940524"' }>
                                    <span class="icon ion-md-arrow-round-down"></span>
                                    <span>Injectables</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="injectables-links-module-SignInModuleModule-a0aaacb5a21ce90ed250fd674e940524"' : 'id="xs-injectables-links-module-SignInModuleModule-a0aaacb5a21ce90ed250fd674e940524"' }>
                                        <li class="link">
                                            <a href="injectables/SignInServiceService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>SignInServiceService</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
            </ul>
        </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
            ${ isNormalMode ? 'data-target="#classes-links"' : 'data-target="#xs-classes-links"' }>
                <span class="icon ion-ios-paper"></span>
                <span>Classes</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                    <li class="link">
                        <a href="classes/Adult.html" data-type="entity-link">Adult</a>
                    </li>
                    <li class="link">
                        <a href="classes/AuthResponseModel.html" data-type="entity-link">AuthResponseModel</a>
                    </li>
                    <li class="link">
                        <a href="classes/Client.html" data-type="entity-link">Client</a>
                    </li>
                    <li class="link">
                        <a href="classes/Doctor.html" data-type="entity-link">Doctor</a>
                    </li>
                    <li class="link">
                        <a href="classes/Menu.html" data-type="entity-link">Menu</a>
                    </li>
                    <li class="link">
                        <a href="classes/Nurse.html" data-type="entity-link">Nurse</a>
                    </li>
                    <li class="link">
                        <a href="classes/SignInModel.html" data-type="entity-link">SignInModel</a>
                    </li>
                    <li class="link">
                        <a href="classes/roleModel.html" data-type="entity-link">roleModel</a>
                    </li>
                    <li class="link">
                        <a href="classes/userModel.html" data-type="entity-link">userModel</a>
                    </li>
            </ul>
        </li>
                <li class="chapter">
                    <div class="simple menu-toggler" data-toggle="collapse"
                        ${ isNormalMode ? 'data-target="#injectables-links"' : 'data-target="#xs-injectables-links"' }>
                        <span class="icon ion-md-arrow-round-down"></span>
                        <span>Injectables</span>
                        <span class="icon ion-ios-arrow-down"></span>
                    </div>
                    <ul class="links collapse"
                    ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                            <li class="link">
                                <a href="injectables/AuthGuardService.html" data-type="entity-link">AuthGuardService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/ClientRequestsService.html" data-type="entity-link">ClientRequestsService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/RegisterService.html" data-type="entity-link">RegisterService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/SignInServiceService.html" data-type="entity-link">SignInServiceService</a>
                            </li>
                    </ul>
                </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
            ${ isNormalMode ? 'data-target="#miscellaneous-links"' : 'data-target="#xs-miscellaneous-links"' }>
                <span class="icon ion-ios-cube"></span>
                <span>Miscellaneous</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                    <li class="link">
                      <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                    </li>
                    <li class="link">
                      <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                    </li>
            </ul>
        </li>
            <li class="chapter">
                <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
            </li>
        <li class="chapter">
            <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
        </li>
        <li class="divider"></li>
        <li class="copyright">
                Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.svg" class="img-responsive" data-type="compodoc-logo">
                </a>
        </li>
    </ul>
</nav>`);
        this.innerHTML = tp.strings;
    }
});
