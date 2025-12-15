import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage {
  email: string = '';
  password: string = '';

  constructor(
    private alertController: AlertController,
    private router: Router
  ) {}

  async mostrarAlerta(mensaje: string) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: mensaje,
      buttons: ['OK'],
    });
    await alert.present();
  }
//validar correo
  validarEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  async login() {
    if (!this.email.trim()) {
      await this.mostrarAlerta('El campo de correo no puede estar vacío.');
      return;
    }

    if (!this.validarEmail(this.email)) {
      await this.mostrarAlerta('El formato del correo es inválido.');
      return;
    }

    if (!this.password.trim()) {
      await this.mostrarAlerta('El campo de contraseña no puede estar vacío.');
      return;
    }

    if (this.password.length < 6) {
      await this.mostrarAlerta('La contraseña debe tener mínimo 6 caracteres.');
      return;
    }

    //  Guardar correo temporalmente para mostrarlo en el menú
    localStorage.setItem('userEmail', this.email);

    localStorage.setItem('usuarioActivo','true'); //simula sesión iniciada

    // Redirección a una ruta existente
    this.router.navigate(['/home']);
  }
}