import { useEffect } from 'react';
import { X } from 'lucide-react';
import './ImageLightbox.less';

interface ImageLightboxProps {
  image: string;
  alt: string;
  onClose: () => void;
}

const ImageLightbox = ({ image, alt, onClose }: ImageLightboxProps) => {
  useEffect(() => {
    // Prevent body scroll when lightbox is open
    document.body.style.overflow = 'hidden';

    // Handle escape key
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  return (
    <div className="image-lightbox" onClick={onClose}>
      <button className="lightbox-close" onClick={onClose} aria-label="Close">
        <X size={24} />
      </button>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <img src={image} alt={alt} />
      </div>
    </div>
  );
};

export default ImageLightbox;
