import React, { useState, useEffect } from 'react'
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
export default function Button() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <>
      {visible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-black text-white p-3 rounded-md shadow-lg hover:bg-red-700 transition flex items-center justify-center cursor-pointer "
          aria-label="Scroll to top"
        >
          <MdKeyboardDoubleArrowUp size={24} />
        </button>
      )}
    </>
  )
}