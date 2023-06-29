import React from "react";
import { Grid, Box, Skeleton as SkeletonMUI, useMediaQuery } from "@mui/material";

import styles from "./index.module.scss";

const Skeleton = () => {
  const isMobile = useMediaQuery("(max-width:768px)");

  return (
    <Grid container item className={styles.skeleton}>
      <Box className={styles.containerHeader}>
        <SkeletonMUI className={styles.userSkeleton} variant="rectangular" />
        <SkeletonMUI className={styles.skeletonSearch} variant="rectangular" />
      </Box>
      <Box className={styles.containerCard}>
        {!isMobile && <SkeletonMUI className={styles.skeletonSubtitle} variant="rectangular" />}
        <Box className={styles.containerButton}>
          <SkeletonMUI className={styles.skeletonCard} variant="rectangular" />
          <SkeletonMUI className={styles.skeletonCard} variant="rectangular" />
        </Box>
        <SkeletonMUI className={styles.skeletonBanner} variant="rectangular" />
      </Box>
      <Box className={styles.quickAccess}>
        <SkeletonMUI className={styles.skeletonTitle} variant="rectangular" />

        <Box className={styles.containerCards}>
          <SkeletonMUI className={styles.skeletonCards} variant="rectangular" />
          <SkeletonMUI className={styles.skeletonCards} variant="rectangular" />
          <SkeletonMUI className={styles.skeletonCards} variant="rectangular" />
        </Box>
      </Box>
    </Grid>
  );
};

export default Skeleton;
