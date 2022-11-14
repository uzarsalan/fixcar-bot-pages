import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

BigInt.prototype["toJSON"] = function () {
  return this.toString();
};

export let UserData = {
  async create(data) {
    const user = await prisma.user.create({
      data,
    });
    return user;
  },
  async update(id, data) {
    const user = await prisma.user.update({
      data,
      where: {
        id,
      },
    });
    return user;
  },
  async getById(id) {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });
    return user;
  },
  async find(where) {
    const user = await prisma.user.findUnique({
      where,
    });
    return user;
  },
};

export let CarData = {
  async create(data) {
    const user = await prisma.car.create({
      data,
    });
    return user;
  },
  async update(id, data) {
    const user = await prisma.car.update({
      data,
      where: {
        id,
      },
    });
    return user;
  },
  async getById(id) {
    const user = await prisma.car.findUnique({
      where: {
        id,
      },
    });
    return user;
  },
  async find(where) {
    const user = await prisma.car.findUnique({
      where,
    });
    return user;
  },
};

export let Dictionaries = {
  async getCarManufacturers() {
    return ["Toyota", "Mazda", "BMW"];
  },
};

// export async function main() {
//   const user = await prisma.user.create({
//     data: {
//       name: "Alice",
//       email: "alice@prisma.io",
//     },
//   });
//   console.log(user);
// }

// main()
//   .then(async () => {
//     await prisma.$disconnect();
//   })
//   .catch(async (e) => {
//     console.error(e);
//     await prisma.$disconnect();
//     process.exit(1);
//   });
