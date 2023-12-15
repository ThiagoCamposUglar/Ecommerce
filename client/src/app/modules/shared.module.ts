import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    ToastrModule.forRoot({
      positionClass: 'toast-top-center'
    }),
    BsDatepickerModule.forRoot(),
    CarouselModule.forRoot(),
    NgxMaskDirective,
    NgxMaskPipe
  ],
  exports: [
    ToastrModule,
    BsDropdownModule,
    BsDatepickerModule,
    CarouselModule,
    NgxMaskDirective,
    NgxMaskPipe
  ],
  providers: [provideNgxMask()]
})
export class SharedModule { }
