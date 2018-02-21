import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { publishReplay, refCount } from 'rxjs/operators';

import { PhoneLoader } from './phoneLoader';

@Component({
  selector: 'app-root',
  templateUrl: './phones.html',
  providers: [PhoneLoader]
})
export class PhonesComponent {
  phone1: Observable<any>;

  constructor(phoneLoader: PhoneLoader) {
    // this.phone1 = phoneLoader.loadOnePhone().share();
    //  share  = .publish().refCount().
    this.phone1 = phoneLoader.loadOnePhone().pipe(
      publishReplay(1),
      refCount());
  }
}
