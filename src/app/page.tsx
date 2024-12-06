"use client";

import React, { useMemo, useState } from "react";
import { gallery } from "./data/images";
import Image, { StaticImageData } from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  maxWidth: 600,
  p: 6,
  borderRadius: 2, // Smooth corners
};

export default function Home() {
  const [filterValue, setFilterValue] = useState("");
  const [open, setOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<{ title: string; image_src: string | StaticImageData } | null>(null);

  const handleOpen = (photo: { title: string; image_src: string | StaticImageData }) => {
    setSelectedPhoto(photo);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedPhoto(null);
  };

  const filteredGallery = useMemo(() => {
    return gallery.filter((photo) =>
      photo.title.toLowerCase().includes(filterValue.toLowerCase())
    );
  }, [filterValue]);

  return (
    <div className="flex flex-col items-center p-4 space-y-6">
      <Typography variant="h3" component="h1" className="text-gray-800 font-bold">
        Moja Galeria React (Next.js)
      </Typography>
      <Typography variant="h5" component="h2" className="text-gray-600">
        Galeria zdjęć
      </Typography>
      <input
        type="text"
        placeholder="Filtruj zdjęcia"
        value={filterValue}
        onChange={(e) => setFilterValue(e.target.value)}
        className="p-2 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {filteredGallery.map((photo) => (
          <div
            key={photo.id}
            className="flex flex-col items-center space-y-2 cursor-pointer"
            onClick={() => handleOpen(photo)}
          >
            <Image
              src={photo.image_src}
              alt={photo.title}
              width={300}
              height={200}
              className="rounded-md shadow-lg hover:scale-105 transition-transform duration-300"
            />
            <Typography variant="subtitle1" className="text-gray-700 font-medium">
              {photo.title}
            </Typography>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedPhoto && (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} className="text-center">
            <Image
              src={selectedPhoto.image_src}
              alt={selectedPhoto.title}
              width={500}
              height={400}
              className="rounded-md shadow-lg"
            />
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              className="mt-4 text-black font-bold"
            >
              {selectedPhoto.title}
            </Typography>
          </Box>
        </Modal>
      )}

      <div>
        <h5>Stworzone przez: Daniel Siwiec</h5>
      </div>
    </div>
  );
}
