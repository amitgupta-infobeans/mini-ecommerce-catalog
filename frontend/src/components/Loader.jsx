import React from 'react'

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center backdrop-blur-xs">
      <div className="h-20 w-20 border-4 border-gray-300 border-t-black rounded-full animate-spin mb-4" />
    </div>

  )
}

export default Loader