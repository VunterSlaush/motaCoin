const requireAll = require("require-all");

function executeAll(functions, params) {
	let result = params;
	for (var i in functions) {
		result = functions[i](...result);
	}
	return result;
}

function requireAllFolder(folder) {
	return requireAll({
		dirname: folder,
		filter: filename => {
			if (filename == "index.js") return;
			return filename.substring(0, filename.length - 3);
		}
	});
}

function mergeArrays(objOfArrays) {
	let merged = [];
	for (var key in objOfArrays) {
		merged = merged.concat(objOfArrays[key]);
	}
	return merged;
}

module.exports = { executeAll, requireAllFolder, mergeArrays };
