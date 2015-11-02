function login(username, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username === 'username' && password === 'password') {
                resolve(true);
            } else {
                reject('Invalid login credentials');
            }
        }, 1000);
    });
}

export default {
    login,
};
