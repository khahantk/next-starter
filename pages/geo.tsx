import type { NextPage } from "next";
import Link from "next/link";

const GeoLocation: NextPage = () => {
  return (
    <div>
      <h1>GeoLocation</h1>
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
export async function getStaticProps() {
  return {
    props: {},
  };
}
export default GeoLocation;
