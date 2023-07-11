import './SignIn.css';
import google from '../assets/googleIcon.svg';
import apple from '../assets/appleIcon.svg';

export const SignIn = ({ onGoogleClick }) => {

    return (
        <main>
            <aside>
                <h3>Board.</h3>
            </aside>
            <section>
                <div className='signinTexts'>
                    <h5>Sign In</h5>
                    <p className='accSignInText'>Sign in to your account</p>
                </div>
                <div id='socialMediaBtns'>
                    <button id='google' onClick={onGoogleClick} >
                        <img src={google} />
                        Sign in with Google
                    </button>
                    <button id='apple'>
                        <img src={apple} />
                        Sign in with Apple
                    </button>
                </div>
                <article>
                    <div className='inputfields'>
                        <label id='email'>Email address</label>
                        <input type='text' id='emailInput' />
                    </div>
                    <div className='inputfields'>
                        <label id='pwd'>Password</label>
                        <input type='password' id='pwdInput' />
                    </div>
                    <div id='forgotPwdDiv'>
                        <p id='forgotPwdText'>Forgot password?</p>
                        <button id='signInBtn'>Sign In</button>
                    </div>
                </article>
                <span id='span2'>Don’t have an account? <a id='signup'>Register here</a></span>
            </section>
        </main>
    )
}

export default SignIn;