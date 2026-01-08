import { useState } from "react";
import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/layout/Footer";
import ImageLightbox from "@/components/layout/ImageLightbox";
import LazyImage from "@/components/layout/LazyImage";
import './ForFun.less';

// Import archeology images
import archeologyImage1 from "@/assets/images/archeology/xiao_gou.jpeg";
import archeologyImage2 from "@/assets/images/archeology/xiao_mou.jpg";
import archeologyImage3 from "@/assets/images/archeology/xiao_shiba.jpg";
import archeologyImage4 from "@/assets/images/archeology/xiao_hannah.jpg";
import archeologyImage5 from "@/assets/images/archeology/xiao_xiao_han.jpg";
import archeologyImage6 from "@/assets/images/archeology/xiao_zhu.jpg";

// Import photography images
import photographyImage1 from "@/assets/images/photography/photography1.jpg";
import photographyImage2 from "@/assets/images/photography/photography2.jpg";
import photographyImage3 from "@/assets/images/photography/photography3.jpeg";
import photographyImage4 from "@/assets/images/photography/photography4.jpeg";
import photographyImage5 from "@/assets/images/photography/photography5.jpg";
import photographyImage6 from "@/assets/images/photography/photography6.jpg";
import photographyImage7 from "@/assets/images/photography/photography7.jpg";
import photographyImage8 from "@/assets/images/photography/photography8.jpeg";
import photographyImage9 from "@/assets/images/photography/photography9.jpg";
import photographyImage10 from "@/assets/images/photography/photography10.jpg";
import photographyImage11 from "@/assets/images/photography/photography11.jpg";

// Import travelling images
import travellingImage1 from "@/assets/images/travelling/travelling1.jpg";
import travellingImage2 from "@/assets/images/travelling/travelling2.jpg";
import travellingImage3 from "@/assets/images/travelling/travelling3.jpeg";
import travellingImage4 from "@/assets/images/travelling/travelling4.jpg";
import travellingImage5 from "@/assets/images/travelling/travelling5.jpg";
import travellingImage6 from "@/assets/images/travelling/travelling6.jpg";
import travellingImage8 from "@/assets/images/travelling/travelling8.jpg";

// Import fun images
import funImage2 from "@/assets/images/fun/fun2.jpg";
import funImage3 from "@/assets/images/fun/fun3.jpg";
import funImage4 from "@/assets/images/fun/fun4.jpg";

// Thesis PDF
import thesis from "@/assets/files/thesis.pdf";

interface FunItem {
  title: string;
  description: string;
  descriptionLink?: string;
  images: string[];
}

const items: FunItem[] = [
  {
    title: "Archaeological Project",
    description:
      "From Sherds to Society: An analysis of Kwahe'e Black-on-white and Social Interaction in the Taos District",
    descriptionLink: thesis,
    images: [
      archeologyImage1,
      archeologyImage2,
      archeologyImage3,
      archeologyImage4,
      archeologyImage5,
      archeologyImage6,
    ],
  },
  {
    title: "Photography",
    description: "Photos are my way to connect with people all around world",
    images: [
      photographyImage1,
      photographyImage2,
      photographyImage3,
      photographyImage4,
      photographyImage5,
      photographyImage6,
      photographyImage7,
      photographyImage8,
      photographyImage9,
      photographyImage10,
      photographyImage11,
    ],
  },
  {
    title: "Travelling",
    description: "Where's my next adventure",
    images: [
      travellingImage1,
      travellingImage2,
      travellingImage3,
      travellingImage4,
      travellingImage5,
      travellingImage6,
      travellingImage8,
    ],
  },
  {
    title: "Trying New Things",
    description: "Venturing out of my comfort zone",
    images: [ funImage2, funImage3, funImage4],
  },
];

const ForFun = () => {
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null);

  return (
    <div className="for-fun-page">
      <Navigation />

      {/* Lightbox Modal */}
      {lightboxImage && (
        <ImageLightbox
          image={lightboxImage.src}
          alt={lightboxImage.alt}
          onClose={() => setLightboxImage(null)}
        />
      )}

      {/* Hero Section */}
      <section className="for-fun-hero">
        <div className="container">
          <h1 className="for-fun-title">Something Fun</h1>
          <p className="for-fun-subtitle">
            Beyond design—exploring the world, capturing moments, and embracing new experiences.
          </p>
        </div>
      </section>

      {/* Fun Items */}
      {items.map((item, index) => (
        <section
          key={index}
          className={`for-fun-section ${index % 2 === 1 ? 'reverse' : ''}`}
        >
          <div className="container">
            <div className="for-fun-content">
              <div className="for-fun-text">
                <h2 className="for-fun-section-title">{item.title}</h2>
                {item.descriptionLink ? (
                  <a
                    href={item.descriptionLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="for-fun-description-link"
                  >
                    {item.description}
                  </a>
                ) : (
                  <p className="for-fun-description">{item.description}</p>
                )}
              </div>
            </div>

            <div className="for-fun-gallery">
              {item.images.map((image, i) => (
                <LazyImage
                  key={i}
                  src={image}
                  alt={`${item.title} ${i + 1}`}
                  className="for-fun-gallery-item"
                  onClick={() => setLightboxImage({ src: image, alt: `${item.title} ${i + 1}` })}
                />
              ))}
            </div>
          </div>
        </section>
      ))}

      <Footer />
    </div>
  );
};

export default ForFun;
