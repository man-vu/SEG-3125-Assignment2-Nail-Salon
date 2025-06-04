import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { X, ArrowLeft, ArrowRight, Download, Maximize2, Share2, Search } from "lucide-react";
import "./GalleryModal.css";


interface GalleryModalProps {
  images: string[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  setIndex: (idx: number) => void;
}

const GalleryModal: React.FC<GalleryModalProps> = ({
  images,
  index,
  onClose,
  onPrev,
  onNext,
  setIndex,
}) => {
  const backdropRef = useRef<HTMLDivElement>(null);
  const image = images[index];

  const [zoomed, setZoomed] = useState(false);
  const [copied, setCopied] = useState(false);

  // Handle keyboard navigation and close
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "z") setZoomed((z) => !z);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose, onPrev, onNext]);

  // Close on clicking outside
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (backdropRef.current && e.target === backdropRef.current) onClose();
    };
    window.addEventListener("mousedown", handleClick);
    return () => window.removeEventListener("mousedown", handleClick);
  }, [onClose]);

  // Prevent background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // Share button handler
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Nail Art Gallery",
          url: image,
        });
      } catch {
        // User cancelled or failed
      }
    } else if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(image);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch {
        alert("Could not copy link.");
      }
    } else {
      alert("Sharing is not supported in this browser.");
    }
  };

  // Fullscreen button handler
  const handleFullscreen = () => {
    const img = document.getElementById("gallery-modal-img");
    if (img && img.requestFullscreen) {
      img.requestFullscreen();
    } else if (img && (img as any).webkitRequestFullscreen) {
      (img as any).webkitRequestFullscreen();
    } else {
      window.open(image, "_blank");
    }
  };

  // Zoom button handler
  const handleZoom = () => setZoomed((z) => !z);

  return (
    <div ref={backdropRef} className="gallery-modal-backdrop">
      <div className="gallery-modal-topbar">
        <div className="gallery-modal-counter">
          {index + 1} / {images.length}
        </div>
        <div className="gallery-modal-actions">
          <button className="gallery-modal-icon" onClick={handleShare} title="Share">
            <Share2 size={20} />
            {copied && (
              <span style={{
                position: "absolute",
                top: "105%",
                left: "50%",
                transform: "translateX(-50%)",
                background: "#222",
                color: "#fff",
                borderRadius: "4px",
                padding: "2px 8px",
                fontSize: "0.88em"
              }}>
                Copied!
              </span>
            )}
          </button>
          <button className="gallery-modal-icon" onClick={handleZoom} title={zoomed ? "Unzoom" : "Zoom"}>
            <Search size={20} />
          </button>
          <button className="gallery-modal-icon" onClick={handleFullscreen} title="Full screen">
            <Maximize2 size={20} />
          </button>
          <a
            href={image}
            download
            className="gallery-modal-icon"
            target="_blank"
            rel="noopener noreferrer"
            title="Download"
          >
            <Download size={20} />
          </a>
          <button className="gallery-modal-icon" onClick={onClose} title="Close">
            <X size={22} />
          </button>
        </div>
      </div>
      <div className="gallery-modal-center">
        <button className="gallery-modal-arrow" onClick={onPrev} disabled={index === 0} aria-label="Previous">
          <ArrowLeft size={32} />
        </button>
        <motion.img
          key={image}
          src={image}
          id="gallery-modal-img"
          className={`gallery-modal-image${zoomed ? " zoomed" : ""}`}
          alt={`Nail design ${index + 1}`}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.25 }}
          style={
            zoomed
              ? { cursor: "zoom-out", maxWidth: "100vw", maxHeight: "96vh", boxShadow: "0 0 0 9999px rgba(20,20,20,0.87)" }
              : { cursor: "zoom-in" }
          }
          onClick={handleZoom}
        />
        <button className="gallery-modal-arrow" onClick={onNext} disabled={index === images.length - 1} aria-label="Next">
          <ArrowRight size={32} />
        </button>
      </div>
      <div className="gallery-modal-thumbnails">
        {images.map((img, i) => (
          <img
            key={img}
            src={img}
            alt={`Nail design ${i + 1}`}
            className={`gallery-modal-thumb ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
            style={{ cursor: "pointer" }}
          />
        ))}
      </div>
    </div>
  );
};

export default GalleryModal;
