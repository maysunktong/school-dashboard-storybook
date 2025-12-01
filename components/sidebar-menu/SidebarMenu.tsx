import Link from "next/link";
import { menuItems } from "@/data/menuItem";
import Tooltip from "../Tooltip";

export default function Menu() {
  return (
    <div className="py-3 px-5 text-gray-400">
      {menuItems.map((group) => (
        <div key={group.title}>
          <span className="hidden lg:block py-3">{group.title}</span>
          <div className="flex flex-col gap-4">
            {group.items.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="flex justify-center lg:justify-start items-center gap-3 hover:text-gray-600"
              >
                <Tooltip label={item.label}>
                  <span>{item.icon}</span>
                </Tooltip>
                <p className="hidden lg:block text-sm">{item.label}</p>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
