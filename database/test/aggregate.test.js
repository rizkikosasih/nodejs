import { prisma } from "../src/prisma-client";

describe('Prisma Client', () => {

  it('Should be can aggregate function', async () => {
    const result = await prisma.product.aggregate({
      _min: {
        price: true,
        stock: true,
      },
      _max: {
        price: true,
        stock: true,
      },
      _avg: {
        price: true,
        stock: true,
      },
    });
    console.info(result);
  });

  it('Should be can aggregate function with group by', async () => {
    const result = await prisma.product.groupBy({
      by: ['category'],
      _min: {
        price: true,
        stock: true,
      },
      _max: {
        price: true,
        stock: true,
      },
      _avg: {
        price: true,
        stock: true,
      },
    });
    console.table(result);
    for (const item of result) {
      console.info(`min price: ${item._min.price}. max price: ${item._max.price}, avg price: ${item._avg.price}`);
      console.info(`min stock: ${item._min.stock}. max stock: ${item._max.stock}, avg stock: ${item._avg.stock}`);
    }
    console.info(`Number of results: ${result.length}`);
  });

  it('Should be can aggregate function with group by & having', async () => {
    const result = await prisma.product.groupBy({
      by: ['category'],
      _min: {
        price: true,
        stock: true,
      },
      _max: {
        price: true,
        stock: true,
      },
      _avg: {
        price: true,
        stock: true,
      },
      having: {
        price: {
          _avg: {
            gt: 2000
          }
        }
      }
    });
    console.table(result);
  });

});