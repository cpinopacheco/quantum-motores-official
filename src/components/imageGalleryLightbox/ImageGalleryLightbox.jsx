import PropTypes from 'prop-types';
import styled from 'styled-components';
import Title from '../title/Title';

const ImageGalleryLightbox = (props) => {
    const {data, onClick} = props

    const handleClickImage = (index) => {
        onClick(index)
    }


  return (
    <>
    <Title>Calidad y Excelencia</Title>
    <Container>
        {
            data.map((slide, index) => (
                <ImageContainer onClick={() => handleClickImage(index)} key={index}>
                    <Image src={slide.src} alt={slide.description} />
                </ImageContainer>
            ))
        }
    </Container>
    </>
  )
}

export default ImageGalleryLightbox

ImageGalleryLightbox.propTypes = {
    data: PropTypes.array.isRequired
}

ImageGalleryLightbox.propTypes = {
    onClick: PropTypes.func.isRequired
}

const Container = styled.div`
    max-width: 1200px;
    margin: 1rem auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
    gap: 1.5rem;
    padding: 1rem;

`


const ImageContainer = styled.div`
    width: 100%;
    height: 15rem;
    border: 4px solid var(--secondary-color);
    border-radius: .5rem;
    overflow: hidden;
    cursor: pointer;
    
    :hover {
        opacity: .5;
        transition: opacity .2s ease-in-out;
    }
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
   
`