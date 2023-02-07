import React from "react";
import { Grid, Typography } from "@mui/material";

import CustomButton from "../CustomButton";

interface CancelSectionProps {
  title?: string;
  conditions?: React.ReactNode;
  action: {
    onClick: () => void;
    text?: string;
  };
}

const CancelSection = (props: CancelSectionProps) => {
  const {
    title = "¿Querés cancelar algún envío?*",
    conditions = (
      <>
        (*)Máximo 10 días desde la fecha que realizaste la compra. <br />
        No válido si el envío ya se encuentra en distribución.
      </>
    ),
    action: { onClick, text = "Si, quiero cancelar un envío" } = {},
  } = props;

  return (
    <Grid
      container
      alignContent="center"
      alignItems="center"
      direction="column"
      justifyContent={"center"}
    >
      <Grid container item justifyContent={"center"}>
        <Typography color="var(--gray-600)" variant="h1">
          {title}
        </Typography>
      </Grid>
      <Grid container item paddingX={"var(--spacing-8)"}>
        <CustomButton
          text={text}
          typographyProps={{
            fontWeight: "bold",
          }}
          onClick={onClick}
        />
      </Grid>
      <Grid container item justifyContent="center" paddingX="var(--spacing-4)">
        <Typography color="var(--gray-400)" fontStyle={"italic"} variant="body2">
          {conditions}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default CancelSection;
