describe('HCMatrix Registration Flow', () => {

  beforeEach(() => {
    cy.visit('https://hcmatrix-saas.netlify.app/register');
    Cypress.on('uncaught:exception', (err, runnable) => {
      
      return false; 
    });
  });

  it('should successfully register a new user', () => {
    // Test data
    const userData = {
      fullName: 'Burns Santa',
      organizationName: 'Burning Sun',
      email: 'burningsun@mailinator.com',
      phone: '08101361370',
      password: 'Qwerty1234?!'
    };

    // Fill out form fields using IDs
    cy.get('#fullName', { timeout: 10000 }).type(userData.fullName);
    cy.get('#organization', { timeout: 10000 }).type(userData.organizationName);
    cy.get(('#industry').select('Agriculture'), { timeout: 10000 }).select(userData.industry);
    cy.get('#email', { timeout: 10000 }).type(userData.email);
    cy.get('#phone_number', { timeout: 10000 }).type(userData.phone);
    cy.get('#password', { timeout: 10000 }).type(userData.password);
    cy.get('#cPassword', { timeout: 10000 }).type(userData.password);

    cy.wait(10000); // Pause for manual reCAPTCHA completion

    // Submit the form
    cy.get('button[type="submit"]').click();
  });

});
