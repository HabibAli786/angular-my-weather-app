import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { Office } from './Office';
import { OfficeData } from './office-data';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  title = 'About';
  offices = OfficeData.offices

  selectedOption: Office

  constructor() { 
    console.log(this.offices)
    console.log(this.selectedOption)
  }

  changeSelect(event: Office) {
    console.log(event)
    // console.log(id)
    console.log(this.selectedOption)
  }




}
