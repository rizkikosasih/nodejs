import { prisma, getLastId } from "./../src/prisma-client"

describe('Prisma Client', () => {

  it('Should be able to query sql', async () => {
    const data = await getLastId('sample'), id = parseInt(data ? data.id : 0);

    const object = await prisma.$queryRaw`SELECT * from sample where id=${id}`;
    console.table(object);
    expect(object[0].name).toContain(`Rizki`)
  });

});