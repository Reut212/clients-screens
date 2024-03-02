import { Component, Input, OnInit } from '@angular/core';
import * as hebData from '../../../../assets/heb.json';

@Component({
    selector: 'app-summary',
    templateUrl: './summary.component.html',
    styleUrls: ['./summary.component.scss'],
  })
  export class SummaryComponent implements OnInit {
    hebData: any;
    
    public ngOnInit(): void {
        this.hebData = hebData;
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
