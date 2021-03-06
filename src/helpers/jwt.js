const jwtData = jwt => {
	var base64Url = jwt && jwt.split('.')[1];
	var base64 = base64Url && base64Url.replace('-', '+').replace('_', '/');
	return base64 ? JSON.parse(window.atob(base64)) : null;
};

export const toUserId = jwt => jwt && jwtData(jwt).id;

export const isExpired = jwt => jwt && jwtData(jwt).exp < Date.now() / 1000;
