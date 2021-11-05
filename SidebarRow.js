import { Avatar } from "@material-ui/core";
import React from 'react';
import "./SidebarRow,css";

function SidebarRow({ scr, Icon, title }) {
    return (
        <div className='sidebarRow'>
            {scr && <Avatar scr={scr} />}
            {Icon && <Icon />}

            <h4>(title)</h4>
        </div>
    );
}

export default SidebarRow
