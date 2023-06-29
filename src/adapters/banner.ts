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

import type { IBannerProps } from "@/components/Banner";

export function adapterHomeBanner(data: IBanner): IBannerProps {
  const { title_banner, subtitle_banner, image_banner, button_banner } = data;

  return {
    button: { text: button_banner.text, link: button_banner.link.url },
    image: image_banner,
    subtitle: subtitle_banner,
    title: title_banner,
  };
}
