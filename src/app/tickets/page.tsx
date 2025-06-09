import inititalTickets from "@/data";
import Link from "next/link";
const TicketsPage = () => {
  return (
    <div>
      <h1>this is tickets page</h1>
      {inititalTickets.map((ticket) => {
        return (
          <>
            <h1>{ticket.title}</h1>
            <Link href={`/tickets/${ticket.id}`} className="underline text-sm">
              go to {ticket.id} page
            </Link>
          </>
        );
      })}
    </div>
  );
};
export default TicketsPage;
