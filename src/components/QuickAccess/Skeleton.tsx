import React from "react";
import { Box, Skeleton as SkeletonMUI } from "@mui/material";

import styles from "./index.module.scss";

const Skeleton = () => {
  return (
    <Box className={styles.skeleton}>
      <SkeletonMUI className={styles.skeletonTitle} variant="rectangular" />

      <Box className={styles.containerCards}>
        <SkeletonMUI className={styles.skeletonCards} variant="rectangular" />
        <SkeletonMUI className={styles.skeletonCards} variant="rectangular" />
        <SkeletonMUI className={styles.skeletonCards} variant="rectangular" />
      </Box>
    </Box>
  );
};

export default Skeleton;
