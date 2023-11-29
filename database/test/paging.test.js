import { prisma } from "../src/prisma-client";


describe('Prisma Client', () => {

  it('Should can do paging', async () => {
    const page = await prisma.customer.findMany({
      skip: 0,
      take: 1,
    });
    expect(page.length).toBe(1)

    const page2 = await prisma.customer.findMany({
      skip: 1,
      take: 1,
    });
    expect(page2.length).toBe(1);

    const page3 = await prisma.customer.findMany({
      skip: 2,
      take: 1,
    });
    expect(page3.length).toBe(1);
  });

});