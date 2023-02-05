import { Component, OnInit } from '@angular/core';
import { SsshDate } from './sssh-date';
import { SsshDateService } from './sssh-date.service';
import { timer } from 'rxjs';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(private ssshDateService: SsshDateService) {}

  title: String = 'Ssssh Date';
  date: String = '';

  private parsedBase64Key: CryptoJS.lib.WordArray = CryptoJS.enc.Base64.parse(
    'QkFOQU5fQ0FLRV9NQU4xNg=='
  );

  ngOnInit(): void {
    console.log(this.parsedBase64Key);
    this.autoGetNewDateAndResetTimer();
  }

  autoGetNewDateAndResetTimer(): void {
    this.ssshDateService.getDate().subscribe((d: SsshDate) => {
      this.date = CryptoJS.AES.decrypt(d.date, this.parsedBase64Key, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7,
      }).toString(CryptoJS.enc.Utf8);
      timer(Math.random() * 4000 + 1000).subscribe(() => {
        this.autoGetNewDateAndResetTimer();
      });
    });
  }
}
