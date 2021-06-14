import { Component, HostListener, OnInit, ViewChild } from '@angular/core';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular10pdf';
  
  pdfSource: string = './assets/pdf-test.pdf';
}
