import { Cursor, Typewriter } from "react-simple-typewriter"
import React from 'react'
 const words = ["We Design Interfaces That Users Love"]    
    export default function Trpc() {
      return (
        <div>
<Typewriter typeSpeed={40} loop={0} words={words} />
<Cursor cursorColor="#ffc107" />
        </div>
      )
    }
    