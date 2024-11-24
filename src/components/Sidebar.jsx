import { useLocation, useNavigate } from "react-router-dom";

import { Image } from "@nextui-org/react";

import {
  HomeIcon,
  BoltIcon,
  DocumentTextIcon,
  UserCircleIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/solid";

import Menuitem from "@components/ui/Menuitem";
import { useEffect } from "react";

export default function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (
      (location.pathname === "/dashboard") |
      (location.pathname === "/dashboard/")
    ) {
      navigate("/dashboard/home", { replace: true });
    }
  }),
    [location.pathname];

  const menuItems = [
    {
      name: "Home",
      route: "home",
      icon: <HomeIcon className="w-6 h-6" />,
    },
    {
      name: "Insight",
      route: "insight",
      icon: <BoltIcon className="w-6 h-6" />,
    },
    {
      name: "Proyectos",
      route: "projects",
      icon: <DocumentTextIcon className="w-6 h-6" />,
    },
    {
      name: "Cuenta",
      route: "account",
      icon: <UserCircleIcon className="w-6 h-6" />,
    },
    {
      name: "Incentivar",
      route: "incentivize",
      icon: <Cog6ToothIcon className="w-6 h-6" />,
    },
  ];

  return (
    <section className="bg-[#252525] py-10 flex flex-col gap-10 items-center max-w-96 h-screen sticky left-0 top-0">
      <Image src="/daolab-logo.png" className="w-2/4 m-auto" radius="none" />
      <nav className="text-white h-full w-full">
        <ul>
          {menuItems.map((item, index) => (
            <Menuitem key={index} {...item} />
          ))}
        </ul>
      </nav>
    </section>
  );
}
