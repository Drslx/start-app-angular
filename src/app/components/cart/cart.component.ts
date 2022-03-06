import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";

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
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) {}

  checkoutForm = this.formBuilder.group({
    name: "",
    address: "",
  });

  
  onSubmit(): void {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    console.warn("Your orde has been submitted", this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
