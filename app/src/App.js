import React from 'react'

import GalleryContainer from './containers/GalleryContainer'

export default () => (
    <div className='frame-container'>
        <GalleryContainer dir={'left'}/>
        <GalleryContainer dir={'right'}/>
    </div>
)