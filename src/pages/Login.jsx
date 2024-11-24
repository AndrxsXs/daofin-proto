import { Card, CardBody, Button, Divider, Input } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  return (
    <>
      <Card className="h-full">
        <CardBody className="flex flex-col gap-4 items-center p-10">
          <div className="w-full h-32 flex items-center justify-center ">
            <Button
              variant="shadow"
              color="primary"
              className="font-bold w-1/3"
            >
              Conecta tu wallet
            </Button>
          </div>
          <Divider className="w-4/5" />
          <div className="w-4/5 h-32 flex flex-col items-center justify-center text-center">
            <h1 className="text-3xl font-bold text-center w-full">
              Regístrate
            </h1>
            Si aún no tienes tu wallet, debes registrarte
          </div>
          <Input
            variant="bordered"
            placeholder="Ingresa tu correo electrónico"
            label="Correo electrónico"
            labelPlacement="outside"
            className="w-4/5"
          />
          <Button
            onPress={() => navigate("/dashboard")}
            color="primary"
            className="font-bold w-4/5"
            shadow
          >
            Registrarme
          </Button>
        </CardBody>
      </Card>
    </>
  );
}
