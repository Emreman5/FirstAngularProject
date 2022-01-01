import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import {HttpClient } from '@angular/common/http';
import { ProductResponseModel } from '../models/productResponseModel';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiurl = "https://localhost:44323/api/Products/getall"
  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<ProductResponseModel>{
    return this.httpClient.get<ProductResponseModel>(this.apiurl)
   }
  }

