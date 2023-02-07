import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

import styles from "./Summary.module.scss";
interface ShipmentDetail {
  count: number;
  text?: string;
  textCount?: string;
  imageUrl: string;
  /** Color applied to the counter */
  color: string;
}

interface SummaryProps {
  title: React.ReactNode;
  detail: {
    text?: string;
    url: string;
  };
  shipments: ShipmentDetail[];
}

const Summary = ({ title, detail, shipments }: SummaryProps) => {
  return (
    <Grid container className={styles.container} direction="column">
      <Grid container item justifyContent="space-between">
        <Grid item>{title}</Grid>
        <Grid item>
          <Typography
            color="var(--secondary-blue)"
            component="a"
            fontWeight="bolder"
            href={detail.url}
            variant="h3"
          >
            {detail.text}
          </Typography>
        </Grid>
      </Grid>
      <Grid container item flexWrap="nowrap" gap="var(--spacing-6)">
        {shipments.map(({ count, imageUrl, text, textCount, color }, index) => {
          return (
            <Grid key={`Shipment-${text}-${index}`} container>
              <Grid item paddingRight={0} xs={4}>
                <Image alt={text ? text : "shipment-image"} height={80} src={imageUrl} width={80} />
              </Grid>
              <Grid
                container
                item
                direction="column"
                justifyContent="center"
                paddingLeft={0}
                xs={8}
              >
                <Typography color="var(--gray-600)" component={"h4"} variant="h4">
                  {text}
                </Typography>
                <Typography
                  color={color}
                  component="h5"
                  fontSize="xx-large"
                  fontWeight="bolder"
                  variant="h1"
                >
                  {count} {textCount}
                </Typography>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default Summary;
