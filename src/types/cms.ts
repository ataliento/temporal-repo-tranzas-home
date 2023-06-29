export interface ContentTransaccionalHome {
  banner: IBanner[];
  sections: TransaccionalSection[];
  frequent_questions: QuestionsSection[];
}

export interface IBanner {
  button_banner: {
    text: string;
    link: {
      id: string;
      url: string;
      linktype: string;
      fieldtype: string;
      cached_url: string;
    };
  };
  image_banner: string;
  subtitle_banner: string;
  title_banner: string;
}

export interface TransaccionalSection {
  title: string;
  cards: CardSection[];
}

export interface CardSection {
  title: string;
  icon: string;
  enabled: boolean;
  subtitle?: string;
  url?: {
    url: string;
  };
}

export interface QuestionsSection {
  title: string;
  questionsTranzas: FrequentQuestion[];
}

export interface FrequentQuestion {
  question: string;
  answer: string;
  identifier: string;
}
