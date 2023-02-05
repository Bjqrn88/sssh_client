import { Injectable } from '@angular/core';
import { SsshDate } from './sssh-date';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root',
})
export class SsshDateService {
  constructor(private httpClient: HttpClient) {}

  // Get the date from the backend
  getDate(): Observable<SsshDate> {
    return this.httpClient.get<SsshDate>(environment.DATE_URL);
  }

  // Decrypt a given date using ASE
  decryptDate(date: string): String {
    return CryptoJS.AES.decrypt(date, CryptoJS.enc.Base64.parse(environment.SSSH_KEY), {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7,
    }).toString(CryptoJS.enc.Utf8);
  }
}
