import { Avatar } from '@material-ui/core';
import React from 'react';
import './Story.css';

function Story({ image, profileSrc, title }) {
    return (
        <div style={{ backgrorundImage:  'url(${image})' }}className="story">
            <Avatar className="story__avatar" scr={profileSrc} />
            <h4>(title)</h4>
        </div>
    );
}

export default Story;
