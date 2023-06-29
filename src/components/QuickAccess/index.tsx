import React from "react";
import { CardButton } from "@architecture-it/stylesystem";
import { Grid, Typography } from "@mui/material";
import { useRouter } from "next/router";

import styles from "./index.module.scss";

import type { CardSection } from "@/types/cms";

export interface IQuickAccessProps {
  title: string;
  cards: CardSection[];
}

export const QuickAccess = ({ title, cards }: IQuickAccessProps) => {
  const { push } = useRouter();

  return (
    <Grid container className={styles.root} component="section">
      <Typography color="var(--gray-800)" component="h2" variant="h4">
        {title}
      </Typography>
      <Grid item className={styles.container}>
        {cards.map((card, i) => (
          <CardButton
            key={crypto.randomUUID()}
            cardContent={
              <>
                <Typography className={styles.titleCard} component="h3" data-enable={card.enabled}>
                  {card.title}
                </Typography>
                {Boolean(card?.subtitle) && (
                  <Typography className={styles.subtitleCard} component="h4">
                    {card.subtitle}
                  </Typography>
                )}
              </>
            }
            cardMediaIcon={{
              alt: card.title,
              src: card.icon,
            }}
            classes={{
              cardContainer: styles.card,
              cardMedia: styles.cardMedia,
              cardContent: styles.cardContent,
            }}
            data-enable={card.enabled}
            id={`${i}-${card.title}`}
            onClick={() => {
              if (card.url?.url) {
                push(encodeURI(card.url.url));
              }
            }}
          />
        ))}
      </Grid>
    </Grid>
  );
};

export default QuickAccess;
