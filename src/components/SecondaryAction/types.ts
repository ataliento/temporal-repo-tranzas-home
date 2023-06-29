import { type ImageProps } from "next/image";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface SecondaryActionBaseProps {
  title: string;
  subtitle: string;
  onClick?: () => void;
  id: string;
  className?: string;
}

export interface SecondaryIcons extends SecondaryActionBaseProps {
  icon: IconProp;
  imageProps?: never;
}

export interface ImageSecondary extends SecondaryActionBaseProps {
  icon?: never;
  imageProps: ImageProps;
}

export type SecundaryProps = SecondaryIcons | ImageSecondary;
