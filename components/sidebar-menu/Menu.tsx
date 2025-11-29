import Link from "next/link";
import { menuItems } from "../../data/menuItem";

export default function Menu() {
  return (
    <div>
      {menuItems.map((group) => (
        <div key={group.title}>
          <span>{group.title}</span>
          {group.items.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex justify-start items-center gap-3 border-b text-gray-600"
            >
              <span>{item.icon}</span>
              <p className="hidden lg:block">{item.label}</p>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
}
