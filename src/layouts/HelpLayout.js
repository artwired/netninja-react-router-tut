import { NavLink, Outlet } from "react-router-dom";

export default function HelpLayout() {
    return(
        <div className="help-layout">

            <nav>
                <NavLink to="faq">View the FAQ</NavLink>
                <NavLink to="contact">Contact Us</NavLink>
            </nav>

            <h2>Website Help</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, sit?</p>

            <Outlet />
        </div>
    )
}