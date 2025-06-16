import Placeholder from "@/components/placeholder";
import { Button } from "@/components/ui/button";
import initialTickets from "@/data";
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
    <>
      <h1>ticket id = {ticket?.id}</h1>
      <h2>ticket title: {ticket?.title}</h2>
      <p>{ticket?.content}</p>
      <p>{ticket?.status}</p>
    </>
  );
};
export default ticketPage;
