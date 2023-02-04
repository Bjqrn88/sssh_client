import { Injectable } from '@angular/core';
import { SsshDate } from './sssh-date';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root',
})
export class SsshDateService {
  constructor(private httpClient: HttpClient) {}

  getDate(): Observable<SsshDate> {
    return this.httpClient.get<SsshDate>('http://localhost:8080/date');
  }

  decryptDate(obsDate: Observable<SsshDate>): String {
    var date: String = '';
    var parsedBase64Key = CryptoJS.enc.Base64.parse('QkFOQU5fQ0FLRV9NQU4xNg==');
    console.log(parsedBase64Key);

    obsDate.subscribe((d: SsshDate) => {
      var decrypted = CryptoJS.AES.decrypt(d.date, parsedBase64Key, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7,
      });
      console.log(decrypted.toString(CryptoJS.enc.Utf8));
    });
    console.log(date);
    return date;
  }
}
