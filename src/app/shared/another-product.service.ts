import { Injectable } from '@angular/core';
import {Product, ProductService} from "./product.service";
import {LoggerService} from "./logger.service";

@Injectable()
export class AnotherProductService implements ProductService{
  getProduct(): Product {
    return new Product(1, "Note8", 899, "Latest Sumsang phone");
  }

  // constructor(private logger: LoggerService) { }
  constructor(public logger: LoggerService) { }

}
