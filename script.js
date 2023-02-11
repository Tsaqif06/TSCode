const canvas = document.querySelector("#canvas");
const url = document.querySelector("#url");

url.addEventListener("keyup", (e) => {
	if (e.key === "Enter") {
		generateQR();
	}
});

const generateQR = () => {
	QRCode.toCanvas(canvas, url.value);
};
