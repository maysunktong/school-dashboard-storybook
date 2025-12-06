import {
  BookOpen,
  CalendarDays,
  CircleCheckBig,
  Cog,
  Component,
  FilePenLine,
  House,
  LibraryBig,
  LogOut,
  Megaphone,
  MessageSquareMore,
  PencilRuler,
  SquareUserRound,
  UserRoundPen,
  UsersRound,
  UserStar,
} from "lucide-react";
import { ReactNode } from "react";

/* Types */
export interface IMenuItem {
  label: string;
  icon: ReactNode;
  href: string;
}

export interface IMenuGroup {
  title: string;
  items: IMenuItem[];
}

export const menuItems: IMenuGroup[] = [
  {
    title: "TITLE",
    items: [
      {
        label: "Home",
        icon: <House />,
        href: "/"
      },
      {
        label: "Announcements",
        icon: <Megaphone />,
        href: "/",
      },
      {
        label: "Students",
        icon: <UserStar />,
        href: "/",
      },
      {
        label: "Parents",
        icon: <UsersRound />,
        href: "/",
      },
      {
        label: "Teachers",
        icon: <SquareUserRound />,
        href: "/",
      },
      {
        label: "Classes",
        icon: <LibraryBig />,
        href: "/",
      },
      {
        label: "Lessons",
        icon: <BookOpen />,
        href: "/",
      },
      {
        label: "Exams",
        icon: <PencilRuler />,
        href: "/",
      },
      {
        label: "Assignments",
        icon: <Component />,
        href: "/",
      },
      {
        label: "Results",
        icon: <FilePenLine />,
        href: "/",
      },
      {
        label: "Attendance",
        icon: <CircleCheckBig />,
        href: "/",
      },
      {
        label: "Calendar",
        icon: <CalendarDays />,
        href: "/",
      },
      {
        label: "Messages",
        icon: <MessageSquareMore />,
        href: "/",
      },
    ],
  },
  {
    title: "SETTINGS",
    items: [
      {
        label: "Profile",
        icon: <UserRoundPen />,
        href: "/",
      },
      {
        label: "Settings",
        icon: <Cog />,
        href: "/",
      },
      {
        label: "Log Out",
        icon: <LogOut />,
        href: "/",
      },
    ],
  },
];
