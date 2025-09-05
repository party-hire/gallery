
import React, { useState } from "react";
import ImageModal from "./ImageModal";
import './Gallery.css';

const items = [
  {
    id: 1,
    title: "Item 1",
    price:"12.99",
    description: "Add a touch of elegance and charm to your event with our beautifully crafted floral decoration set. Perfect for weddings, birthdays, baby showers, and corporate events, this arrangement features",
    thumbnail: "/images/red1.jpg",
    images: [
      "/images/red.jpg",
      "/images/red1.jpg",
      "/images/red2.jpg"
    ]
  },
  {
    id: 2,
    title: "Item 2",
    price:"12.99",
    description: "Add a touch of elegance and charm to your event with our beautifully crafted floral decoration set. Perfect for weddings, birthdays, baby showers, and corporate events, this arrangement features",
    thumbnail: "/images/item3-special.jpg",
    images: [
      "/images/purple.jpg",
      "/images/purple1.jpg",
      "/images/purple2.jpg",
      "/images/purple3.jpg"
    ]
  },
  {
    id: 3,
    title: "Item 3",
    price:"12.99",
    description: "Add a touch of elegance and charm to your event with our beautifully crafted floral decoration set. Perfect for weddings, birthdays, baby showers, and corporate events, this arrangement features",
    thumbnail: "/images/item3-special.jpg",
    images: [
      "/images/yellow1.jpg",
      "/images/yellow.jpg",
      "/images/yellow2.jpg",
    ]
  },
  {
    id: 4,
    title: "Item 4",
    price:"12.99",
    description: "Add a touch of elegance and charm to your event with our beautifully crafted floral decoration set. Perfect for weddings, birthdays, baby showers, and corporate events, this arrangement features",
    thumbnail: "/images/orange2.jpg",
    images: [
      "/images/orange2.jpg",
      "/images/orange1.jpg",
      "/images/orange.jpg"
    ]
  },
  {
    id: 5,
    title: "Item 5",
    price:"12.99",
    description: "Add a touch of elegance and charm to your event with our beautifully crafted floral decoration set. Perfect for weddings, birthdays, baby showers, and corporate events, this arrangement features",
    thumbnail: "/images/item3-special.jpg",
    images: [
      "/images/redwhite3.jpg",
      "/images/redwhite.jpg",
      "/images/redwhite1.jpg",
      "/images/redwhite2.jpg"
    ]
  },
  {
    id: 6,
    title: "Item 6",
    price:"12.99",
    description: "Add a touch of elegance and charm to your event with our beautifully crafted floral decoration set. Perfect for weddings, birthdays, baby showers, and corporate events, this arrangement features",
    thumbnail: "/images/item3-special.jpg",
    images: [
      "/images/pinkganesh.jpg",
      "/images/pinkganesh1.jpg",
      "/images/pinkganesh2.jpg"
    ]
  },
  {
    id: 7,
    title: "Item 7",
    price:"12.99",
    description: "Add a touch of elegance and charm to your event with our beautifully crafted floral decoration set. Perfect for weddings, birthdays, baby showers, and corporate events, this arrangement features",
    thumbnail: "/images/item3-special.jpg",
    images: [
      "/images/flowers3.jpg",
      "/images/flowers.jpg",
      "/images/flowers1.jpg",
      "/images/flowers2.jpg"
    ]
  },
  {
    id: 8,
    title: "Item 8",
    price:"12.99",
    description: "Add a touch of elegance and charm to your event with our beautifully crafted floral decoration set. Perfect for weddings, birthdays, baby showers, and corporate events, this arrangement features",
    thumbnail: "/images/item3-special.jpg",
    images: [
      "/images/cradle1.jpg",
      "/images/cradle.jpg",
    ]
  },
    {
    id: 9,
    title: "Item 9",
    price:"12.99",
    description: "Add a touch of elegance and charm to your event with our beautifully crafted floral decoration set. Perfect for weddings, birthdays, baby showers, and corporate events, this arrangement features",
    thumbnail: "/images/item3-special.jpg",
    images: [
      "/images/deepam.jpg",
      "/images/door.jpg",
      "/images/ganesh.jpg"
    ]
  },
  
];

function ItemGrid() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openModal = (item) => {
    setSelectedItem(item);
    setSelectedImageIndex(0);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  const showPrev = () => {
    setSelectedImageIndex((prev) =>
      prev === 0 ? selectedItem.images.length - 1 : prev - 1
    );
  };

  const showNext = () => {
    setSelectedImageIndex((prev) =>
      prev === selectedItem.images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <>
      <div className="gallery">
        {items.map((item) => (
          <div key={item.id} onClick={() => openModal(item)}>
            <img className="gallery-img" src={item.images[0]} alt={item.title} />
            <p>{item.title}</p>
            <p>{item.price}</p>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
      {selectedItem && (
        <ImageModal
          image={selectedItem.images[selectedImageIndex]}
          onClose={closeModal}
          onPrev={showPrev}
          onNext={showNext}
        />
      )}
    </>
  );
}

export default ItemGrid;
