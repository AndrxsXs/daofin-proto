import { Card, CardHeader, CardBody, Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Card className="h-full">
        <CardHeader className="px-5 pt-10">
          <h1 className="text-3xl font-bold text-center w-full">
            Te damos la bienvenida a DaoFin
          </h1>
        </CardHeader>
        <CardBody className="flex flex-col gap-10 items-center justify-evenly p-10">
          <div className="w-4/5 h-48 border-2 border-fuchsia-500 p-10 flex items-center justify-center text-center">
            <p>
              El lugar donde se <b>incentiva</b> los proyectos empresariales y
              sociales
            </p>
          </div>
          <Button
            onPress={() => navigate("/login")}
            variant="shadow"
            color="primary"
            className="font-bold w-4/5"
            shadow
          >
            Incentivar
          </Button>
          <p className="w-2/4 text-center">
            Programas de impacto empresarial y social tokenizados
          </p>
        </CardBody>
      </Card>
    </>
  );
}
