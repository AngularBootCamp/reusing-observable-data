import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

const API_URL = 'https://api.angularbootcamp.com';

// Or connect directly to the API server (local development only)
// const API_URL = 'http://localhost:8085';

// Or connect to the hosted demo API (works from local, Cloud 9, StackBlitz):
// const API_URL = 'https://api.angularbootcamp.com';

@Injectable()
export class PhoneLoader {
  constructor(private http: HttpClient) { }

  loadOnePhone() {
    return this.http.get(API_URL + '/phones')
      .pipe(map((res: Response) => res.json()[0].name));
  }
}
