import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { publishReplay, refCount } from 'rxjs/operators';

import { CompanyLoader } from './company-loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [CompanyLoader]
})
export class AppComponent {
  company: Observable<any>;
  flag = false;

  constructor(loader: CompanyLoader) {
    // this.company = loader.loadOneCompany().share();
    //  share  = .publish().refCount().
    this.company = loader.loadOneCompany().pipe(
      publishReplay(1),
      refCount()
    );
  }
}