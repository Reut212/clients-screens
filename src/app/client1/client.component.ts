import { Component, Input, OnInit} from '@angular/core';
import * as data from '../../assets/heb.json';
import { HebData } from '../interfaces/heb-data.interface';
import { __values } from 'tslib';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  @Input() client!: string;
  hebData!: HebData;

  constructor() {}


    ngOnInit(): void {
      this.hebData = data as HebData;
    }
}
