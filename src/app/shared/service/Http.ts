import axios, { AxiosRequestConfig } from 'axios';

const instance = axios.create({
	baseURL: 'https://pokeapi.co/api/v2/',
	responseType: 'json'
});

instance.interceptors.response.use(function (response) {
	const { data } = response;
	if (data) {
		return data;
	}
	return response;
});

export const get = (url: string, options?: AxiosRequestConfig) => {
	return instance.get(url, options);
}

export const post = (url: string, data: any, options?: AxiosRequestConfig) => {
	return instance.post(url, data, options);
}
export const put = (url: string, data: any, options?: AxiosRequestConfig) => {
	return instance.put(url, data, options);
}

export const remove = (url: string, options?: AxiosRequestConfig) => {
	return instance.delete(url, options);
}
