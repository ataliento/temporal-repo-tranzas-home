import React from "react";
import { Dropdown, LikeDislike } from "@architecture-it/stylesystem";
import { Grid, Typography } from "@mui/material";
import Markdown from "markdown-to-jsx";

import styles from "./index.module.scss";

import type { QuestionsSection } from "@/types/cms";

export const FrequentQuestion = ({ title, questionsTranzas }: QuestionsSection) => {
  return (
    <Grid container className={styles.root} component="section">
      <Typography color="var(--gray-800)" component="h2" variant="h4">
        {title}
      </Typography>
      <Grid item className={styles.questionsContainer}>
        {questionsTranzas?.map(({ question, answer, identifier }) => (
          <Dropdown
            key={crypto.randomUUID()}
            classes={{
              dropdownBox: styles.dropdownBox,
              container: styles.question,
              titleContainer: styles.titleContainer,
            }}
            title={question}
            typographyProps={{
              className: styles.questionTitle,
              color: "secondary",
              variant: "h6",
            }}
          >
            <Markdown className={styles.answer}>{answer}</Markdown>
            <LikeDislike
              hrefDislike={`https://surveys.hotjar.com/edd37040-0445-4e4b-957b-7369fdfbbcd0?${identifier}`}
              idDislike={`dislike-${identifier}`}
              idLike={`like-${identifier}`}
              title="¿Te ayudó esta información?"
              tooltipDislike="No me sirvió"
              tooltipLike="Me sirvió"
              typographyProps={{
                className: styles.likeDislike,
              }}
            />
          </Dropdown>
        ))}
      </Grid>
    </Grid>
  );
};

export default FrequentQuestion;
