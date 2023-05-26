import Head from "next/head";
import { prisma } from "../db";

export default async function Home() {
  const projects = await prisma.project.findMany();

  return (
    <>
      <header>Hello there</header>
      <div className="projects flex">
        {projects.map((project) => (
          <li key={project.id}>{project.title}</li>
        ))}
      </div>
    </>
  );
}
