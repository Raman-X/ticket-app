type Ticket = {
  id: string;
  title: string;
  content: string;
  status: "DONE" | "OPEN" | "IN PROGRESS";
};
const initialTickets: Ticket[] = [
  {
    id: "1",
    title: "ticket 1",
    content: "This is the first ticket",
    status: "DONE",
  },
  {
    id: "2",
    title: "ticket 2",
    content: "This is the second ticket",
    status: "DONE",
  },
];

export default initialTickets;
