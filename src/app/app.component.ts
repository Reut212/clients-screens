import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private readonly route : ActivatedRoute) {}
  client!:string;


  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        this.client = params['client'];
        if (this.client) {
            document.documentElement.setAttribute('data-client', this.client);
        } 
      }
    );
  }
}
