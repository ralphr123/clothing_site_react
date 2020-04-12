import React from 'react';
import '../App.css';

interface SideBarProps {
    className?: string;
}

const SideBar: React.FC<SideBarProps> = (props) => {
    return (
        <div className={props.className}>
            <span className="list-item">Browse Catalog</span>
            <span className="list-item">Membership</span>
            <span className="list-item">Our Brand</span>
            <span className="list-item">About</span>
        </div>
    )
}

export default SideBar;