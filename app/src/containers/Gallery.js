import React, {Component} from 'react';
import GalleryContainer from "./GalleryContainer";

class GalleryMain extends Component {
    constructor (props) {
        super(props)

        this.state = {
            imsgaesLeft: [],
            imsgaesRight: [],
            isLoaded: false
        }
    }

    componentDidMount () {
        const fetchLatestImages = () => {
            const fetchAll = [this.fetchImages('left'), this.fetchImages('right')]
            Promise.all(fetchAll).then(resolvedData => {
                const imagesLeft = resolvedData[0]
                const imagesRight = resolvedData[1]

                this.setState({
                    imagesLeft: imagesLeft,
                    imagesRight: imagesRight,
                    isLoaded: true
                })

                setTimeout(fetchLatestImages, 6000 * 5);
            })
        }

        fetchLatestImages()
    }

    fetchImages = (dir) => {
        return new Promise((resolve, reject) => {
            fetch('/gallery/' + dir)
                .then(response => response.json())
                .then(json => json.images)
                .then(data => {
                    resolve(data)
                })
                .catch(err => {
                    reject(err)
                })
        })
    }

    render () {
        return (
            <div className='frame-container'>
                {this.state.isLoaded && <GalleryContainer dir={'left'} images={this.state.imagesLeft}/>}
                {this.state.isLoaded && <GalleryContainer dir={'right'} images={this.state.imagesRight}/>}
            </div>
        )
    }
}

export default GalleryMain