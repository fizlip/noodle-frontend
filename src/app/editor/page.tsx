"use client"
import React from 'react'
import Image from 'next/image'

function Editor() {

  return (
    <main className="justify-between align-center w-[100%] h-[100vh] bg-[url(/grid.webp)] bg-opacity-0">
      <div className="text-center mt-0">
        <div className='m-auto p-20 w-[20%]'>
          <div className='bg-white border-4 p-1 rounded-md'>
            <p>Trigger</p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Editor;