import { Injectable } from '@angular/core';
import {LoggerService} from "./logger.service";

@Injectable()
export class ProductService {

  // constructor(private logger: LoggerService) { }
  constructor(public logger: LoggerService) { }
  getProduct(): Product{
    this.logger.log("getProduct method was used");
    // 为了例子简单，这里不去查询数据库，直接new一个对象。
    return new Product(0, "iPhone8", 799, "Latest Apple phone");
  }
}

export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public desc: string
  ) {}
}
