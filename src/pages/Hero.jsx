import { Image } from "@nextui-org/react";
import { Outlet } from "react-router-dom";

export default function Hero() {
  return (
    <main className="h-screen">
      <article className="grid grid-cols-1 gap-10 p-10 md:grid-cols-2 h-full">
        <section className="hidden md:flex items-center justify-center h-full">
          <Image width={400} src="/daolab-hero.png" />
        </section>
        <section>
          <Outlet />
        </section>
      </article>
    </main>
  );
}
