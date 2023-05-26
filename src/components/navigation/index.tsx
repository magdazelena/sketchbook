import Link from "next/link";

type Navigation = {
  title: string;
  categories: Category[];
};
type Category = {
  name: string;
  id: string;
};

export default function Navigation({ title, categories }: Navigation) {
  return (
    <div>
      <p>{title}</p>
      <nav>
        <ul>
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
