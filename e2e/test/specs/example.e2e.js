describe("Veggy - Home Screen", () => {
  it("should have component", async () => {
    const PRODUCT_COMPONENT = '//*[@id="root"]/div/main/div/div/div[1]';
    const component = await $(PRODUCT_COMPONENT);
    expect(component).toBeExisting();
  });

  it("should have Brocolli Product", async () => {
    await browser.pause(500);
    const header = await $("h4*=Brocolli");
    expect(header).toBeExisting();
  });

  it("should have Cart info", async () => {
    const header = await $(".cart-info");
    expect(header).toBeExisting();
  });

  it("should have Search", async () => {
    const header = await $('input[type="search"]');
    expect(header).toBeExisting();
  });

  it("should have Product Price", async () => {
    const header = await $(".product-price");
    expect(header).toBeExisting();
  });

  it("should have Product Image", async () => {
    const header = await $(".product-image");
    expect(header).toBeExisting();
  });

  it("should not have alcohol Product", async () => {
    const header = await $("h4*=alcohol");
    expect(header).toBeFalsy();
  });

  it("should Add Product to Cart", async () => {
    const elem = await $('//*[@id="root"]/div/main/div/div/div[1]/div[2]/button');

    elem.click();

    await browser.pause(50);

    (await $('//*[@id="root"]/div/header/div/div[3]/a')).click();

    await browser.pause(50);

    (await $('//*[@id="root"]/div/header/div/div[3]/div[2]/div/button')).click();

    await browser.pause(50);

    (await $('//*[@class="checkout-page"]/div/div/div/div[1]/button')).click();

    await browser.pause(500);

    const loginBtn = await $('//*[@id="root"]/div/div/div[2]/form/button');

    expect(loginBtn).toBeExisting();
  });
});
