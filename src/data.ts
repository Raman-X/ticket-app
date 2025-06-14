type Ticket = {
  id: string;
  title: string;
  content: string;
  status: "DONE" | "OPEN" | "IN_PROGRESS";
};
const initialTickets: Ticket[] = [
  {
    id: "1",
    title: "Ticket 1",
    content: "This is the first ticket",
    status: "DONE",
  },
  {
    id: "2",
    title: "Ticket 2",
    content: "This is the second ticket",
    status: "OPEN",
  },
  {
    id: "3",
    title: "Ticket 3",
    content: "This is the third ticket",
    status: "IN_PROGRESS",
  },
];

export default initialTickets;
