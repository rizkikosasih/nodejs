import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient({
  errorFormat: 'pretty',
  log: [
    'query', 'error', 'warn', 'info'
  ]
})

export const createPhone = (last) => {
  let output = '0857', length = 8 - last.toString().length
  for (let i = 0; i < length; i++) {
    output += '0'
  }
  return output + last
}

export const getLastId = (table = 'customer') => {
  if (table === 'customer') {
    return prisma.customer.findFirst({
      select: {
        id: true
      },
      orderBy: {
        id: 'desc'
      },
      take: 1,
    })
  } else if (table === 'sample') {
    return prisma.sample.findFirst({
      select: {
        id: true
      },
      orderBy: {
        id: 'desc'
      },
      take: 1
    })
  }
}