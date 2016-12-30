// #docregion
import { Injectable, Injector }             from '@angular/core';
import { Router, Resolve, RouterStateSnapshot,
         ActivatedRouteSnapshot } from '@angular/router';

import { Crisis, CrisisService } from './crisis.service';

@Injectable()
export class CrisisDetailResolver implements Resolve<Crisis> {

  public errorMessage: string;

  constructor(private cs: CrisisService,
              private router: Router,
              injector: Injector) {
    console.log('Instantiating CrisisDetailResolver');
    console.log(injector);
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Crisis> {
    console.log('CrisisDetailResolver.resolve() has run');
    this.errorMessage = 'I failed to load crisis';
    this.router.navigate(['/crisis-center/error'], {skipLocationChange: true});
    return null;

    // let id = route.params['id'];
    //
    // return this.cs.getCrisis(id).then(crisis => {
    //   if (crisis) {
    //     return crisis;
    //   } else { // id not found
    //     this.router.navigate(['/crisis-center']);
    //     return null;
    //   }
    // });
  }
}
