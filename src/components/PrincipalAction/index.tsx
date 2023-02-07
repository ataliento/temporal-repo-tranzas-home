import React from "react";
import { Box, Typography } from "@mui/material";
import Image, { type ImageProps } from "next/image";

import styles from "./PrincipalAction.module.scss";

interface PrincipalActionProps {
  title: string;
  imageProps: ImageProps;
  onClick?: () => void;
  id?: string;
}

const PrincipalAction = ({ title, imageProps, onClick, id }: PrincipalActionProps) => {
  return (
    <Box className={styles.container} id={id} onClick={onClick}>
      <Box display="flex" height="100" justifyContent="center" sx={{ width: { xs: 65, sm: 100 } }}>
        <Image {...imageProps} alt={title} />
      </Box>
      <Typography
        className={styles.title}
        color="var(--gray-800)"
        sx={{
          fontSize: { xs: "var(--caption)", sm: "var(--title-5)", md: "var(--title-4)" },
        }}
        variant="h1"
      >
        {title}
      </Typography>
    </Box>
  );
};

export default PrincipalAction;
