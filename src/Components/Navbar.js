import "../Css/Navbar.css";
const Navbar=()=>{
 return(
    <nav class="navbar">
		<div class="navdiv">
			<div class="logo"><a href="#">Company Name</a> </div>
			<ul>
				<li className="nav-li"><a href="#">Home</a></li>
				<li className="nav-li"><a href="#">About</a></li>
				<li className="nav-li"><a href="#">Contact</a></li>
				<button><a href="#">SignIn</a></button>
				<button><a href="#">SignUp</a></button>
			</ul>
		</div>
	</nav>
 )
}

export default Navbar;