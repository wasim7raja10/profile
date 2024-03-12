export type CareerUpdate = {
	type: 'career';
	designation: string;
	designationMoreInfo: string[];
	companyImgUrl: string;
	companyName: string;
	location: string;
	date: string;
	action: 'joined' | 'resigned';
};
