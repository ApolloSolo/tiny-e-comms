import React, { useEffect } from 'react'

const Success = () => {
  useEffect(() => {
    const purchaseId = window.location.pathname.split("/").slice(-1);
    console.log(purchaseId);
  })
  return (
    <div>Success</div>
  )
}

export default Success