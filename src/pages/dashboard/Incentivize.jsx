import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
} from "@nextui-org/react";

import {
  ChatBubbleLeftEllipsisIcon,
  BellAlertIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";

export default function Incentivize() {
  return (
    <article className="w-full h-max flex flex-col">
      <header className="flex justify-between items-center w-full mt-5 pt-5 pb-5 bg-shark-950 sticky top-0 z-50">
        <h1 className="text-4xl font-bold">¡Explora oportunidades!</h1>
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-center">
        {Array.from({ length: 3 }).map((_, index) => (
          <Card
            key={index}
            className="w-full h-max p-3 bg-[#252525]"
            shadow="none"
          >
            <CardHeader>
              <h1 className="font-bold text-2xl">Empresas Verdes</h1>
            </CardHeader>
            <CardBody className="flex flex-col gap-5">
              <h1 className="text-end">$2.000</h1>
              <Image src="/team.png" />
              <div className="flex justify-between text-sm">
                <p className="font-bold">Precio de token</p>
                <p>USD 200</p>
              </div>
              <div className="flex justify-between text-sm">
                <p className="font-bold">Tiempo de ejecución</p>
                <p>1 año</p>
              </div>
            </CardBody>
            <CardFooter>
              <Button
                color="primary"
                // variant="shadow"
                className="font-bold w-full"
              >
                Incentivar
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </article>
  );
}
