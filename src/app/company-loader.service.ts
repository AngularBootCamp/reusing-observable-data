import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

const API_URL = 'https://api.angularbootcamp.com';

@Injectable()
export class CompanyLoader {
  constructor(private http: HttpClient) { }

  loadOneCompany() {
    return this.http.get(API_URL + '/companies')
      .pipe(map(list => list[0]));
  }
}