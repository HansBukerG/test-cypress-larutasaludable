describe('template spec', () => {
  it('Should loads banners for brand and ingredient recipes', () =>{
    cy.visit('https://www.larutasaludable.cl/blogs/recetas/pollo-oriental#hl=es-CL');
    cy.wait(3000);
    cy.get('div[id="qcart-ad-top"]').find('img').should(($imgs) => $imgs.map((i, img) => expect(img.naturalWidth).to.be.greaterThan(0)));
  })

});