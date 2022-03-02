
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

// Models interface
import { Product, products } from "../../shared/models/products.model";

// Services
import { CartService } from "./../../service/cart.service";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  // Services injetados
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
  ) {}


  
  ngOnInit() {
    // Pega o id na rota
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get("productId"));
    
    //
    this.product = products.find(
      (product) => product.id === productIdFromRoute,
      );
      
    }
    
    // Metodo que adiciona o produto atual ao cart
    addToCart(product: Product){
   this.cartService.addTocart(product)
   window.alert('Your product has been added to the cart')
    }
}
