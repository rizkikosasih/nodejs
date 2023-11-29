import { prisma, getLastId } from "./../src/prisma-client"

describe('Prisma Client', () => {

  it('Should be able to execute sql insert', async () => {
    const data = await getLastId('sample'), name = `Rizki ${parseInt(data ? data.id : 0) + 1}`;

    const aff_rows = await prisma.$executeRaw`INSERT into sample (name) values (${name})`;
    expect(aff_rows).toBe(1);
  });

});