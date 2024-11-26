import React from 'react';

const ImageDisplay = ({ imageUrl }) => (
  imageUrl ? (
    <div>
      <img src={imageUrl} alt="Generated NPC" />
    </div>
  ) : <p>Image Will Appear Here After Generation.</p>
);

export default ImageDisplay;
