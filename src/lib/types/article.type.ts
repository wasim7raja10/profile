export type ArticleData = {
	type: 'articles';
	articles: Article[];
	date: string;
};

export type Article = {
	imgUrl: string;
	title: string;
};
