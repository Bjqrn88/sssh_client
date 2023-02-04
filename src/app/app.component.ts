import { Component, OnInit } from '@angular/core';
import { SsshDate } from './sssh-date';
import { SsshDateService } from './sssh-date.service';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private ssshDateService: SsshDateService) {}
  parsedBase64Key = CryptoJS.enc.Base64.parse('QkFOQU5fQ0FLRV9NQU4xNg==');
  title = 'Ssssh Date';
  date: String | undefined;

  ngOnInit(): void {
    this.ssshDateService.getDate().subscribe((d: SsshDate) => {
      this.date = CryptoJS.AES.decrypt(d.date, this.parsedBase64Key, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7,
      }).toString(CryptoJS.enc.Utf8);
    });
  }
}
