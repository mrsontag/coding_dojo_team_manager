import React from 'react';
import { Link } from '@reach/router';

const Header = () => {
    return(
        <h3><Link className="pad" to="/">Manage Players</Link>|<Link className="pad" to="/status/">Manage Player Status</Link></h3>
    )
}

export default Header;