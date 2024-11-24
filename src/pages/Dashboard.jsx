import { Outlet } from "react-router-dom";

import Sidebar from "@components/Sidebar";

export default function Dashboard() {
  return (
    <div className="bg-shark-950 flex h-screen w-screen">
      <Sidebar />
      <main className="h-full w-full max-w-[1280px] mx-auto px-10 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}
