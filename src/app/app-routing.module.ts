import {RouterModule, Routes} from '@angular/router';
import {ShowComponent} from "./doremon/show/show.component";
import {EditComponent} from "./doremon/edit/edit.component";
import {CreatComponent} from "./doremon/creat/creat.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  { path: 'create', component: CreatComponent },
  { path: 'show', component: ShowComponent},
  { path: '', component: ShowComponent},
  { path: 'edit', component: EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
