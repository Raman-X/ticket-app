import inititalTickets from "@/data";
import Link from "next/link";
import { ticketPath } from "@/paths";

const TICKET_ICON = {
  OPEN: "O",
  DONE: "X",
  IN_PROGRESS: "<",
};

const TicketsPage = () => {
  return (
    <div>
      <h1>this is tickets page</h1>
      {inititalTickets.map((ticket) => {
        return (
          <div key={ticket.id}>
            <div>{TICKET_ICON[ticket.status]}</div>
            <div>{ticket.title}</div>
            <Link href={ticketPath(ticket.id)} className="underline text-sm">
              go to {ticket.id} page
            </Link>
          </div>
        );
      })}
    </div>
  );
};
export default TicketsPage;
