import { notFound } from "next/navigation";
import { getProjectBySlug } from "@/services/project.service";

export async function generateStaticParams() {
  return [{ slug: "devsync" }];
}

export default async function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = await getProjectBySlug(params.slug);

  if (!project) notFound();

  return <ProjectDetail project={project} />;
}
