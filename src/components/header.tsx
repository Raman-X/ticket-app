import { homePath, ticketsPath } from "@/paths";
import { Kanban } from "lucide-react";
import Link from "next/link";
import { ThemeSwitcher } from "./themes/theme-switcher";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <div>
      <nav
        className="fixed top-0 left-0 right-0 z-20 
          flex justify-between items-center gap-2 
          px-5 py-2.5 w-full border-b 
          backdrop-blur bg-background/25 
          supports-[backdrop-blur]:bg-background/60"
      >
        <div>
          <Button asChild variant={"ghost"} size={"lg"}>
            <Link href={homePath()}>
              <Kanban className="size-8" />
              <h1 className="font-semibold text-lg lg">TicketBounty</h1>
            </Link>
          </Button>
        </div>
        <div>
          <ThemeSwitcher />
          <Button asChild variant={"default"} className="ml-2">
            <Link href={ticketsPath()}>Tickets</Link>
          </Button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
