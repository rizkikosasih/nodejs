import { prisma } from './../src/prisma-client'

describe("Prisma Client", () => {

  it("Should be able to connect", async () => {
    await prisma.$connect()

    await prisma.$disconnect()
  })

})