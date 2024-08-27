import PropTypes from "prop-types"

function BlurredCard({ children, ...props }) {
  return (
    <div
      {...props}
      style={{
        position: 'relative',
        display: 'inline-block',
        borderRadius: '10px',
        padding: '20px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
        width: '200px',
        height: '200px'
      }}
    >
      {children}
    </div>
  );
}

BlurredCard.propTypes = {
  children: PropTypes.any
}

export default BlurredCard;
