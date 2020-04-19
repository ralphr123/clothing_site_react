import React from 'react';
import { Link } from "react-router-dom";



interface SideBarProps {
    className?: string;
}

const SideBar: React.FC<SideBarProps> = (props) => {
    return (
        <div className={props.className}>
            <span className="list-item">Browse Catalog</span>
            <Link className="no-text-decoration" to="/membership">
                <span className="list-item">Membership</span>
            </Link>
            <Link className="no-text-decoration" to="/our-brand">
                <span className="list-item">Our Brand</span>
            </Link>
            <span className="list-item">About</span>
        </div>
    )
}

export default SideBar;