import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { ArchivarFotografiaComponent } from '../../ArchivarFotografia/ArchivarFotografia.component';
import { VisualizarExpedienteComponent } from '../../VisualizarExpediente/VisualizarExpediente.component';
import { PapeleraComponent } from '../../Papelera/Papelera.component';
import { CambiosExpedienteComponent } from '../../CambiosExpediente/CambiosExpediente.component';
import { AsociarExpedienteComponent } from '../../AsociarExpediente/AsociarExpediente.component';
import { LogSistemaComponent } from '../../LogSistema/LogSistema.component';
import { DescargarComponent } from '../../Descargar/Descargar.component';
import { DesasociarExpedienteComponent } from '../../DesasociarExpediente/DesasociarExpediente.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
  ],  
  declarations: [
    ArchivarFotografiaComponent,
    VisualizarExpedienteComponent,
    PapeleraComponent,
    CambiosExpedienteComponent,
    AsociarExpedienteComponent,
    LogSistemaComponent,
    DescargarComponent,
    DesasociarExpedienteComponent,
  ]
})

export class AdminLayoutModule {}
