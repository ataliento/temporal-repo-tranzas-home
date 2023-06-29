import React from "react";
import Image, { type ImageProps } from "next/image";
import { Box, Typography } from "@mui/material";

import styles from "./index.module.scss";

interface PrincipalActionProps {
  title: string;
  imageProps: ImageProps;
  id?: string;
  onClick?: () => void;
}

const PrincipalAction = ({ id, title, imageProps, onClick }: PrincipalActionProps) => {
  return (
    <Box className={styles.container} component="button" id={id} onClick={onClick}>
      <Box display="flex" height="100" justifyContent="center" sx={{ width: { xs: 65, sm: 100 } }}>
        <Image {...imageProps} alt={title} />
      </Box>
      <Typography color="secondary" component="h1" variant="h1">
        {title}
      </Typography>
    </Box>
  );
};

export default PrincipalAction;
