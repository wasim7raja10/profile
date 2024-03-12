export type Profile = {
	name: string;
	isFollowed: boolean;
	bio: string;
	company: {
		name: string;
		imageUrl: string;
		designation: string;
	};
	websiteUrl: string;
  imgUrl: string
};
