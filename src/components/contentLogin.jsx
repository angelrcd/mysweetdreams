import "./contentLogin.css";


function ContentLogin (){
    return (
    <div class="login-container h-screen w-full bg-cover flex flex-col justify-start items-center">
        <h2 class="font-bluetea text-8xl text-white mb-28 mt-36">SWEETDREAMS</h2>
        <formLogin />
        <div class="bg-blue-800 rounded-2xl py-1 px-6 bg-opacity-50 my-2 text-opacity-100"><p class="text-white">Forgot password? | Don’t have an acoount yet? <a href="" class="underline">Sign up</a></p></div>
    </div>
    );
}

function formLogin (){
    return (
    <form class="h-login w-login bg-white rounded-login flex flex-col justify-around items-center py-11 shadow-login" method="post" action="">
        <h3 class="font-bluetea text-3xl text-gray-500"> <strong class="text-black">Welcome.</strong> Please log in</h3>
        <input type="text" name="name" id="user-name" placeholder="User/email" class="w-80 h-20 bg-gray-100 border-2 border-black rounded-3xl shadow-input mt-8 px-5 font-bluetea text-xl" />
        <input type="password" name="pass" id="user-pass" placeholder="Password" class="w-80 h-20 bg-gray-100 border-2 border-black rounded-3xl shadow-input mb-8 px-5 font-bluetea text-xl" />
        <button class="w-auto h-auto bg-web-loginButton text-3xl font-bluetea py-6 px-9 rounded-3xl">Log in</button>
    </form>
    )
}

export default ContentLogin;