import { Component, OnInit } from '@angular/core';
import { SsshDate } from './sssh-date';
import { SsshDateService } from './sssh-date.service';
import { timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(private ssshDateService: SsshDateService) {}

  title: String = 'Ssssh Date';
  date: String = '';

  ngOnInit(): void {
    this.autoGetNewDateAndResetTimer();
  }

  autoGetNewDateAndResetTimer(): void {
    this.ssshDateService.getDate().subscribe((d: SsshDate) => {
      this.date = this.ssshDateService.decryptDate(d.date);
      timer(Math.random() * 4000 + 1000).subscribe(() => {
        this.autoGetNewDateAndResetTimer();
      });
    });
  }
}
