import { Injectable } from '@angular/core';
import { SsshDate } from './sssh-date';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SsshDateService {
  constructor(private httpClient: HttpClient) {}

  getDate(): Observable<SsshDate> {
    return this.httpClient.get<SsshDate>('http://localhost:8080/date');
  }
}
