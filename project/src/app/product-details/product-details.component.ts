import {Component, OnInit} from '@angular/core';
import {Product, products} from "../products";
import {ActivatedRoute} from "@angular/router";
import {comments} from "../commentaries";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
  product: Product | undefined;
  comments = comments;
  constructor(private route: ActivatedRoute) {
  }
  ngOnInit(){
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('id'));

    this.product = products.find(product => product.id === productIdFromRoute);


  }

}
