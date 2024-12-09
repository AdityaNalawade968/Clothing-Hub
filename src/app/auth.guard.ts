import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, GuardResult, MaybeAsync, RouterStateSnapshot } from '@angular/router'; 
import { PreHeaderComponent } from './components/pre-header/pre-header.component';

export class AuthGuard implements CanActivate {

  constructor(
    private preHeaderCom: PreHeaderComponent
  ) {

  }
  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    return false;
  }

};
