const { PrismaClient } = require('@prisma/client')
const util = require('util');

const prisma = new PrismaClient()

// A `main` function so that you can use async/await
async function main() {
  // ... you will write your Prisma Client queries here
  const allUsers = await prisma.user.findMany({
    include: { posts: true }
  })
  console.log(util.inspect(allUsers, true, 5, true))
}

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
