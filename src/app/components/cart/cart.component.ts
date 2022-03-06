import { Component, OnInit } from "@angular/core";

// Services
import { CartService } from "../../service/cart.service";
@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"],
})
export class CartComponent {
  // propriedade para armazenar os produtos no carrinho.
  items = this.cartService.getItems();

  // Services injetado
  constructor(
    private cartService: CartService
  ) { }
}
