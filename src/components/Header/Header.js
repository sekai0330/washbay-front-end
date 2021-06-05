
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="header">
			<div className="brand">
				<Link to="/home"><img alt="brand" src={require("../../assets/images/brand.png").default}></img></Link>
			</div>
			<div className="menu">
				<div className="menu-sales">
					<Link to="/sales">SALES</Link>
				</div>
				<div>
					<Link to="/hire">HIRE</Link>
				</div>
				<div>
					<Link to="/parts">PARTS</Link>
				</div>
				<div>
					<Link to="/services">SERVICES</Link>
				</div>
				<div>
					<Link to="/finance">FINANCE</Link>
				</div>
				<div>
					<Link to="/about">ABOUT US</Link>
				</div>
				<div className="menu-contact-us">
					<Link to="/contact">CONTACT US</Link>
				</div>
			</div>
        </div>
    )
}

export default Header;