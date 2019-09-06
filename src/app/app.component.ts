import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ConfirmationService, DialogService, MenuItem, MessageService } from 'primeng/api';
import { AnnualSaleDialogComponent } from './annual-sale/annual-sale-dialog/annual-sale-dialog.component';
import { AnnualSale } from './shared/models/annual-sale.model';
import { User } from './shared/models/user.model';
import { AnnualService } from './shared/services/annual.service';
import { UserService } from './shared/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  public title = 'gesca-front';
  public user: User;
  public isDisplay = false;
  public menuItems: MenuItem[];



  constructor(private userService: UserService, private annualService: AnnualService, private dialogService: DialogService, private confirmationService: ConfirmationService, private messageService: MessageService) {

  }

  public ngOnInit(): void {


    // Si le utilisateur est connecté il faut récupérer ces données
    this.userService.getUser(1).subscribe((user: User) => this.user = user);
  }
  public ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  public showDialog() {
    const ref = this.dialogService.open(AnnualSaleDialogComponent, {
      header: 'Create annual sales',
      data: {
        user: this.user
      },
    });

    ref.onClose.subscribe((result: AnnualSale) => {
      if (result) {
        // this.user.annualSales.unshift(result);
        this.userService.getUser(1).subscribe((user: User) => this.user = user);
      }
    });
  }

  public confirmDelete(annualSale: AnnualSale) {
    this.confirmationService.confirm({
      message: 'Do you want to delete this year?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.annualService.deleteAnnualSale(this.user.id, annualSale.id).subscribe(() => {
          this.userService.getUser(1).subscribe((user: User) => this.user = user);
          this.messageService.add({ severity: 'success', summary: 'Confirmed', detail: `The year ${annualSale.year} has been deleted` });
        });

      }
    });
  }
}




