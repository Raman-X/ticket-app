import Link from "next/link";
import { ticketsPath } from "@/paths";
const HomePage = () => {
  return (
    <div className="m-2">
      <h1>HOme page</h1>
      <Link href={ticketsPath()} className="underline">
        go to tickets page
      </Link>
    </div>
  );
};

export default HomePage;
