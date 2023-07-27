import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Proyecto1';
  contador = 1;
  contador2 = 1;
  contador3 = 1;
  incrementar(){
    this.contador++;
  }
  decrementar(){
    this.contador--;
    }
  incrementar2(){
    this.contador2++;
  }
  decrementar2(){
    this.contador2--;
    }
  incrementar3(){
    this.contador3++;
  }
  decrementar3(){
    this.contador3--;
    }    
}
