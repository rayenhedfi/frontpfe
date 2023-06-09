import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from './../../../environments/environment';
import { Branche } from "./branche";

@Injectable({
    providedIn: 'root'
  })
  export class BrancheService{
    private api_url = environment.api_url + 'branche';
    constructor(private http: HttpClient) { }

    public saveBranche(branche: Branche) {
        return this.http.post(this.api_url + '/add-branche', branche)
      }
      public getAllBranche() {
        return this.http.get(this.api_url + '/retrieve-all-branche')
      }
     
  }