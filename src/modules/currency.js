const currencyData = {
	usd: { iso: "usd", symbol: "$", rate: 1 },
	eur: { iso: "eur", symbol: "€", rate: 0.91 },
};

let iso = localStorage.getItem("currency") || "usd";

export const setCurrency = (iso) => {
	localStorage.setItem("currency", iso);
};

export const currencyAmount = (amount) => {
	return currencyData[iso].symbol + currencyData[iso].rate * amount;
};

export const currencySymbol = currencyData[iso].symbol;

export const currencyRate = currencyData[iso].rate;

export const currencyIso = () => {
	let iso = localStorage.getItem("currency") || "usd";
	return iso;
};
