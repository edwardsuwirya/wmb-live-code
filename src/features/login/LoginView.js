import './LoginView.css';

function LoginView(props) {
    return (
        <div className='login-container'>
            <h2>WMB Login</h2>
            <div>
                <button onClick={() => {
                    props.handleLoggedIn(true)
                }}>Login
                </button>
            </div>
        </div>
    )
}

export default LoginView;