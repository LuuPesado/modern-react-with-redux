function ImageShow({image}) {
    return (
        <div>
            <img src={image.urls.small} alt={image.alt_desacription}/>
        </div>
    ) 
}

export default ImageShow;