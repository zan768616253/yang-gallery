import React, {Component} from 'react';
import ImageGallery from 'react-image-gallery';

class GalleryContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showIndex: false,
            showBullets: false,
            infinite: true,
            showThumbnails: false,
            showFullscreenButton: false,
            showGalleryFullscreenButton: false,
            showPlayButton: props.showPlayButton || false,
            showGalleryPlayButton: props.showGalleryPlayButton || false,
            showNav: false,
            isRTL: false,
            slideDuration: 450,
            slideInterval: 5000,
            thumbnailPosition: 'bottom',
            showVideo: {},
            images: props.images
        }
    }

    componentDidMount () {
        this._imageGallery.pause();
        this._imageGallery.play();
    }

    componentDidUpdate(prevProps, prevState) {
        // if (this.state.slideInterval !== prevState.slideInterval ||
        //     this.state.slideDuration !== prevState.slideDuration) {
        //     // refresh setInterval
        //     this._imageGallery.pause();
        //     this._imageGallery.play();
        // }

        this._imageGallery.pause();
        this._imageGallery.play();
    }

    _onImageClick(event) {
        console.debug('clicked on image', event.target, 'at index', this._imageGallery.getCurrentIndex());
    }

    _onImageLoad(event) {
        console.debug('loaded image', event.target.src);
    }

    _onSlide(index) {
        this._resetVideo();
        console.debug('slid to index', index);
    }

    _onPause(index) {
        console.debug('paused on index', index);
    }

    _onScreenChange(fullScreenElement) {
        console.debug('isFullScreen?', !!fullScreenElement);
    }

    _onPlay(index) {
        console.debug('playing from index', index);
    }

    _resetVideo() {
        this.setState({showVideo: {}});

        if (this.state.showPlayButton) {
            this.setState({showGalleryPlayButton: true});
        }

        if (this.state.showFullscreenButton) {
            this.setState({showGalleryFullscreenButton: true});
        }
    }

    render() {
        return (
            <ImageGallery
                ref={i => this._imageGallery = i}
                items={this.state.images}
                lazyLoad={false}
                onClick={this._onImageClick.bind(this)}
                onImageLoad={this._onImageLoad}
                onSlide={this._onSlide.bind(this)}
                onPause={this._onPause.bind(this)}
                onScreenChange={this._onScreenChange.bind(this)}
                onPlay={this._onPlay.bind(this)}
                infinite={this.state.infinite}
                showBullets={this.state.showBullets}
                showFullscreenButton={this.state.showFullscreenButton && this.state.showGalleryFullscreenButton}
                showPlayButton={this.state.showPlayButton && this.state.showGalleryPlayButton}
                showThumbnails={this.state.showThumbnails}
                showIndex={this.state.showIndex}
                showNav={this.state.showNav}
                isRTL={this.state.isRTL}
                thumbnailPosition={this.state.thumbnailPosition}
                slideDuration={parseInt(this.state.slideDuration)}
                slideInterval={parseInt(this.state.slideInterval)}
                additionalClass="app-image-gallery"
            />
        );
    }
}

export default GalleryContainer