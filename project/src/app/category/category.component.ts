import { Component } from '@angular/core';
import {Product, products} from "../products";
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  products = products

  getCategory() {
    const categories = new Set<string>();
    this.products.forEach( product => {
      categories.add(String(product.category));
    });
    return Array.from(categories);
  }
}
