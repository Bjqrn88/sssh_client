import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SsshDateService } from './sssh-date.service';
import { LoggerModule, NgxLoggerLevel } from "ngx-logger"

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, 
    LoggerModule.forRoot({
      level: NgxLoggerLevel.INFO,
    }),
  ],
  providers: [SsshDateService],
  bootstrap: [AppComponent],
})
export class AppModule {}
