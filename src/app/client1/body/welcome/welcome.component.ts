import { Component, OnInit } from '@angular/core';
import * as data from '../../../../assets/heb.json';
import { HebData } from '../../../interfaces/heb-data.interface';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  hebData!: HebData;

    ngOnInit(): void {
      this.hebData = data as HebData;
    }
}