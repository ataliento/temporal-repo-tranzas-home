import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./index.module.scss";
import { SecondaryIcons as SecondaryIcons, SecundaryProps as SecondaryProps } from "./types";

export const isSecondaryIcon = (props: SecondaryProps): props is SecondaryIcons => {
  return "icon" in props;
};

const SecondaryAction = (props: SecondaryProps) => {
  const { title, subtitle, onClick, id, className } = props;
  const isMobile = useMediaQuery("(max-width:768px)");

  return (
    <Box className={styles.container} component="button" id={id} onClick={onClick}>
      {isSecondaryIcon(props) ? (
        <FontAwesomeIcon className={className} icon={props.icon} />
      ) : (
        <Box className={styles.img}>
          <Image {...props.imageProps} alt={title} />
        </Box>
      )}
      <Box className={styles.titleContainer}>
        <Typography className={styles.title} component="h3" variant="h6">
          {title}
        </Typography>
        {isMobile && <Typography className={styles.subtitle}> {subtitle}</Typography>}
      </Box>
      {!isMobile && (
        <Typography className={styles.subtitle} component="h3" variant="subtitle2">
          {subtitle}
        </Typography>
      )}
    </Box>
  );
};

export default SecondaryAction;
