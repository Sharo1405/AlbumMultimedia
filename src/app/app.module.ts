import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { ArchivarFotografiaComponent } from './ArchivarFotografia/ArchivarFotografia.component';
import { VisualizarExpedienteComponent } from './VisualizarExpediente/VisualizarExpediente.component';
import { PapeleraComponent } from './Papelera/Papelera.component';
import { CambiosExpedienteComponent } from './CambiosExpediente/CambiosExpediente.component';
import { AsociarExpedienteComponent } from './AsociarExpediente/AsociarExpediente.component';
import { LogSistemaComponent } from './LogSistema/LogSistema.component';
import { DescargarComponent } from './Descargar/Descargar.component';
import { DesasociarExpedienteComponent } from './DesasociarExpediente/DesasociarExpediente.component';
import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,   
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule
  ], 
  declarations: [
    AppComponent,    
    AdminLayoutComponent,
    LoginComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
