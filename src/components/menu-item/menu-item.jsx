import React from 'react';
import './menu-item.scss'; 

const Menuitem = props => (
    <div style={{backgroundImage: `url(${props.section.imageUrl})`}} className={`${props.section.size} menu-item`}>
        <div className="content">
            <h1 className="title">{ props.section.title }</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
);

export default Menuitem;