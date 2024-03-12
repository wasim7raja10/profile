import type { Company } from "./company.type";

export type Profile = {
	name: string;
	isFollowed: boolean;
	bio: string;
	company: Company
	websiteUrl: string;
  imgUrl: string
};
