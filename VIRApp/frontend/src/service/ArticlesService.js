import axios from 'axios';
const API_URL = 'http://localhost:8000';

export default class ArticlesService{
	constructor(){}

	getArticles() {
		const url = `${API_URL}/`;
		return axios.get(url).then(response => response.data);
	}
	getArticle(pk) {
		const url = `${API_URL}/article/${pk}`;
		return axios.get(url).then(response => response.data);
	}
	createArticle(article){
		const url = `${API_URL}/`;
		return axios.post(url,article);
	}
	deleteArticle(article){
		const url = `${API_URL}/admin/article/${article.pk}`;
		return axios.delete(url);
	}
	approveArticle(article){
		const url = `${API_URL}/admin/article/${article.pk}`;
		return axios.post(url,article);
	}
}