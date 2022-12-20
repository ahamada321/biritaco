import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LpBiritacoComponent } from './lp-biritaco/lp-biritaco.component';

const routes: Routes = [
  { path: '', component: LpBiritacoComponent },
  //   { path: 'aboutus', component: AboutusComponent },
  //   { path: 'terms', component: TermsComponent },
  //   { path: 'privacy', component: PrivacyComponent },

  //   { path: 'maintenance', component: MaintenanceComponent },

  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: '**', component: Page404Component }
];

@NgModule({
  declarations: [LpBiritacoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [],
  providers: [],
})
export class StaticModule {}
