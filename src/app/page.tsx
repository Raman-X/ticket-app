import Link from "next/link";
import { ticketsPath } from "@/paths";
import Heading from "@/components/heading";
const HomePage = () => {
  return (
    <div className="flex flex-1 flex-col gap-y-8">
      <Heading title="HomePage" description="Welcome to the home page" />

      <div className="flex flex-1 flex-col items-center">
        <Link href={ticketsPath()} className="underline">
          Go to tickets page
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
