import React from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { Grid, Typography, useMediaQuery } from "@mui/material";
import { faClockTwoThirty } from "@fortawesome/pro-regular-svg-icons/faClockTwoThirty";
import { faLink } from "@fortawesome/pro-regular-svg-icons/faLink";

import styles from "./index.module.scss";

import type { IUser } from "@/types/auth";
import type { ContentTransaccionalHome } from "@/types/cms";
// import { adapterHomeBanner } from "adapters/banner";
import Skeleton from "@/components/Skeleton";

const Header = dynamic(() => import("@/components/Header"), { ssr: false });
const PrincipalAction = dynamic(() => import("@/components/PrincipalAction"), { ssr: false });
const SecondaryAction = dynamic(() => import("@/components/SecondaryAction"), { ssr: false });
const QuickAccess = dynamic(() => import("@/components/QuickAccess"), { ssr: false });
const FrequentQuestions = dynamic(() => import("@/components/FrequentQuestions"), {
  ssr: false,
});
// const Banner = dynamic(() => import("@/components/Banner"), { ssr: false });

export interface IHomeProps {
  user: IUser;
  content: ContentTransaccionalHome;
}

export function Index({ user, content }: IHomeProps) {
  const { push } = useRouter();
  const isMobile = useMediaQuery("(max-width:768px)");
  const subtitle = isMobile ? "" : "¿Qué vas a hacer hoy?";

  if (!content) {
    return (
      <Grid container alignItems="center" flexDirection="column" margin="auto">
        <Skeleton />
      </Grid>
    );
  }

  return (
    <Grid container className={styles.container}>
      <Header subtitle={subtitle} title={`¡Hola, ${user?.nombre}!`} />
      <Grid
        container
        item
        className={styles.actions}
        component="section"
        justifyContent="space-between"
      >
        <PrincipalAction
          id="hacer_envio"
          imageProps={{
            src: "https://componentesui.blob.core.windows.net/recursos/iconografia-gla/acciones/hacer-envios/hacer-envios.svg",
            alt: "hacer-envios",
            width: 50,
            height: 100,
          }}
          title="Hacer envíos"
          onClick={() => {
            push("/hacer-envio");
          }}
        />
        <PrincipalAction
          id="ver_envios"
          imageProps={{
            src: "https://componentesui.blob.core.windows.net/recursos/iconografia-gla/acciones/ver-envios/ver-envios.svg",
            alt: "ver-envios",
            width: 50,
            height: 100,
          }}
          title="Ver mis envíos"
          onClick={() => {
            push("/ver-envios");
          }}
        />
      </Grid>
      {/*   {Boolean(content?.banner) && <Banner {...adapterHomeBanner(content.banner[0])} />} */}
      <Grid container component="section">
        <Typography color="var(--gray-800)" component="h2" variant="h4">
          Tus envíos pendientes
        </Typography>
        <Grid item className={styles.actions} gap="var(--spacing-4)">
          <SecondaryAction
            className={styles.iconCongrats}
            icon={faClockTwoThirty}
            id="feed_pendientes--sinFinalizar"
            subtitle="Ver todos"
            title="Envíos sin finalizar"
            onClick={() => {
              push("/ver-envios");
            }}
          />
          <SecondaryAction
            className={styles.iconLink}
            icon={faLink}
            id="feed_pendientes--sinFinalizar"
            subtitle="Te avisaremos cuando estén pagos"
            title="Links compartidos"
            onClick={() => {
              push("/ver-envios");
            }}
          />
          <SecondaryAction
            id="feed_pendientes--tiendaNube"
            imageProps={{
              src: "https://componentesui.blob.core.windows.net/recursos/logos-clientes/Tienda_Nube/svg/tienda_nube_icon_white.svg",
              alt: "tienda-nube-icon",
              width: 16,
              height: 16,
            }}
            subtitle="Pagá los envíos pendientes"
            title="Órdenes de Tiendanube"
            onClick={() => {
              push(
                {
                  pathname: "/ver-envios",
                  query: { tabSelecter: "pendienteTN" },
                },
                "/ver-envios"
              );
            }}
          />
        </Grid>
      </Grid>
      {Boolean(content?.sections) && <QuickAccess {...content.sections[1]} />}
      {Boolean(content?.frequent_questions) && (
        <FrequentQuestions {...content.frequent_questions[0]} />
      )}
    </Grid>
  );
}

export default Index;
