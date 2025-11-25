import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <h1>Portfolios</h1>
      <div className="flex gap-8 mx-auto">
        <Link
          href="/pablo"
        >
          Pablo Portfolio
        </Link>
        <Link
          href="/elian"
        >
          Elian Portfolio
        </Link>
      </div>
    </div>
  );
}
