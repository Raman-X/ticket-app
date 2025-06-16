import { MessageSquareWarning } from "lucide-react";
import React, { cloneElement } from "react";

type PlaceholderProps = {
  label: string;
  icon?: React.ReactElement<React.SVGProps<SVGSVGElement>>;
  button?: React.ReactElement<React.HTMLAttributes<HTMLElement>>;
};

const Placeholder = ({
  label,
  icon = <MessageSquareWarning />,
  button = <div />,
}: PlaceholderProps) => {
  return (
    <div className="flex-1 self-center flex gap-2 flex-col items-center justify-center">
      {cloneElement(icon, { className: "w-16 h-16" })}
      <h2 className="text-3xl text-center">{label}</h2>
      {cloneElement(button, { className: "h-10 mt-1 scale-105 " })}
    </div>
  );
};

export default Placeholder;
