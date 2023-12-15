import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateUtilService {

  constructor() { }

  getDateOnly(dob: string | undefined) {
    if(!dob) return;
    let theDob = new Date(dob);
    return new Date(theDob.setMinutes(theDob.getMinutes() - theDob.getTimezoneOffset())).toISOString().slice(0, 10);
  }
}
