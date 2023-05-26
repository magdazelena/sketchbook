import Link from "next/link";
export async function generateMetadata({
  params,
}: {
  params: { title: string };
}) {
  return {
    title: params.title,
  };
}

export default function Project({ params }: { params: { title: string } }) {
  return (
    <>
      <h1>{params.title}</h1>
      <h2>
        <Link href="/">← Back to home</Link>
      </h2>
    </>
  );
}
