import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'paginaWeb';

  constructor(public traslate: TranslateService) {
    this.traslate.addLangs(['es', 'en']);
    this.traslate.setDefaultLang('en');
    this.traslate.use('es');
  }
}

