import { Component, Input, OnInit } from '@angular/core';
import * as data from '../../../../assets/heb.json';
import { HebData } from '../../../interfaces/heb-data.interface';

@Component({
    selector: 'app-summary',
    templateUrl: './summary.component.html',
    styleUrls: ['./summary.component.scss'],
  })
  export class SummaryComponent implements OnInit {
    hebData!: HebData;
    
    public ngOnInit(): void {
      this.hebData = data as HebData;
    }

    public getCardTitlesAndValues(card: any): { title: string, value: string }[] {
      const titlesAndValues: { title: string, value: string }[] = [];
      if (card && card.titles) {
        Object.keys(card.titles).forEach(titleKey => {
          const title = card.titles[titleKey];
          const value = card.values[titleKey];
          titlesAndValues.push({ title, value });
        });
      }
      return titlesAndValues;
    }
  }
