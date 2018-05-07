import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

const API_URL = 'https://api.angularbootcamp.com';

@Injectable({
  providedIn: 'root'
})
export class CompanyLoader {
  constructor(private http: HttpClient) { }

  loadOneCompany() {
    return this.http.get<any[]>(API_URL + '/companies')
      .pipe(map(list => list[0]));
  }
}
