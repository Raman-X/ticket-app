import inititalTickets from "@/data";
import Link from "next/link";
import { ticketPath } from "@/paths";
import clsx from "clsx";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CircleCheck, File, Pencil } from "lucide-react";
import Heading from "@/components/heading";

const TICKET_ICON = {
  OPEN: <CircleCheck />,
  DONE: <Pencil />,
  IN_PROGRESS: <File />,
};

const TicketsPage = () => {
  return (
    <div className="flex flex-1 flex-col gap-y-8">
      <Heading title="Tickets" description="All your ticiets at one place" />
      <div className="flex-1 flex flex-col items-center gap-y-4 animate-fade-in-from-top">
        {inititalTickets.map((ticket) => {
          return (
            <Card key={ticket.id} className="w-full max-w-[420px]">
              <CardHeader>
                <CardTitle className="flex gap-x-2 items-center text-2xl">
                  <span>{TICKET_ICON[ticket.status]}</span>
                  <span className="truncate">{ticket.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <span className="line-clamp-3 whitespace-break-spaces">
                  {ticket.content}
                </span>
              </CardContent>
              <CardFooter>
                <Link
                  href={ticketPath(ticket.id)}
                  className="underline text-sm"
                >
                  View
                </Link>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
export default TicketsPage;
