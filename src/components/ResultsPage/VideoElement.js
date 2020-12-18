import React from 'react'

function VideoElement(props) {
    return (
        <div className="ui fluid card">
            {
            console.log(props)
        }
            <div className="image">
                <img src={props.thumbnail}/>
            </div>
            <div class="content">
                <a class="header">{props.title}</a>
            </div>
        </div>

    )
}

export default VideoElement
