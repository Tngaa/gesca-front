import { NgModule } from '@angular/core';
// import { FieldsetModule } from 'primeng/fieldset';
import { TableModule } from 'primeng/table';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { InputMaskModule } from 'primeng/inputmask';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';



@NgModule({
  declarations: [],
  imports: [],
  exports: [
    // FieldsetModule,
    TableModule, DynamicDialogModule, InputMaskModule, MenubarModule, ButtonModule, InputTextModule, ConfirmDialogModule, ToastModule
  ]
})
export class PrimengModule { }
