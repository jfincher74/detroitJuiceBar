import { Http } from '@angular/http';
import { Injectable } from '@angular/core'; 
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map'

@Injectable()

export class MenuService { 
    constructor(private _http: Http) {}
    
    menu:Object[];

    getMenu(){
        return this._http
        .get("/assets/drinks.json")
        .toPromise()
        .then(res => {
            this.menu = res.json()
        })
    }
}