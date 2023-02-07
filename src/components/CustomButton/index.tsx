import React from "react";
import { Button, ButtonProps } from "@architecture-it/stylesystem";

import styles from "./CustomButton.module.scss";

const CustomButton = (props: Omit<ButtonProps, "className" | "fullWidth" | "variant">) => {
  return <Button fullWidth className={styles.button} variant="outlined" {...props} />;
};

export default CustomButton;
