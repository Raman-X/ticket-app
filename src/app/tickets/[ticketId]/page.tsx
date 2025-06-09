import initialTickets from "@/data";

type TicketPageProps = {
  params: {
    ticketId: string;
  };
};

const ticketId = ({ params }: TicketPageProps) => {
  const ticket = initialTickets.find((ticket) => ticket.id === params.ticketId);
  if (!ticket) {
    return "ticket not found";
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
