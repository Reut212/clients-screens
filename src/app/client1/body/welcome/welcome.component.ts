import { Component, OnInit } from '@angular/core';
import * as hebData from '../../../../assets/heb.json';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
    hebData: any;

    ngOnInit(): void {
        this.hebData = hebData;
    }
}