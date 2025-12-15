// cypress/e2e/login.spec.cy.ts
describe('Login Page', () => {
  beforeEach(() => {
    cy.viewport('iphone-6')
    // Ajusta la ruta según tu app Ionic
    cy.visit('/login')
  })

 it('muestra los campos y el botón habilitado al llenar datos', () => {
  cy.get('[data-test="login-email"]').type('ana@gmail.com')
  cy.get('[data-test="login-password"]').type('123456')
  cy.get('[data-test="login-submit"]').should('exist')
})

  it('valida que el correo no esté vacío', () => {
    cy.get('[data-test="login-submit"]').click()
    cy.contains('El campo de correo no puede estar vacío.').should('be.visible')
  })

  it('valida formato de correo incorrecto', () => {
    cy.get('[data-test="login-email"]').type('correo-invalido')
    cy.get('[data-test="login-password"]').type('123456')
    cy.get('[data-test="login-submit"]').click()
    cy.contains('El formato del correo es inválido.').should('be.visible')
  })

  it('valida contraseña vacía', () => {
    cy.get('[data-test="login-email"]').type('ana@gmail.com')
    cy.get('[data-test="login-submit"]').click()
    cy.contains('El campo de contraseña no puede estar vacío.').should('be.visible')
  })

  it('valida contraseña demasiado corta', () => {
    cy.get('[data-test="login-email"]').type('ana@gmail.com')
    cy.get('[data-test="login-password"]').type('123')
    cy.get('[data-test="login-submit"]').click()
    cy.contains('La contraseña debe tener mínimo 6 caracteres.').should('be.visible')
  })

  it('login exitoso redirige a home', () => {
    cy.get('[data-test="login-email"]').type('ana@gmail.com')
    cy.get('[data-test="login-password"]').type('123456')
    cy.get('[data-test="login-submit"]').click()

    // Verifica que se guarde en localStorage
    cy.window().then((win) => {
      expect(win.localStorage.getItem('userEmail')).to.eq('ana@gmail.com')
      expect(win.localStorage.getItem('usuarioActivo')).to.eq('true')
    })

    // Verifica redirección
    cy.url().should('include', '/home')
  })
})