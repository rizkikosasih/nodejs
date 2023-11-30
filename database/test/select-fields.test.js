import { prisma, createPhone, getLastId } from "../src/prisma-client";

describe('Prisma Client', () => {

  it('Should can create and select fields', async () => {
    const data = await getLastId(), lastId = parseInt(data ? data.id : 0);
    const num = lastId + 1
    const customer = await prisma.customer.create({
      data: {
        name: `Rizki ${num}`,
        email: `rizki${num}@gmail.com`,
        phone: createPhone(num)
      },
      select: {
        id: true,
        name: true,
      }
    });
    console.table(customer);
    expect(customer.name).toBe(`Rizki ${num}`);
    expect(customer.email).toBeUndefined();
    expect(customer.phone).toBeUndefined();
  });

  it('Should can select fields', async () => {
    const customer = await prisma.customer.findMany({
      select: {
        id: true,
        name: true,
      },
      skip: 0,
      take: 10,
    });
    console.table(customer);
    for (const item of customer) {
      expect(item.id).toBeDefined();
      expect(item.name).toBeDefined();
      expect(item.email).toBeUndefined();
      expect(item.phone).toBeUndefined();
    }
  });

});