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
  async getById(id, include) {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
      include,
    });
    return user;
  },
  async find(where) {
    const user = await prisma.user.findUnique({
      where,
      include: {
        city: true,
      },
    });
    return user;
  },
};

export let CarData = {
  async create(data) {
    const response = await prisma.car.create({
      data,
    });
    return response;
  },
  async update(id, data) {
    const response = await prisma.car.update({
      data,
      where: {
        id,
      },
    });
    return response;
  },
  async getById(id) {
    const response = await prisma.car.findUnique({
      where: {
        id,
      },
    });
    return response;
  },
  async find(where, include) {
    where.NOT = {
      deleted: true,
    };
    const response = await prisma.car.findMany({
      where,
      include,
    });
    return response;
  },
  async delete(id) {
    const response = await prisma.car.update({
      where: { id },
      data: { deleted: true },
    });
    return response;
  },
  async count(where) {
    const response = await prisma.car.count({
      where,
    });
    return response;
  },
};

export let PostData = {
  async create(data) {
    const response = await prisma.post.create({
      data,
    });
    return response;
  },
  async update(id, data) {
    const response = await prisma.post.update({
      data,
      where: {
        id,
      },
    });
    return response;
  },
  async getById(id, include) {
    const response = await prisma.post.findUnique({
      where: {
        id,
      },
      include,
    });
    return response;
  },
  async find(where, include) {
    const response = await prisma.post.findMany({
      orderBy: [
        {
          deleted: "asc",
        },
        {
          createdAt: "desc",
        },
      ],
      where,
      include,
    });
    return response;
  },
  async delete(id) {
    const response = await prisma.post.update({
      where: { id },
      data: { deleted: true },
    });
    return response;
  },
  async count(where) {
    const response = await prisma.post.count({
      where,
    });
    return response;
  },
};

export let AnswerData = {
  async create(data, include) {
    const response = await prisma.answer.create({
      data,
      include,
    });
    return response;
  },
  async update(id, data) {
    const response = await prisma.answer.update({
      data,
      where: {
        id,
      },
    });
    return response;
  },
  async getById(id, include) {
    const response = await prisma.answer.findUnique({
      where: {
        id,
      },
      include,
    });
    return response;
  },
  async find(where, include) {
    const response = await prisma.answer.findMany({
      orderBy: [
        {
          createdAt: "desc",
        },
      ],
      where,
      include,
    });
    return response;
  },
  async delete(id) {
    const response = await prisma.answer.update({
      where: { id },
      data: { deleted: true },
    });
    return response;
  },
  async count(where) {
    const response = await prisma.answer.count({
      where,
    });
    return response;
  },
};

export let MarketData = {
  async create(data) {
    const response = await prisma.market.create({
      data,
    });
    return response;
  },
  async update(id, data) {
    const response = await prisma.market.update({
      data,
      where: {
        id,
      },
    });
    return response;
  },
  async getById(id, include) {
    const response = await prisma.market.findUnique({
      where: {
        id,
      },
      include,
    });
    return response;
  },
  async find(where, include) {
    const response = await prisma.market.findMany({
      orderBy: [
        {
          createdAt: "desc",
        },
      ],
      where,
      include,
    });
    return response;
  },
  async delete(id) {
    const response = await prisma.market.update({
      where: { id },
      data: { deleted: true },
    });
    return response;
  },
  async count(where) {
    const response = await prisma.market.count({
      where,
    });
    return response;
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
