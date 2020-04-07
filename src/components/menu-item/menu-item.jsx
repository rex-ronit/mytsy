import React from 'react';
import './menu-item.scss'; 
import { withRouter } from 'react-router-dom';

const MenuItem = props => (
    <div style={{backgroundImage: `url(${props.section.imageUrl})`}} 
    className={`${props.section.size} menu-item`} 
    onClick={() => props.history.push(`${props.match.url}${props.section.linkUrl}`)}> 
        <div className="content">
            <h1 className="title">{ props.section.title }</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
)

export default withRouter(MenuItem);  