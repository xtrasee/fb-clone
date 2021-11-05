import React from 'react';
import "./Widgets.css";

function Widgets() {
    return (
        <div className="widgets">
            <iframe>
                src= "https://www.facebook.com/plugins/page.php?href=https%3A%2Fwww.facebook.com%2FCleverProgrammerr%2F&tabs=timeline&width=340&height=1500&small_header=false&adapt_container_width=true&hide_cover=false%show_facepile=true&appID"
                width="340"
                height="100%"
                styler={{ border: "none", overflow: "hidden"  }}
                scrolling="no"
                frameborder="0"
                allowTransparency="true"
                allow="encrrypted-media"
            </iframe>
        </div>
    );
}

export default Widgets;
