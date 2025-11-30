import { User } from "lucide-react";

export default function UserProfileNavIcon() {
  return (
    <div className="flex gap-2">
      <div>
        <p className="text-sm font-semibold">May Sunktong</p>
        <p className="text-xs">Student</p>
      </div>
      <div>
        <User className="rounded-full border w-8 h-8 p-1" />
      </div>
    </div>
  );
}
