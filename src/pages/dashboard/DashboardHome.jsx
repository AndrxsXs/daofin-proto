import {
  Input,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@nextui-org/react";

import {
  ChatBubbleLeftEllipsisIcon,
  BellAlertIcon,
  UserCircleIcon,
  MagnifyingGlassIcon,
  EllipsisHorizontalIcon,
  ClipboardDocumentIcon,
} from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <article className="w-full h-max flex flex-col">
      <header className="flex justify-between items-center w-full mt-5 pt-5 pb-5 bg-shark-950 sticky top-0 z-50">
        <h1 className="text-4xl font-bold">Dashboard</h1>
        <Input
          variant="plain"
          placeholder="Buscar"
          className="max-w-72"
          radius="full"
          endContent={<MagnifyingGlassIcon className="w-6 h-6" />}
        />
        <div className="flex gap-5 justify-end">
          <Button isIconOnly variant="plain" radius="full">
            <ChatBubbleLeftEllipsisIcon className="w-6 h-6" />
          </Button>
          <Button isIconOnly variant="plain" radius="full">
            <BellAlertIcon className="w-6 h-6" />
          </Button>
          <Button isIconOnly variant="plain" radius="full">
            <UserCircleIcon className="w-6 h-6" />
          </Button>
        </div>
      </header>
      <div className="w-full h-full flex justify-between gap-5">
        <section className="flex flex-col gap-5 pt-5 w-full">
          <Card className="bg-[#252525] h-24 px-5" shadow="none">
            <CardBody className="flex flex-row items-center justify-between">
              <h1 className="text-xl font-bold">Recaudo total</h1>
              <p className="text-xl font-bold text-success-500">+ $5.000 USD</p>
              <Button isIconOnly variant="plain" radius="full">
                <EllipsisHorizontalIcon className="w-6 h-6" />
              </Button>
            </CardBody>
          </Card>

          {/* Proyectos */}
          <Card className="bg-[#252525] p-5" shadow="none">
            <CardHeader className="flex flex-row items-center justify-between">
              <h1 className="text-xl font-bold">Proyectos</h1>
              <Button isIconOnly variant="plain" radius="full">
                <EllipsisHorizontalIcon className="w-6 h-6" />
              </Button>
            </CardHeader>
            <CardBody className="flex flex-col items-center justify-between gap-5">
              <p className="text-lg font-bold self-end">Precion Token</p>
              {Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="grid grid-cols-3 gap-5 w-full">
                  <div className="flex flex-col items-start justify-center">
                    <p className="text-md">Empresas verdes</p>
                    <p className="text-xs text-neutral-400">Ayer, 14:00 h</p>
                  </div>
                  <div>
                    <div className="flex flex-col items-center justify-center">
                      <p className="text-md">Pago</p>
                      <p className="text-xs text-neutral-400">Transferencia</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end justify-center">
                    <p className="text-md text-success-500">200 USD</p>
                    <p className="text-xs text-neutral-400">
                      Realizada con éxito
                    </p>
                  </div>
                </div>
              ))}
            </CardBody>
          </Card>

          {/* Users */}
          <Card className="bg-[#252525] h-max p-5" shadow="none">
            <CardHeader className="flex flex-row items-center justify-between">
              <h1 className="text-xl font-bold">Proyectos</h1>
              <Button isIconOnly variant="plain" radius="full">
                <EllipsisHorizontalIcon className="w-6 h-6" />
              </Button>
            </CardHeader>
            <CardBody className="flex flex-row gap-10 overflow-auto">
              {Array.from({ length: 5 }).map((_, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center gap-2"
                >
                  <div className="w-14 h-14 bg-fuchsia-500 rounded-full"></div>
                  <p className="text-xs font-bold">User</p>
                </div>
              ))}
            </CardBody>
          </Card>
        </section>
        <section className="py-5 flex flex-col gap-5 min-w-72 h-max sticky top-20 right-0">
          <Card className="px-5 bg-fuchsia-500 h-fit">
            <CardHeader className="flex flex-row items-center justify-end pb-0">
              <p className="font-bold">Adriana</p>
            </CardHeader>
            <CardBody className="flex flex-col justify-between py-0">
              <p>Token</p>
              <p className="font-bold">$ 3.000</p>
              <p>Fecha</p>
              <p className="font-bold">Octubre 23, 2024</p>
            </CardBody>
            <CardFooter className="flex flex-row items-center justify-end pt-0">
              <Button variant="plain" radius="full" isIconOnly>
                <ClipboardDocumentIcon className="w-6 h-6" />
              </Button>
            </CardFooter>
          </Card>
          <Card className="bg-[#252525] h-max p-5" shadow="none">
            <CardHeader className="flex flex-row items-center justify-between py-0">
              <h1 className="text-xl font-bold">Proyectos</h1>
              <Button isIconOnly variant="plain" radius="full">
                <EllipsisHorizontalIcon className="w-6 h-6" />
              </Button>
            </CardHeader>
            <CardBody className="flex flex-col">
              <div className="flex justify-between items-center">
                <p className="font-bold">Nombre</p>
                <p className="text-sm text-neutral-400">DFIN</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="font-bold">Estado</p>
                <p className="text-sm text-neutral-400">Activo</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="font-bold">Balance</p>
                <p className="text-sm text-neutral-400">$3.000</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="font-bold">Tipo de token</p>
                <p className="text-sm text-neutral-400">Utility</p>
              </div>
            </CardBody>
          </Card>
          <Button
            color="primary"
            variant="shadow"
            className="font-bold"
            onPress={() => navigate("/dashboard/incentivize")}
          >
            Incentivar proyectos
          </Button>
        </section>
      </div>
    </article>
  );
}
