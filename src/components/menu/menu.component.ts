import { Component, OnInit } from '@angular/core'
import { MenuService } from './menu.service'
import { BehaviorSubject } from 'rxjs/BehaviorSubject'

@Component ({
    moduleId: module.id,
    selector: 'djb-menu',
    templateUrl: 'menu.component.html',
    providers: [MenuService]
})

export class MenuComponent implements OnInit {

    smoothiesActive: boolean = false;
    juicesActive: boolean = false;
    shotsActive: boolean = false;
    spikesActive: boolean = false;
    drinksActive: boolean = false;
    foodActive: boolean = false;
    item:any = null;
    isLoading:BehaviorSubject<boolean> = new BehaviorSubject(true);

    constructor (private _menuService: MenuService) {   }

    ngOnInit(){
        this.getMenu();
        this.isLoading.value
    }

    toggleSmoothies(){
        this.smoothiesActive = !this.smoothiesActive;
    }

    toggleJuices(){
        this.juicesActive = !this.juicesActive
    }

    toggleShots(){
        this.shotsActive = !this.shotsActive
    }

    toggleSpikes(){
        this.spikesActive = !this.spikesActive
    }

    toggleDrinks(){
        this.drinksActive = !this.drinksActive
    }

    toggleFood(){
       this.foodActive = !this.foodActive 
    }

    getMenu(){ 
        this._menuService.getMenu()
        .then( () => 
            this.item = this._menuService.menu
        ).then( () => {
            console.log(this.item.smoothies)
            }
        ).then( () => this.isLoading.next(false)
        ).then( () => console.log(this.isLoading.value)
        )
    };
}