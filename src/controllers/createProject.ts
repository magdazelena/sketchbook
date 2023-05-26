import { prisma } from "../db";
//todo: types, categories
export default async function createProject(
  title: string,
  description: string
) {
  return prisma.project.create({
    data: {
      title,
      description,
      categories: {
        create: [
          {
            assignedAt: new Date(),
            category: {
              create: {
                name: "p5",
              },
            },
          },
        ],
      },
    },
  });
}
