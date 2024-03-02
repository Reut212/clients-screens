import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  client!: string;

  constructor(private readonly route : ActivatedRoute, ) {}

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        this.client = params['client'];
        this.getLogoSrc(this.client)
      }
    );
  }
  
  getLogoSrc(client: string): string {
    switch (client) {
      case '1':
        return 'assets/icons/Tafnit_On_Cloud_Logo_transparent 1.svg';
      case '2':
        return 'assets/icons/logoCustomer2.svg';
      case '3':
        return 'assets/icons/Tafnit_On_Cloud_Logo_transparent 1.svg';
      default:
        return 'assets/icons/Tafnit_On_Cloud_Logo_transparent 1.svg';
    }
  }
}
