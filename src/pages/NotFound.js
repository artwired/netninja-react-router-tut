import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div>
            <h1>Page Not Found</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis
               ex ipsum ducimus modi consequatur cum nam soluta quidem fugit 
               temporibus suscipit exercitationem id, quis maiores impedit totam 
               laboriosam. Nemo, nesciunt.</p>
               <p>Go to the <Link to="/">Homepage</Link>.</p>
        </div>
    )
}