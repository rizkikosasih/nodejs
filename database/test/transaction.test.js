import { prisma, createPhone, getLastId } from "../src/prisma-client";

describe('Prisma Client', () => {

  it('Should can execute sequential transaction', async () => {
    const data = await getLastId(), lastId = parseInt(data.id);
    const num = lastId + 1, num2 = lastId + 2;
    const [rizki, kosasih] = await prisma.$transaction([
      prisma.customer.create({
        data: {
          name: `Rizki ${num}`,
          email: `rizki${num}@gmail.com`,
          phone: createPhone(num)
        }
      }),
      prisma.customer.create({
        data: {
          name: `Rizki ${num2}`,
          email: `rizki${num2}@gmail.com`,
          phone: createPhone(num2)
        }
      }),
    ], {
      timeout: 360
    });
    expect(rizki.name).toBe(`Rizki ${num}`);
    expect(kosasih.name).toBe(`Rizki ${num2}`);
  });

  it('Should can execute interactive transaction', async () => {
    const data = await getLastId(), lastId = parseInt(data.id);
    const num = lastId + 1, num2 = lastId + 2;
    const [rizki, kosasih] = await prisma.$transaction(async (ps) => {
      const rizki = await ps.customer.create({
        data: {
          name: `Rizki ${num}`,
          email: `rizki${num}@gmail.com`,
          phone: createPhone(num)
        }
      })
      const kosasih = await ps.customer.create({
        data: {
          name: `Rizki ${num2}`,
          email: `rizki${num2}@gmail.com`,
          phone: createPhone(num2)
        }
      })
      return [rizki, kosasih]
    }, {
      timeout: 360
    });
    expect(rizki.name).toBe(`Rizki ${num}`);
    expect(kosasih.name).toBe(`Rizki ${num2}`);
  });

});