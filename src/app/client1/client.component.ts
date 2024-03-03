import { Component, Input, OnInit} from '@angular/core';
import * as hebData from '../../assets/heb.json';
import { __values } from 'tslib';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  @Input() client!: string;
  hebData: any;

  constructor() {}


    ngOnInit(): void {
      this.hebData = hebData;
    }
}
