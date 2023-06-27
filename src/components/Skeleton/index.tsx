import React from "react";
import { Box, Skeleton as SkeletonMUI } from "@mui/material";
import { RepeatElement } from "@architecture-it/stylesystem/HOC/RepeatElement";

import styles from "./index.module.scss";

const Skeleton = () => {
  return (
    <Box className={styles.skeleton}>
      <Box
        alignContent={"center"}
        alignItems="center"
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <SkeletonMUI
          height={50}
          sx={{ bgcolor: "grey.200", borderRadius: "8px" }}
          variant="text"
          width={125}
        />
        <SkeletonMUI
          height={40}
          sx={{ bgcolor: "grey.200", borderRadius: "8px" }}
          variant="text"
          width={225}
        />
        <SkeletonMUI
          height={45}
          sx={{ bgcolor: "grey.200", borderRadius: "8px", marginBlock: "16px", maxWidth: "485px" }}
          variant="rectangular"
          width="90%"
        />
      </Box>
      <Box
        alignContent={"center"}
        alignItems="center"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        padding="var(--spacing-4)"
      >
        <SkeletonMUI
          height={50}
          sx={{
            bgcolor: "grey.200",
            borderRadius: "8px",
            alignSelf: "center",
            width: { xs: "245px", sm: "300px" },
            margin: { xs: "0 1%", sm: "0 5%" },
          }}
          variant={"text"}
        />
        <Box
          className={styles.skeletonCards}
          display="flex"
          flexWrap="wrap"
          padding="var(--spacing-4)"
          width="100%"
        >
          <RepeatElement cant={2}>
            <SkeletonMUI
              sx={{
                bgcolor: "grey.200",
                borderRadius: "8px",
                width: { xs: 100, sm: "45%" },
                height: { xs: 100, sm: 200 },
              }}
              variant={"rectangular"}
            />
          </RepeatElement>
        </Box>
      </Box>
    </Box>
  );
};

export default Skeleton;
