import React from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import Grid from "@mui/material/Grid";

import type { IUser } from "@/types/auth";

const Header = dynamic(() => import("../components/Header"), { ssr: false });
const PrincipalAction = dynamic(() => import("../components/PrincipalAction"), { ssr: false });

export interface IProps {
  user: IUser;
}

export function Index({ user }: IProps) {
  const { push } = useRouter();

  return (
    <Grid container direction="column" gap="var(--spacing-4)" width="100%">
      <Header subtitle="¿Qué vas a hacer hoy?" title={`¡Hola, ${user?.nombre}!`} />
      <Grid
        container
        item
        component="section"
        gap="var(--spacing-4)"
        justifyContent="center"
        md={4}
      >
        <PrincipalAction
          id="hacer_envio"
          imageProps={{
            src: "https://componentesui.blob.core.windows.net/recursos/iconografia-gla/caracteristicas-norlog/relleno/svg/logistica-rojo.svg",
            alt: "hacer-envios",
            width: 100,
            height: 100,
          }}
          title="Hacer envíos"
          onClick={() => push("/hacer-envio")}
        />
        <PrincipalAction
          id="ver_envios"
          imageProps={{
            src: "https://componentesui.blob.core.windows.net/recursos/iconografia-gla/acciones/relleno/svg/ver-mis-envios-rojo.svg",
            alt: "ver-envios",
            width: 100,
            height: 100,
          }}
          title="Ver mis envíos"
          onClick={() => push("/ver-envios")}
        />
      </Grid>
    </Grid>
  );
}

export default Index;
