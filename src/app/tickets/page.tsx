import inititalTickets from "@/data";

import { CircleCheck, File, Pencil } from "lucide-react";
import Heading from "@/components/heading";
import TicketItem from "@/features/ticket/components/ticketItem";

const TicketsPage = () => {
  return (
    <div className="flex flex-1 flex-col gap-y-8">
      <Heading title="Tickets" description="All your ticiets at one place" />
      <div className="flex-1 flex flex-col items-center gap-y-4 animate-fade-in-from-top">
        {inititalTickets.map((ticket) => {
          return <TicketItem ticket={ticket} key={ticket.id} />;
        })}
      </div>
    </div>
  );
};
export default TicketsPage;
