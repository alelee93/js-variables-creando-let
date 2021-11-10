describe("index.js", () => {
  it("la variable cambiaDeValor existe", () => {
    expect(cambiaDeValor).to.exist;
  });

  it("la variable cambiaDeValor equivale a false", () => {
    expect(cambiaDeValor).to.equal(false);
  });
});
