export const getCookie = () => {
	return localStorage.getItem("userCookie")
		? localStorage.getItem("userCookie")
		: setCookie();
};

const setCookie = () => {
	let cookieValue = `${Math.floor(Math.random() * 1000)}cok${Date.now()}`;
	localStorage.setItem("userCookie", cookieValue);
	return cookieValue;
};
