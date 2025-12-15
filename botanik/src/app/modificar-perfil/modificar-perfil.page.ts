import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modificar-perfil',
  templateUrl: './modificar-perfil.page.html',
  styleUrls: ['./modificar-perfil.page.scss'],
  standalone: false,
})
export class ModificarPerfilPage implements OnInit {
  name: string = '';
  email: string = '';
  newPassword: string = '';
  confirmNewPassword: string = '';

  constructor(
    private alertController: AlertController,
    private router: Router
  ) {}

  ngOnInit() {}

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

  async guardarCambios() {
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

    if (this.newPassword || this.confirmNewPassword) {
      if (this.newPassword.length < 6) {
        await this.mostrarAlerta('La nueva contraseña debe tener al menos 6 caracteres.');
        return;
      }

      if (this.newPassword !== this.confirmNewPassword) {
        await this.mostrarAlerta('Las contraseñas no coinciden.');
        return;
      }
    }

    console.log('Perfil actualizado:', this.name, this.email);
    this.router.navigate(['/home'], { state: { user: this.name } });
  }
}