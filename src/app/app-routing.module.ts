//app-routing.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentCreateComponent } from './student-create/student-create.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentListComponent } from './student-list/student-list.component';
import { AppComponent } from './app.component';
import { StudentShowComponent } from './student-show/student-show.component';
 
const routes: Routes = [
  { path: '', redirectTo:'list',pathMatch:'full' },
  { path: 'create', component: StudentCreateComponent },
  { path: 'edit/:id', component: StudentEditComponent},
  { path: 'show/:id', component: StudentShowComponent},
  { path: 'list', component: StudentListComponent }  
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }