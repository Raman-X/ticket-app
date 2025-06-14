import Link from "next/link";
import { ticketsPath } from "@/paths";
const HomePage = () => {
  return (
    <div className="flex flex-1 flex-col gap-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">HomePage</h1>
        <p className="text-sm ">Your home place to start</p>
      </div>

      <div className="flex flex-1 flex-col items-center">
        <Link href={ticketsPath()} className="underline">
          go to tickets page
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
