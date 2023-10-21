import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      <h1>Index</h1>
      <p>
        <Link href="/about" passHref>
          Go to about page
        </Link>
      </p>
      <p>
        <Link href="/contact" passHref>
          Go to contact page
        </Link>
      </p>
    </div>
  );
};

export default Home;