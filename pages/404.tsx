import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import faykuslogo from "../public/faykus-logo-vertical.svg";

const Page404 = () => {
  const router = useRouter();

  return (
    <div className="bg-gray-100 h-screen justify-center">
      <center className="mt-24 m-auto">
        <Link href="/">
          <Image src={faykuslogo} alt="faykus financial logo" />
        </Link>
        <div className="mt-16">
          <h1>404</h1>
          <h2 className="whitespace-pre-line" style={{ marginTop: 0 }}>
            Sorry, we couldn't find{"\n"}what you are looking for!
          </h2>
        </div>
      </center>
      <center className="mt-8">
        <button className="app-button" onClick={() => router.back()}>
          Go back
        </button>
      </center>
    </div>
  );
};

export default Page404;
