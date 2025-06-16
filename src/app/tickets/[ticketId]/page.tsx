import Placeholder from "@/components/placeholder";
import { Button } from "@/components/ui/button";
import initialTickets from "@/data";
import TicketItem from "@/features/ticket/components/ticketItem";
import { ticketsPath } from "@/paths";
import Link from "next/link";

type TicketPageProps = {
  params: Promise<{
    ticketId: string;
  }>;
};

const ticketPage = async ({ params }: TicketPageProps) => {
  const ticketId = (await params).ticketId;
  const ticket = initialTickets.find((ticket) => ticket.id === ticketId);
  if (!ticket) {
    return (
      <Placeholder
        label="Ticket not found"
        button={
          <Button variant="outline" asChild>
            <Link href={ticketsPath()}>Go to Tickets</Link>
          </Button>
        }
      />
    );
  }
  return (
    <div className="flex justify-center animate-fade-in-from-top">
      <TicketItem ticket={ticket} isDetail />
    </div>
  );
};
export default ticketPage;
