import { SocialMedia } from "./social-media.enum";

export class Stock {
  symbol: string;
  companyName: string;
  date: Date;
  price: number;
  socialMedia: Map<SocialMedia, number>;
}
