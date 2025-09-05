import React, { useState } from "react";
import "./App.css";
const images = [
 "https://picsum.photos/id/1015/600/400",
 "https://picsum.photos/id/1016/600/400",
 "https://picsum.photos/id/1018/600/400",
 "https://picsum.photos/id/1020/600/400",
 "https://picsum.photos/id/1024/600/400",
 "https://picsum.photos/id/1015/600/400",
 "https://picsum.photos/id/1016/600/400",
 "https://picsum.photos/id/1018/600/400",
 "https://picsum.photos/id/1020/600/400",
 "https://picsum.photos/id/1024/600/400",
 "https://picsum.photos/id/1025/600/400",
"https://picsum.photos/id/1027/600/400",
"https://picsum.photos/id/1035/600/400",
"https://picsum.photos/id/1036/600/400",
"https://picsum.photos/id/1040/600/400",
"https://picsum.photos/id/1041/600/400",
"https://picsum.photos/id/1043/600/400",
"https://picsum.photos/id/1050/600/400",
"https://picsum.photos/id/1062/600/400",
"https://picsum.photos/id/1069/600/400",
];
function App() {
 const [selectedIndex, setSelectedIndex] = useState(null);
 const openModal = (index) => {
   setSelectedIndex(index);
 };
 const closeModal = () => {
   setSelectedIndex(null);
 };
 const showPrev = () => {
   setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
 };
 const showNext = () => {
   setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
 };
 return (
<div className="App">
<h1>Image Gallery</h1>
<div className="gallery">
       {images.map((src, index) => (
<img
           key={index}
           src={src}
           alt={`img-${index}`}
           onClick={() => openModal(index)}
         />
       ))}
</div>
     {selectedIndex !== null && (
<div className="modal">
<button className="close" onClick={closeModal}>✖</button>
<button className="prev" onClick={showPrev}>◀</button>
<img src={images[selectedIndex]} alt="selected" className="modal-img" />
<button className="next" onClick={showNext}>▶</button>
</div>
     )}
</div>
 );
}
export default App;