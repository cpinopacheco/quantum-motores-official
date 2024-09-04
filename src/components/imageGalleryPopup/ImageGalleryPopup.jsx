/* import styled from "styled-components"; */
import { useState } from "react";
import { images } from "../../data/imgGallery.js";
import ImageGalleryLightbox from "../imageGalleryLightbox/imageGalleryLightbox.jsx";
import Lightbox from "yet-another-react-lightbox";
import { Counter, Download, Thumbnails, Zoom } from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/plugins/counter.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/styles.css";


const ImageGalleryPopup = () => {

  const [index, setIndex] = useState(-1);
  
  return (
    <>
      <ImageGalleryLightbox data={images} onClick={(currentIndex) => setIndex(currentIndex)} />
      <Lightbox 
        plugins={[Counter, Download, Zoom, Thumbnails]}

        index={index}
        slides={images}
        open={index >= 0}
        close={() => setIndex(-1)}
      />
    </>
  );
};

export default ImageGalleryPopup;
