var getJson = function (url, callback) {
	var request = new XMLHttpRequest();
	request.open("GET", url, true);
	request.onload = function () {
		if (this.status >= 200 && this.status < 400) {
			// Success!
			var data = JSON.parse(this.response);
			callback(data);
		} else {
			console.error("We reached our target server, but it returned an error");
		}
	};

	request.onerror = function () {
		console.error("There was a connection error of some sort");
	};

	request.send();
};

export default getJson;