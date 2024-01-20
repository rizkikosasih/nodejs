import { prisma } from "../src/prisma-client"

describe('Prisma Client - Where Conditional and Operator', () => {
  it('should can be where', async () => {
    const products = await prisma.product.findMany({
      where: {
        OR: [{
          name: 'Product 1'
        }, {
          name: 'Product 3'
        }],
      },
      orderBy: [{ name: 'asc' }]
    })

    expect(products.length).toBe(2)

    expect(products[0].name).toBe('Product 1')
    expect(products[1].name).toBe('Product 3')
  })
})