import { get } from "lodash";

describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should updated display of running total',() =>{
    cy.get('#number4').click();
    cy.get('#number2').click();
    cy.get('#running-total').should('contain','42')
  })
  it('should update total with result',()=>{
    cy.get('#number5').click();
    cy.get('#operator-add').click();
    cy.get('#number1').click();
    cy.get('#operator-equals').click();
    cy.get('#running-total').should('contain','6')
  })
  it('should be able to use multiple operators',()=>{
    cy.get('#number4').click();
    cy.get('#operator-add').click();
    cy.get('#number5').click();
    cy.get('#operator-multiply').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('#running-total').should('contain','18');
   })
  it('should check a negative numbers',()=>{
    cy.get('#number3').click();
    cy.get('#operator-subtract').click();
    cy.get('#number5').click();
    cy.get('#operator-multiply').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('#running-total').should('contain','-4');
  })
  it('should check decimal numbers',()=>{
    cy.get('#number1').click();
    cy.get('#decimal').click();
    cy.get('#number5').click();
    cy.get('#operator-multiply').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('#running-total').should('contain','3');
  })
  it('should check large numbers',() =>{
    cy.get('#number4').click();
    cy.get('#number2').click();
    cy.get('#number5').click();
    cy.get('#number2').click();
    cy.get('#number2').click();
    cy.get('#operator-multiply').click();
    cy.get('#number5').click();
    cy.get('#number5').click();
    cy.get('#number2').click();
    cy.get('#number4').click();
    cy.get('#operator-equals').click();
    cy.get('#running-total').should('contain','234891528');

  })
  it('should not divide by 0',()=>{
    cy.get('#number4').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('#running-total').should('contain','you cannot divide by zero');



  })
})