import { getCookie } from "modules/setHeaders";

export const getQuery = (url) => {
	let userCookie = getCookie();
	return new Promise(function (resolve, reject) {
		fetch(url, {
			headers: {
				cookie: userCookie,
			},
		})
			.then((data) => {
				return data.json();
			})
			.then((data) => {
				if (data.status === "success") {
					return resolve(data);
				}
				return reject(data);
			})
			.catch(function (err) {
				return reject({
					status: "failed",
					message: url + " " + err,
					body: false,
				});
			});
	});
};

export const postQuery = (url, data) => {
	let userCookie = getCookie();
	return new Promise(function (resolve, reject) {
		fetch(url, {
			method: "post",
			body: data,
			headers: {
				"User-Cookie": userCookie,
			},
		})
			.then((data) => {
				return data.json();
			})
			.then((data) => {
				if (data.status === "success") {
					return resolve(data);
				}
				return reject(data);
			})
			.catch(function (err) {
				return reject({
					status: "failed",
					message: url + " " + err,
					body: false,
				});
			});
	});
};