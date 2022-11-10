import "./TopBar.css"


function TopBar() {
    return (
    <div className="w-full h-28 flex font-bluetea text-white bg-web-topBar justify-between items-center">
        <div className="pl-14">
            <a href="../index.html" className="text-5xl">SWEETDREAMS</a>
        </div>
        <div className="flex">
            <a href="../who/who.html" className="text-5xl mx-10">¿Quienes somos?</a>
            <a href="" className="text-5xl mx-10">Sign in</a>
            <a href="" className="text-5xl mx-10">Sign up</a>
        </div>
    </div>
    );
}

export default TopBar;