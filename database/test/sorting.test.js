import { prisma } from "../src/prisma-client";


describe('Prisma Client', () => {

  it('Should can do sorting', async () => {
    const customer = await prisma.customer.findMany({
      skip: 0,
      take: 10,
      orderBy: [
        {
          name: 'asc'
        },
        {
          email: 'desc'
        }
      ],
    });
    console.table(customer);
  });

});