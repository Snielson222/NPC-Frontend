import React from 'react';

const ImageDisplay = ({ imageUrl }) => (
  imageUrl ? (
    <div>
      <img src={imageUrl} alt="Generated NPC" />
    </div>
  ) : <p>Image will appear here after generation.</p>
);

export default ImageDisplay;
