import {Link} from 'react-router-dom';

const Nav = () => {
    return(
        <nav className="navbar navbar-expand-sm bg-primary position-sticky top-0 z-3" data-bs-theme="dark">
            <div className='container'>
                <div className='navbar-brand'>
                    <a>Employee Team Allocation</a>
                </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
            <div className="collapse navbar-collapse" id="navbar">
                <ul className="navbar-nav mx-2 mx-sm-0">
                    <li className="mav-item">
                        <Link to="/employee-team-allocation" className="nav-link">Home</Link>
                    </li>
                    <li className="mav-item">
                        <Link to="/teams" className="nav-link">Teams</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav