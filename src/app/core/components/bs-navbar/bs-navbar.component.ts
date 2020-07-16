import { Observable } from 'rxjs/Observable';
import { ShoppingCart } from 'shared/models/shopping-cart';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { IAppUser } from 'shared/models/app-user';
import { AuthService } from 'shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {


  navbarCollapsed: boolean;
  appUser: IAppUser = {} as IAppUser;
  totalCart$: Observable<ShoppingCart>;

  constructor(private cartService: ShoppingCartService, 
    private authService: AuthService,
    private router: Router) { }

  async ngOnInit() {
    this.authService.appUser$.subscribe(user => this.appUser = user);
    this.totalCart$ = await this.cartService.getCart();
  }
  home(){
    this.router.navigate(['/']).then(()=>{
      window.location.reload();
    });
  }

  logout() {
    this.authService.logout();
  }

}
