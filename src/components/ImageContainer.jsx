import PropTypes from 'prop-types';

const imageContainerStyle = {
  borderRadius: '5px',
  backgroundColor: '#f0f0f0',
  overflow: 'hidden',
  flexWrap: 'wrap'
};

export const ImageContainer = ({ src, alt, onImageClick }) => {
  return (
    <div style={imageContainerStyle} onClick={onImageClick}>
      <img src={src} alt={alt} style={{ width: '100%', height: '100%' }} />
    </div>
  );
};

ImageContainer.propTypes = {
  alt: PropTypes.any,
  onImageClick: PropTypes.any,
  src: PropTypes.any
}
