import { Account } from './Models/account';
import { AccountService } from './Services/account.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FDM_Bank_Web';
  isLoggedIn: boolean = false;
  accountList: any[] = [];

  constructor(private accService: AccountService) {

  }

  ngOnInit(): void {
    this.accService.getAccountList().subscribe(data => {
      this.accountList = data;
    });
    console.log(this.accountList);
  }

  public register(): void{

  }
}
