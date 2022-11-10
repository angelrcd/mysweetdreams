import './ContentLogin.css';
import FormLogin from './FormLogin.jsx';

function ContentLogin() {
    return (
        <div className="bg-[url('./img/background.jpg')] h-screen w-full bg-cover flex flex-col justify-start items-center">
            <h2 className="font-bluetea text-8xl text-black mb-16 mt-28">SWEETDREAMS</h2>
            <FormLogin />
            <div className="bg-blue-800 rounded-2xl py-1 px-6 bg-opacity-50 my-2 text-opacity-100"><p className="text-white">Forgot password? | Don’t have an acount yet? <a href="" className="underline">Sign up</a></p></div>
        </div>
    );
}

export default ContentLogin;
