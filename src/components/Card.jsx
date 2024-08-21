import React from 'react';

function BlurredCard({ children, blurRadius = 10, ...props }) {
  return (
    <div
      {...props}
      style={{
        position: 'relative',
        display: 'inline-block',
        borderRadius: '10px',
        padding: '20px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
        // background: `rgba(255, 255, 255, 0.5)`, // Adjust opacity as needed
        // background: '#9492a780',
        backgroundImage: 'linear-gradient(to left, #ff24b0, #e5c9e2)',
        backdropFilter: `blur(${blurRadius}px)`,
        WebkitBackdropFilter: `blur(${blurRadius}px)`,
      }}
    >
      {children}
    </div>
  );
}

export default BlurredCard;
