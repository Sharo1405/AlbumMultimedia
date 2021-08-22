import { Routes } from '@angular/router';

import { ArchivarFotografiaComponent } from '../../ArchivarFotografia/ArchivarFotografia.component';
import { VisualizarExpedienteComponent } from '../../VisualizarExpediente/VisualizarExpediente.component';
import { PapeleraComponent } from '../../Papelera/Papelera.component';
import { CambiosExpedienteComponent } from '../../CambiosExpediente/CambiosExpediente.component';
import { AsociarExpedienteComponent } from '../../AsociarExpediente/AsociarExpediente.component';
import { LogSistemaComponent } from '../../LogSistema/LogSistema.component';
import { DescargarComponent } from '../../Descargar/Descargar.component';
import { DesasociarExpedienteComponent } from '../../DesasociarExpediente/DesasociarExpediente.component';
import { AdminLayoutComponent } from './admin-layout.component';

export const AdminLayoutRoutes: Routes = [        
    { path: 'archivarfoto',      component: ArchivarFotografiaComponent },
    { path: 'visualizacion',   component: VisualizarExpedienteComponent },
    { path: 'papelera',     component: PapeleraComponent },
    { path: 'cambiosexp',     component: CambiosExpedienteComponent },
    { path: 'asociar',          component: AsociarExpedienteComponent },
    { path: 'desasociar',        component: DesasociarExpedienteComponent },
    { path: 'logsistema',           component: LogSistemaComponent },
    { path: 'descarga',  component: DescargarComponent }
    
];
