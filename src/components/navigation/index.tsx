import Link from "next/link";
import { Coming_Soon } from "next/font/google";

type Navigation = {
  title: string;
  categories: Category[];
};
type Category = {
  name: string;
  id: string;
};

const slackside = Coming_Soon({ subsets: ["latin"], weight: "400" });
export default function Navigation({ title, categories }: Navigation) {
  return (
    <div className="flex justify-between border-b-2 border-slate-950 p-10 ">
      <h2 className={`w-1/5 text-2xl ${slackside.className}`}>{title}</h2>
      <nav className="w-4/5">
        <ul className="flex justify-evenly w-full">
          <li>
            <Link href="/">All projects</Link>
          </li>
          {categories.map((category) => (
            <li key={category.id}>
              <Link href={`/categories/${category.name}`}>{category.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
