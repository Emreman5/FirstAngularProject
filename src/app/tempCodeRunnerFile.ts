import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my_first';
  product1:any = {productId : 1, productName : 'Emre'};
  product2:any = {productId : 2, productName : 'eeeee'};
  products = [this.product1,this.product2];
}
