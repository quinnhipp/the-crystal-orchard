import Navbar from "../components/navbar";
import Link from "next/link";

const Band = () => {
  return (
    <Link href="/band">
      <Navbar />
      The Band
    </Link>
  );
};
export default Band;
