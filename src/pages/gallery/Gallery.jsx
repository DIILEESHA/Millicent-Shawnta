import React from "react";
import "./gallery.css";
import { Image } from "antd";

const Gallery = () => {
  const imageUrls = [
    // "https://i.imgur.com/oeELJiq.jpeg",
    "https://i.imgur.com/4tQhBVX.jpeg",
    "https://i.imgur.com/RJ745so.jpeg",
    "https://i.imgur.com/iGzKZxt.jpeg",
    "https://i.imgur.com/djL4dbo.jpeg",
    "https://i.imgur.com/CQDyRZh.jpeg",
    "https://i.imgur.com/k4qKaw1.jpeg",
    "https://i.imgur.com/eVwMllk.jpeg",
    "https://i.imgur.com/cdqP8uf.jpeg",
    "https://i.imgur.com/jn94keb.jpeg",
  ];

  return (
    <div className="gallery">
      <div className="min_gallery">
        <div className="line"></div>
        <h2 className="couple_name">Millicent + Shawnta</h2>
        <p className="gallery_para">
          We're thrilled to share a glimpse of our wedding photoshoot with you!
          These images capture the love, joy, and excitement we felt as we
          celebrated this new chapter together. From candid smiles to timeless
          portraits, each photo tells a piece of our story and reflects the
          happiness we feel in embarking on this journey.
        </p>
      </div>

      <div className="gallery_bottom">
        <Image.PreviewGroup>
          <div className="gallery_grid">
            {imageUrls.map((url, index) => (
              <div className="gallery_item" key={index}>
                <Image
                  src={url}
                  alt={`Wedding photo ${index + 1}`}
                  width="100%"
                  height="100%"
                  style={{ objectFit: "cover" }}
                />
              </div>
            ))}
          </div>
        </Image.PreviewGroup>
      </div>
    </div>
  );
};

export default Gallery;
