import { Outlet, Link } from "react-router-dom";
import  Logo  from '../images/Logo_3_Transparent.png'

const Layout = () => {
  return (
    <>
      <nav class="navbar">
        <div class="navbar-container-middle">
            <span class="nav-text link"><Link to="/projects" style={{ color: 'inherit', textDecoration: 'inherit'}}>Projects</Link></span>
            <span  class="nav-text"><Link to="/" style={{ color: 'inherit', textDecoration: 'inherit'}}><img src={Logo} width="120vw" alt="Home"/></Link></span>
            <span class="nav-text link"><Link to="/contact" style={{ color: 'inherit', textDecoration: 'inherit'}}>Contact Us</Link></span>
        </div>
      </nav>
      <Outlet />
    </>
  )
};

export default Layout;