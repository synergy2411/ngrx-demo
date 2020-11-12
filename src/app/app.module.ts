import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {  StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { LifeCycleDemoComponent } from './life-cycle-demo/life-cycle-demo.component';
import { ObservableDemoComponent } from './observable-demo/observable-demo.component';
import { rootReducer } from './store/reducers/root.reducer';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LifeCycleDemoComponent,
    ObservableDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({
      countReducer : rootReducer,
      // resultReducer : resultReducer
    }),
    StoreDevtoolsModule.instrument({logOnly : true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
