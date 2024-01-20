import { prisma, createPhone, getLastId } from "./../src/prisma-client";

describe("Prisma Client", () => {

  it("Should can create many records", async () => {
    const data = await getLastId(), lastId = parseInt(data ? data.id : 0);
    const num = lastId + 1, num2 = lastId + 2;
    const { count } = await prisma.customer.createMany({
      data: [
        {
          name: `Rizki ${num}`,
          email: `rizki${num}@gmail.com`,
          phone: createPhone(num)
        },
        {
          name: `Rizki ${num2}`,
          email: `rizki${num2}@gmail.com`,
          phone: createPhone(num2)
        },
      ]
    });
    console.info(`affected rows ${count}`);
    expect(count).toBe(2);
  });

  it('Should can update many records', async () => {
    const { count } = await prisma.customer.updateMany({
      data: {
        name: 'Rizki 1'
      },
      where: {
        email: 'rizki@gmail.com'
      }
    })
    expect(count).toBe(1);
  });

  it('Should can delete many records', async () => {
    const { count } = await prisma.customer.deleteMany({
      where: {
        email: 'kosong'
      }
    })
    expect(count).toBe(0);
  });

  it('Should can read many records', async () => {
    const customer = await prisma.customer.findMany({})
    console.table(customer);
    expect(customer.length).toBeGreaterThan(5);
  });

});