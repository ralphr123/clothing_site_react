import React from 'react';
import { Link } from "react-router-dom";



interface SideBarProps {
    className?: string;
    onClickPopup: (option: string) => void;
}

const SideBar: React.FC<SideBarProps> = (props) => {
    return (
        <div className={`${props.className} unselectable`}>
            <Link className="no-text-decoration" to="/browse-catalog/women/apparel" >
                <span className="list-item">Browse Catalog</span>
            </Link>
            <Link className="no-text-decoration" to="/membership">
                <span className="list-item">Membership</span>
            </Link>
            <Link className="no-text-decoration" to="/our-brand">
                <span className="list-item">Our Brand</span>
            </Link>
            <span className="list-item" onClick={() => props.onClickPopup("about")}>About</span>
        </div>
    )
}

export default SideBar;