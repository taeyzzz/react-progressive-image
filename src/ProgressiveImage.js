import React, { useEffect, useState } from 'react'

const ProgressiveImage = (props) => {
  const [currentImage, setCurrentImage] = useState(props.placeHolderImageSrc)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchImage(props.src)
  }, [])

  useEffect(() => {
    setCurrentImage(props.placeHolderImageSrc)
    setIsLoading(true)
    fetchImage(props.src)
  }, [props.placeHolderImageSrc, props.src])

  const fetchImage = (src) => {
    const image = new Image()
    image.onload = () => {
      setCurrentImage(image.src)
      setIsLoading(false)
    }
    image.src = src
  }

  const getStyleImage = (loading) => {
    return {
      transition: 'filter 0.5s cubic-bezier(0.22, 0.61, 0.36, 1) 0s',
      filter: `${loading ? 'blur(50px)' : ''}`,
    }
  }

  return (
    <img className={props.className || ""} style={getStyleImage(isLoading)} src={currentImage} />
  )
}

export default ProgressiveImage
