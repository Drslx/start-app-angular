import { Component, OnInit } from "@angular/core";

// Services
import { CartService } from "src/app/service/cart.service";

@Component({
  selector: "app-shipping",
  templateUrl: "./shipping.component.html",
  styleUrls: ["./shipping.component.css"],
})
export class ShippingComponent {
  constructor(private cartService: CartService) {}

  // shippingCostspropriedade que define a shippingCostspropriedade usando o getShippingPrices()método do arquivo CartService.
  shippingCosts = this.cartService.getShippingPrices();
}
