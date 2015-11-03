function login(email, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (email === 'a@a.com' && password === 'password') {
                resolve();
            } else {
                reject('Invalid login credentials');
            }
        }, 1000);
    });
}

export default {
    login,
};
