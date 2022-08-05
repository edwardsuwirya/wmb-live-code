const AuthenticationService = () => {
    const Authenticate = async (userCredential) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(true);
                // reject(new Error('Unauthorized'))
            }, 1000)

        })
    }
    return {
        Authenticate
    }
}

export default AuthenticationService;