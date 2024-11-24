/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

import { Button } from "@nextui-org/react";

import { useNavigate, useLocation } from "react-router-dom";

export default function Menuitem({ name, icon, route }) {
  const navigate = useNavigate();
  const location = useLocation();

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (location.pathname.includes(route)) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [location.pathname, route]);

  return (
    <li>
      <Button
        onPress={() => navigate(route)}
        radius="none"
        className={`flex gap-10 justify-start px-10 text-white font-bold h-16 text-lg w-full ${
          isActive ? "bg-shark-800" : "bg-transparent"
        } active:bg-shark-800 hover:bg-shark-900`}
        disableAnimation
      >
        {icon}
        {name}
      </Button>
    </li>
  );
}
