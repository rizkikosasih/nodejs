import { prisma, createPhone, getLastId } from "./../src/prisma-client"

describe("Prisma Client", () => {

  it("Should be able to create customer", async () => {
    const data = await getLastId(), lastId = parseInt(data ? data.id : 0);
    const num = lastId + 1
    const customer = await prisma.customer.create({
      data: {
        name: `Rizki ${num}`,
        email: `rizki${num}@gmail.com`,
        phone: createPhone(num)
      },
    }, {
      timeout: 999999
    });
    console.table(customer);
    expect(customer.name).toBe(`Rizki ${num}`);
  });

  it("Should be able to update customers", async () => {
    const customer = await prisma.customer.update({
      data: {
        name: 'Rizki 1',
      },
      where: {
        id: 1
      }
    });
    console.table(customer);
    expect(customer.name).toBe('Rizki 1');
  });

  it("Should be able to read customers", async () => {
    const customer = await prisma.customer.findUnique({
      where: {
        email: 'rizki2@gmail.com'
      }
    });
    console.table(customer);
    expect(customer.name).toBe('Rizki 2');
  });

  it("Should be able to delete customers", async () => {
    await prisma.customer.delete({
      where: {
        email: 'kosong',
      },
    }).catch(() => {
      console.log(`Can't find customer`);
    });
  });

})