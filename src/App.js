import React, { useState } from 'react';
import logo from './logo.svg';
import Img from './ProgressiveImage'
import PlaceHolderImage1 from './placeholder1.jpeg'
import PlaceHolderImage2 from './placeholder2.jpg'
import './App.css';

const listImage = [
  {id: 1, placeHolderImageSrc: PlaceHolderImage1, src: "https://www.pietmoodshop.be/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/n/a/nature_view___uitgeverij_lannoo_3.jpg"},
  {id: 2, placeHolderImageSrc: PlaceHolderImage2, src: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Scottsview3.1.jpg"}
]

function App() {
  const [selectedImg, setSelectedImg] = useState(undefined)

  const handleClicked = (data) => {
    setSelectedImg(data)
  }

  return (
    <div className="App">
      hello
      {
        listImage.map(data => {
          return (
            <div key={data.id} className="menu" onClick={() => handleClicked(data)}>{data.id}</div>
          )
        })
      }
      {selectedImg ? (
        <div className="image-container">
          <Img
            placeHolderImageSrc={selectedImg.placeHolderImageSrc}
            src={selectedImg.src}
          />
        </div>
      ) : null}
    </div>
  );
}

export default App;
