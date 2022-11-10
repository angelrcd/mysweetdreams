import "./TopBar.css"


function TopBar() {
    return (
    <div class="w-full h-28 flex font-bluetea text-white bg-web-topBar justify-between items-center">
        <div class="pl-14">
            <a href="../index.html" class="text-5xl">SWEETDREAMS</a>
        </div>
        <div class="flex">
            <a href="../who/who.html" class="text-5xl mx-10">¿Quienes somos?</a>
            <a href="" class="text-5xl mx-10">Sign in</a>
            <a href="" class="text-5xl mx-10">Sign up</a>
        </div>
    </div>
    );
}

export default TopBar;