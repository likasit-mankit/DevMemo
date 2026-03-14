import { Card, CardBody } from "@heroui/card";
import { Link } from "@heroui/link";

interface CheatsheetCardProps {
  title: string;
  icon?: React.ReactNode;
  href?: string;
  bgColor?: string;
}

export function CheatsheetCard({ title, icon, href = "#", bgColor = "bg-default-100" }: CheatsheetCardProps) {
  return (
    <Card
      isPressable
      className="w-full h-full border-none hover:scale-[1.02] transition-transform"
      shadow="sm"
    >
      <CardBody className={`flex flex-col items-center justify-center gap-3 p-6 ${bgColor}`}>
        {icon && (
          <div className="flex items-center justify-center h-12 w-12 text-3xl">
            {icon}
          </div>
        )}
        <p className="text-sm font-medium text-center">{title}</p>
      </CardBody>
    </Card>
  );
}
