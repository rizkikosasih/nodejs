import { prisma } from "../src/prisma-client";

describe('Prisma Client', () => {

  it('Should can count data', async () => {
    const total = await prisma.customer.count({
      where: {
        email: 'rizki@gmail.com'
      }
    });
    expect(total).toBe(1);
  });

});