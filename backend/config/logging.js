const getTimeStamps = () => {
	return new Date().toLocaleString();
};

const info = (namespace, message, object = {}) => {
	if (object) {
		console.log(`[${getTimeStamps()}][INFO][${namespace}]${message}`, object);
	} else {
		console.log(`[${getTimeStamps()}][INFO][${namespace}]${message}`);
	}
};

const warn = (namespace, message, object = {}) => {
	if (object) {
		console.warn(`[${getTimeStamps()}][WARN][${namespace}]${message}`, object);
	} else {
		console.warn(`[${getTimeStamps()}][WARN][${namespace}]${message}`);
	}
};

const error = (namespace, message, object = {}) => {
	if (object) {
		console.error(
			`[${getTimeStamps()}][ERROR][${namespace}]${message}`,
			object
		);
	} else {
		console.error(`[${getTimeStamps()}][ERROR][${namespace}]${message}`);
	}
};

const debug = (namespace, message, object = {}) => {
	if (object) {
		console.debug(
			`[${getTimeStamps()}][DEBUG][${namespace}]${message}`,
			object
		);
	} else {
		console.debug(`[${getTimeStamps()}][DEBUG][${namespace}]${message}`);
	}
};

export default {
	info,
	warn,
	error,
	debug,
};
