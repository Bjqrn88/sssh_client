import { Component, OnInit } from '@angular/core';
import { SsshDate } from './sssh-date';
import { SsshDateService } from './sssh-date.service';
import { timer } from 'rxjs';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(private ssshDateService: SsshDateService, private logger: NGXLogger) {}

  title: String = 'Ssssh Date';
  date: String = '';

  ngOnInit(): void {
    this.logger.info("Init app-root component");
    this.updateDateRecursive();
  }

  // Get the latest date and decrypt it
  // Using a rxjs timer this method will call it self ever 1-5sec
  updateDateRecursive(): void {
    this.logger.info("Updating the date");
    this.ssshDateService.getDate().subscribe((d: SsshDate) => {
      this.date = this.ssshDateService.decryptDate(d.date);
      timer(Math.random() * 4000 + 1000).subscribe(() => {
        this.updateDateRecursive();
      });
    });
  }
}
