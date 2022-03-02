// Import para configurar que o component filho receba dados do pai
import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";

// Models interface
import { Product } from "../../shared/models/products.model";
@Component({
  selector: "app-product-alerts",
  templateUrl: "./product-alerts.component.html",
  styleUrls: ["./product-alerts.component.css"],
})
export class ProductAlertsComponent implements OnInit {
  // Propriedade  nomeada que indica que o valor passa do pai
  @Input() product: Product | undefined;
  @Output() notify = new EventEmitter();
  //
  constructor() {}

  ngOnInit(): void {}
}
 