import React, { Component } from 'react';
import './App.css';
import 'react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from 'react-image-gallery';

class App extends Component {
  constructor(props) {
    super(props)

    this.images = [
      {
        original: require('./img/landing1.jpg')
      },
      {
        original: require('./img/landing2.jpg')
      },
      {
        original: require('./img/landing3.jpg')
      },
      {
        original: require('./img/landing4.jpg')
      },
      {
        original: require('./img/landing5.jpg')
      },
      {
        original: require('./img/landing6.jpg')
      }
    ]
  }

  render() {
    return (
      <div>
        <ImageGallery
          items={this.images}
          slideInterval={2000}
          infinite={true}
          lazyLoad={true}
          showThumbnails={false}
          showFullscreenButton={false}
          showPlayButton={false}
          showBullets={true}
          showIndex={true}
          autoPlay={false}
        />       
      </div>
    );
  }
}

export default App;
