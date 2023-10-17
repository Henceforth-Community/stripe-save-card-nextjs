import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import StripeConnect from "@/Components/Stripeconnect"
import { useState } from "react";
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [hide,setHide]=useState(true)
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
   
    };
  return (
  
     <>
          {hide &&  <div className="d-flex">
                <label htmlFor="customInput">enter public key</label>
                <input
                    type="text"
                    id="customInput"
                    value={inputValue.trim()}
                    onChange={handleInputChange}
                />
                </div>}
                <div className="">
                    {inputValue.trim()&&<StripeConnect setHide={setHide} apiKey={inputValue.trim()} />}
                </div>

            
        
    </>
  )
}
