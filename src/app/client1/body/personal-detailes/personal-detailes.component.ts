import { Component, OnInit } from '@angular/core';
import * as data from '../../../../assets/heb.json';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HebData } from '../../../interfaces/heb-data.interface';

@Component({
  selector: 'app-personal-detailes',
  templateUrl: './personal-detailes.component.html',
  styleUrls: ['./personal-detailes.component.scss']
})
export class PersonalDetailesComponent implements OnInit {
    public personalDetailesForm!: FormGroup;
    hebData!: HebData;

    ngOnInit(): void {
      this.hebData = data as HebData;
        this.initForm();
    }

    private initForm(): void {
        let name = '';
        let city = '';
        let apartment = '';
        let houseNumber = '';

        this.personalDetailesForm = new FormGroup({
          'name': new FormControl(name, Validators.required),
          'city': new FormControl(city, Validators.required),
          'apartment': new FormControl(apartment, Validators.required),
          'houseNumber': new FormControl(houseNumber, Validators.required),
        });
      }

}