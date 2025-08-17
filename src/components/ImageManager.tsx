import React from 'react';
import Image from 'next/image';

const images = {
  teamwork: '/images/F64AF5A6C-DF04-48A4-A5AD-5D111E546B73.png',
  careers: '/images/DA40EC32-B0FA-40DB-9040-C59FBDB8D214.png',
  guestApp: '/images/B042-481E-85D8-6D5FF7E5DECB.png',
  // Add more image mappings here
};

type ImageKey = keyof typeof images;

interface ImageManagerProps {
  name: ImageKey;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
}

const ImageManager: React.FC<ImageManagerProps> = ({ name, alt, width, height, className, priority }) => {
  const src = images[name];
  if (!src) {
    console.error(`Image with name "${name}" not found.`);
    return null;
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
    />
  );
};

export default ImageManager;
