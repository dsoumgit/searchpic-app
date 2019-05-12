/***
 * The purpose to create an ImageCard component is to access the height of each
 *  image so we can display it the correct width and height in the grid layout. 
 *  For this reason, we have to access the element via DOM using 'ref' property. 
 *  Refer to the note.doc for futher detail.
 */

import React, { Component } from 'react';
import { Button, Header, Image, Modal } from 'semantic-ui-react'

class ImageCard extends Component {

    constructor(props) {
        super(props);

        this.state = { spans: 0 }

        this.imageRef = React.createRef();
    }

    componentDidMount() {
        // add an event till it is sucessfully loaded and pass the callback method
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        // get height
        const height = this.imageRef.current.clientHeight;
        // calculate the span for each image
        const spans = Math.ceil(height / 10);   // 10 is the same as the one in ImageList.css 

        this.setState({ spans });
    }


    render() {

        // destructoring 
        const { description, urls } = this.props.image;

        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <img
                    ref={this.imageRef}
                    alt={description}
                    src={urls.regular}
                    onClick={this.imageHandler}
                />
            </div>
        )
    }
}

export default ImageCard;