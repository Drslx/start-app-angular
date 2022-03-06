import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

// Model
import { Product } from "./../shared/models/products.model";

@Injectable({
  providedIn: "root",
})
export class CartService {
  items: Product[] = [];

  constructor(private http: HttpClient) {}
  // O addToCart()método anexa um produto a uma matriz de items.
  addTocart(product: Product) {
    this.items.push(product);
  }

  // O getItems()método coleta os itens que os usuários adicionam ao carrinho e retorna cada item com sua quantidade associada
  getItems() {
    return this.items;
  }

  // O clearCart()método retorna uma matriz vazia de itens, que esvazia o carrinho.
  clearCart() {
    this.items = [];
    return this.items;
  }

  // getShippingPrices()método que utilize o HttpClient get()método.
  getShippingPrices() {
    return this.http.get<{ type: string; price: number }[]>(
      "/assets/shipping.json",
    );
  }
}
