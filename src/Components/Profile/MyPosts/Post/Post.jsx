import React from 'react';
import css from './Post.module.css';

function Post(props) {
    return(
        <div className={ css.item }>
            <img src="https://images-na.ssl-images-amazon.com/images/S/sgp-catalog-images/region_DE/viacom-358518-Full-Image_GalleryBackground-de-DE-1501272675282._V7ea3c5f3b475ec3e9224ddb482756b00_SX1080_.jpg"></img>
            <div className={ css.post_text }>
                { props.message }
            </div>
            <span>
                { props.likes } likes
            </span>
            <div>like</div>
        </div>
    );
}

export default Post;