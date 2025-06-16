import Heading from "@/components/heading";
import { ticketsPath } from "@/paths";
import Link from "next/link";
const HomePage = () => {
  return (
    <div className="flex flex-1 flex-col gap-y-8 ">
      <Heading title="HomePage" description="Welcome to the home page" />

      <div className="flex flex-1 flex-col items-center animate-fade-in-from-top">
        <Link href={ticketsPath()} className="underline">
          Go to tickets page
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
