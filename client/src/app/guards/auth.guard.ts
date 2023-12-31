import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AccountService } from '../services/account.service';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs';

export const AuthGuard: CanActivateFn = (route, state) => {
  const as = inject(AccountService);
  const toastr = inject(ToastrService);
  
  return as.currentUser$.pipe(
    map(user => {
      if(user) return true;
      else{
        toastr.error('Acesso negado!')
        return false;
      }
    })
  )
};
