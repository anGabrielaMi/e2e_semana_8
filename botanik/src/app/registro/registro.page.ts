import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: false,
})
export class RegistroPage {
  name: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

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

  validarEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  async registro() {
    if (!this.name.trim()) {
      await this.mostrarAlerta('El nombre es obligatorio.');
      return;
    }

    if (!this.email.trim()) {
      await this.mostrarAlerta('El email es obligatorio.');
      return;
    }

    if (!this.validarEmail(this.email)) {
      await this.mostrarAlerta('El formato del email es inválido.');
      return;
    }

    if (!this.password.trim() || this.password.length < 6) {
      await this.mostrarAlerta('La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    if (this.password !== this.confirmPassword) {
      await this.mostrarAlerta('Las contraseñas no coinciden.');
      return;
    }

    // Registro exitoso (sin simulación)
    console.log('Registro válido:', this.name, this.email);
    this.router.navigate(['/home'], { state: { user: this.name } });
  }
}