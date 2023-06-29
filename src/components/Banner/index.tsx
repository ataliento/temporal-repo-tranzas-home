import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Button } from "@architecture-it/stylesystem";
import { Grid, Box, Typography } from "@mui/material";

import styles from "./index.module.scss";

export interface IBannerProps {
  title: string;
  subtitle: string;
  button: { text: string; link: string };
  image: string;
}

export const Banner = ({
  image,
  button = { text: "", link: "" },
  subtitle,
  title,
}: IBannerProps) => {
  const { push } = useRouter();

  return (
    <Grid container component="section">
      <Grid item className={styles.container}>
        <Box className={styles.description}>
          <Typography className={styles.title} component="h5" variant="h3">
            {title}
          </Typography>
          <Typography className={styles.subtitle} component="p" variant="body1">
            {subtitle}
          </Typography>
          <Button
            className={styles.button}
            color="primary"
            size="small"
            text={button.text}
            variant="outlined"
            onClick={() => {
              push(
                {
                  pathname: "/hacer-envio",
                  query: {
                    service: "andreaniEnvios",
                  },
                },
                "/hacer-envio"
              );
            }}
          />
        </Box>
        <Box className={styles.image}>
          <Image alt="image-banner" height={146} src={image} width={256} />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Banner;
