import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StaticModule } from './statics/statics.module';

const routes: Routes = [];

@NgModule({
  imports: [
    // RouterModule.forRoot(routes, {
    //   useHash: true,
    // }),
    RouterModule.forRoot(routes),
    StaticModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
