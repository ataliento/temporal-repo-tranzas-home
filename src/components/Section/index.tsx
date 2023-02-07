import React from "react";
import { Grid, Typography } from "@mui/material";

import CustomButton from "../CustomButton";

import styles from "./Section.module.scss";

interface SectionProps {
  title: string;
  children: React.ReactNode;
  action: {
    text: string;
    onClick: () => void;
  };
}

const Section = ({ title, children, action }: SectionProps) => {
  return (
    <Grid container className={styles.container}>
      <Grid container item>
        <Typography color="var(--gray-500)" variant="h2">
          {title}
        </Typography>
      </Grid>
      <Grid container item alignItems="center" flexGrow={1} justifyContent={"center"}>
        {children}
      </Grid>
      <Grid container item>
        <CustomButton text={action.text} onClick={action.onClick} />
      </Grid>
    </Grid>
  );
};

export default Section;
