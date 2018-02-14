import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DocsButtonComponent } from "./docs-button/docs-button.component";
import { DocsCheckboxComponent } from "./docs-checkbox/docs-checkbox.component";
import {DocsSwitchComponent} from "./docs-switch/docs-switch.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "button",
  },
  {
    component: DocsButtonComponent,
    path: "button",
  },
  {
    component: DocsCheckboxComponent,
    path: "checkbox",
  },
  {
    component: DocsSwitchComponent,
    path: "switch",
  },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class DocsComponentsRoutingModule { }
