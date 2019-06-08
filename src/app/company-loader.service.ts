import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

const apiUrl = 'https://api.angularbootcamp.com';

@Injectable({
  providedIn: 'root'
})
export class CompanyLoader {
  constructor(private http: HttpClient) {}

  loadOneCompany() {
    return this.http
      .get<any[]>(apiUrl + '/companies')
      .pipe(map(list => list[0]));
  }
}
