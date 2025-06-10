import initialTickets from "@/data";

type TicketPageProps = {
  params: Promise<{
    ticketId: string;
  }>;
};

const ticketId = async ({ params }: TicketPageProps) => {
  const ticketId = (await params).ticketId;
  const ticket = initialTickets.find((ticket) => ticket.id === ticketId);
  if (!ticket) {
    return <>ticket not found</>;
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
export default ticketId;
