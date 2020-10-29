import { Component } from '@angular/core';
import { CallApiService } from './shared/services/call-api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'currency-converter';
  texto: string = '';
  moneda: string = 'USD';

  show: boolean = false;
  constructor(private callApi: CallApiService) { }


  converter = new Promise((resolve, reject) => {
    let url: string = 'https://api.openrates.io/latest';
    this.callApi.getData(url).subscribe((data: any) => {

      setInterval(() => {
        let coin_1 = Number(this.texto);
        let coin_2 = Number(data.rates[this.moneda.toUpperCase()]);
        let total = coin_1 * coin_2;
        if (this.show) {
          total = Math.round(total*100);
          resolve(total/100);
          
        }

      }, 1000);



    }, (error) => { });

  });

  reset() {
    window.location.reload();
  }
  start() {
    this.show = false;
    this.show = true;
  }

}
