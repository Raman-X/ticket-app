import Link from "next/link";
const HomePage = () => {
  return (
    <div className="m-2">
      <h1>HOme page</h1>
      <Link href="/tickets" className="underline">
        go to tickets page
      </Link>
    </div>
  );
};

export default HomePage;
