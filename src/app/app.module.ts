import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from "@angular/router";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http"

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AllpagesComponent } from './pages/allpages/allpages.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { UserslistComponent } from './user/userslist/userslist.component';
import { UserprofileComponent } from './user/userprofile/userprofile.component';
import { UserprofileupdateComponent } from './user/userprofileupdate/userprofileupdate.component';
import { UpdateuserComponent } from './user/updateuser/updateuser.component';
import { Login2Component } from './login2/login2.component';
import { Signup2Component } from './signup2/signup2.component';
import { Parent1Component } from './child/parent1/parent1.component';
import { ChildComponent } from './child/child/child.component';
import { Child1Component } from './child/child1/child1.component';
import { Sibling1Component } from './child/sibling1/sibling1.component';
import { Sibling2Component } from './child/sibling2/sibling2.component';
import { Parent2Component } from './child/parent2/parent2.component';
import { Child2Component } from './child/child2/child2.component';
import { Sibling3Component } from './child/sibling3/sibling3.component';
import { Child3Component } from './child/child3/child3.component';
import { Parent3Component } from './child/parent3/parent3.component';
import { SiblingComponent } from './child/sibling/sibling.component';
import { Ex1Parent1Component } from './ex1/ex1-parent1/ex1-parent1.component';
import { Ex1Child1Component } from './ex1/ex1-child1/ex1-child1.component';
import { ExParent2Component } from './ex1/ex-parent2/ex-parent2.component';
import { ExChild2Component } from './ex1/ex-child2/ex-child2.component';
import { Ex2Parent1Component } from './ex2/ex2-parent1/ex2-parent1.component';
import { Ex2Child1Component } from './ex2/ex2-child1/ex2-child1.component';
import { Login3Component } from './login3/login3.component';
import { GoforDirective } from './directives/gofor.directive';
import { GoifDirective } from './directives/goif.directive';
import { ExdirectivesComponent } from './pages/exdirectives/exdirectives.component';
import { OrdinalPipe } from './custompipes/ordinal.pipe';
import { ReversePipe } from './custompipes/reverse.pipe';
import { SummaryPipe } from './custompipes/summary.pipe';
import { ExpipesComponent } from './pages/expipes/expipes.component';
import { ExpipescustomComponent } from './pages/expipescustom/expipescustom.component';
import { LifecycleComponent } from './pages/lifecycle/lifecycle.component';
import { Parentchild2Component } from './child/parentchild2/parentchild2.component';
import { Parentchild22Component } from './child/parentchild22/parentchild22.component';
import { EncapsulationComponent } from './concepts/encapsulation/encapsulation.component';
import { Encapsulation2Component } from './concepts/encapsulation2/encapsulation2.component';
import { Encapsulation1Component } from './concepts/encapsulation1/encapsulation1.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { Eventemitter1Component } from './eventemitter/eventemitter1/eventemitter1.component';

const appRoutes:Routes = [
                          {path:'',component:HomeComponent},
                          {path:'home',component:HomeComponent},
                          {path:'about',component:AboutComponent},
                          {path:'contact',component:ContactComponent},
                          {path:'services',component:ServicesComponent},
                          {path:'allpages',component:AllpagesComponent},
                          {path:'login',component:LoginComponent},
                          {path:'login2',component:Login2Component},
                          {path:'login3',component:Login3Component},
                          {path:'signup',component:SignupComponent},
                          {path:'signup2',component:Signup2Component},
                          {path:'users-list',component:UserslistComponent},
                          {path:'updateuser/:userId',component:UpdateuserComponent},
                          {path:'parent-to-child',component:Parent1Component},
                          {path:'parent-to-child2',component:Parentchild2Component},
                          {path:'child-to-parent1',component:Parent2Component},
                          {path:'child-to-parent2',component:Parent3Component},
                          {path:'sibling',component:SiblingComponent},
                          {path:'ex1',component:Ex1Parent1Component},
                          {path:'ex2',component:Ex2Parent1Component},
                          {path:'directives',component:ExdirectivesComponent},
                          {path:'pipes',component:ExpipesComponent},
                          {path:'pipes-custom',component:ExpipescustomComponent},
                          {path:'lifecycle',component:LifecycleComponent},
                          {path:'encapsulation',component:EncapsulationComponent},
                          {path:'databinding',component:DatabindingComponent},
                          {path:'**',component:NotfoundComponent}
                        ]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    AllpagesComponent,
    NotfoundComponent,
    UserslistComponent,
    UserprofileComponent,
    UserprofileupdateComponent,
    UpdateuserComponent,
    Login2Component,
    Signup2Component,
    Parent1Component,
    ChildComponent,
    Child1Component,
    Sibling1Component,
    Sibling2Component,
    Parent2Component,
    Child2Component,
    Sibling3Component,
    Child3Component,
    Parent3Component,
    SiblingComponent,
    Ex1Parent1Component,
    Ex1Child1Component,
    ExParent2Component,
    ExChild2Component,
    Ex2Parent1Component,
    Ex2Child1Component,
    Login3Component,
    GoforDirective,
    GoifDirective,
    ExdirectivesComponent,
    OrdinalPipe,
    ReversePipe,
    SummaryPipe,
    ExpipesComponent,
    ExpipescustomComponent,
    LifecycleComponent,
    Parentchild2Component,
    Parentchild22Component,
    EncapsulationComponent,
    Encapsulation2Component,
    Encapsulation1Component,
    DatabindingComponent,
    Eventemitter1Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
