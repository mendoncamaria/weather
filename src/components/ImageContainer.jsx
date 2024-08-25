import PropTypes from "prop-types"

const imageContainerStyle = {
  width: '200px',
  height: '200px',
  borderRadius: '5px',
  backgroundColor: '#f0f0f0',
  overflow: 'hidden',
};

export const ImageContainer = ({ src, alt }) => {
  return (
    <div style={imageContainerStyle}>
      <img src={src} alt={alt} style={{ width: '100%', height: '100%' }} />
    </div>
  );
};

ImageContainer.propTypes = {
  alt: PropTypes.any,
  src: PropTypes.any
}
