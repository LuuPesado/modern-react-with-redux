import React from 'react';
function ProfileCard(props){
    const {title, handle, image} = props
    return(
        // <div className="card">
        //     <h1>Title is {title}</h1>
        //     <div>Handle is {handle}</div>
        //     <img src={image} alt="Profile Card"/>
        <div class="card">
            <div class="card-image">
                <figure class="image is-1by1">
                    <img src={image} alt="Placeholder logo"/>
                </figure>
            </div>
            <div class="card-content">
                <div class="media">
                    <div class="media-content">
                    <p class="title is-4">T{title}</p>
                    <p class="subtitle is-6">{handle}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard;