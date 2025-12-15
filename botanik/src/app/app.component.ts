import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent implements OnInit {
  userEmail: string = 'Invitado'; // valor por defecto

  constructor(private menu: MenuController, private router: Router) {}

  ngOnInit() {
    this.loadUserEmail();

    //  Actualiza el correo cada vez que cambia la ruta
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.loadUserEmail();
      }
    });
  }

  loadUserEmail() {
    const storedEmail = localStorage.getItem('userEmail');
    this.userEmail = storedEmail ? storedEmail : 'Invitado';
  }

  closeMenu() {
    this.menu.close('main');
  }

  cerrarSesion() {
    localStorage.removeItem('usuarioActivo');//remueve usuario activo al  cerrar sesion
    localStorage.removeItem('userEmail'); //  o localStorage.clear() si se guardan más cosas
    this.userEmail = 'Invitado'; // actualiza el menú inmediatamente
    this.menu.close('main');
    this.router.navigate(['/login']); // opcional: redirige al login
  }
}