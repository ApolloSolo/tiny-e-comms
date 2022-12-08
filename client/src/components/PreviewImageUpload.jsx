import React from 'react'

const PreviewImageUpload = ({source}) => {
  return (
    <img src={source} className="w-56 h-auto rounded-md shadow-md"/>
  )
}

export default PreviewImageUpload