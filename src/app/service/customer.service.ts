import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  backEndUrl = environment.backEndUrl
  controllerUrl: string = this.backEndUrl + "customers"

  constructor(private httpClient: HttpClient) { }

  findAll(country?: String): Observable<any> {
    return this.httpClient.get(this.controllerUrl + (country ? "?country=" + country : ""))
  }


}
