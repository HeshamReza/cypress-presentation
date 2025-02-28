import Login from "../../src/pages/Login";
import React from 'react';

describe('Login.cy.js', () => {
  it('Login Component', () => {
    cy.mount(<Login />)
  })
});