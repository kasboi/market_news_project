import { useState } from "react";
import "./ImageWithSkeleton.css";

interface ImageWithSkeletonProps {
  src: string;
  alt: string;
  className?: string;
}

const ImageWithSkeleton = ({ src, alt, className }: ImageWithSkeletonProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <div className={`image-container ${className || ""}`}>
      {!imageLoaded && !imageError && <div className="skeleton-loader"></div>}
      <img
        src={src}
        alt={alt}
        onLoad={() => setImageLoaded(true)}
        onError={() => setImageError(true)}
        style={{ display: imageLoaded ? "block" : "none" }}
      />
      {imageError && <div className="image-error">Failed to load image</div>}
    </div>
  );
};

export default ImageWithSkeleton;
