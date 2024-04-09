import React, { useState, useEffect, ReactNode } from 'react';
import { encodeUrlComponents, isValidImageUrl } from '../utility/helper.service';
import "../css/dynamicbg.css"

type CustomCSSProperties = React.CSSProperties & {
  '--dynamic-bg-image'?: string;
};

interface DynamicBackgroundProps {
  images?: string[];
  interval?: number;
  dynamicBgClasses?: string;
  children?: ReactNode;
}

const DynamicBackground: React.FC<DynamicBackgroundProps> = ({
  images = ['https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg', 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg'],
  interval = 2000,
  dynamicBgClasses = '',
  children,
}) => {
  const [currentImage, setCurrentImage] = useState<number>(0);

  useEffect(() => {
    const validImages = images.filter(isValidImageUrl).map(encodeUrlComponents);
    if (validImages.length === 0) return;

    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % validImages.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images, interval]);

  useEffect(() => {
    document.documentElement.style.setProperty('--dynamic-bg-image', `url(${images[currentImage]})`);
  }, [currentImage, images]);

  const style: CustomCSSProperties = {
    '--dynamic-bg-image': `url(${images[currentImage]})`,
  };

  return (
    <div
      className={`dynamic-background ${dynamicBgClasses}`}
      style={style as React.CSSProperties}
    >
      {children}
    </div>
  );
};

export default DynamicBackground;