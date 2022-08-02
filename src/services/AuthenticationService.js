const AuthenticationService = () => {
    const Authenticate = async (userCredential) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(true);
            }, 3000)
        })
    }
    return {
        Authenticate
    }
}

export default AuthenticationService;