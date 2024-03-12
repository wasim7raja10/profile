import type { Company } from './company.type';

export type CareerUpdate = {
	type: 'career';
	company: Company;
	date: string;
	action: 'joined' | 'resigned';
};
