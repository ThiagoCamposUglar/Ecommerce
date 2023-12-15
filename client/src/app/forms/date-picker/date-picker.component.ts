import { Component, Input, Self } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl } from '@angular/forms';
import { BsDatepickerConfig, BsLocaleService } from 'ngx-bootstrap/datepicker';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { ptBrLocale } from 'ngx-bootstrap/locale';
defineLocale('pt-br', ptBrLocale)

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements ControlValueAccessor {
  @Input() label = '';
  @Input() maxDate: Date | undefined;
  bsConfig: Partial<BsDatepickerConfig> | undefined;

  constructor(@Self() public ngControl: NgControl, private localeService: BsLocaleService) {
    this.ngControl.valueAccessor = this;
    this.localeService.use('pt-br')
    this.bsConfig = {
      containerClass: 'theme-blue',
      dateInputFormat: 'YYYY/MM/DD'
    }
  }

  writeValue(obj: any): void {
    
  }
  registerOnChange(fn: any): void {
    
  }
  registerOnTouched(fn: any): void {
    
  }

  get control(): FormControl {
    return this.ngControl.control as FormControl
  }
}
