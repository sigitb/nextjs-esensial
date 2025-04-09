"use client";

import { useState } from "react";
import { Counter } from "@/app/counter";
import Image from "next/image";
import gambarKucing from "@/public/kucing.jpg";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Counter />
      {/* <Image src="https://images.unsplash.com/photo-1495360010541-f48722b34f7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2F0fGVufDB8fDB8fHww" alt="cat" width={500} height={500} /> */}
      <div className="relative size-72 rounded-full overflow-hidden">
        <Image src={gambarKucing} 
        alt="gambar kucing" 
        fill 
        className="object-cover" 
        loading="eager" // untuk memastikan gambar di-load sebelum konten di-render
        placeholder="blur" // untuk memastikan gambar di-load sebelum konten di-render
        blurDataURL="https://images.unsplash.com/photo-1495360010541-f48722b34f7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2F0fGVufDB8fDB8fHww" // gambar placeholder
         />
      </div>
    </div>
  );
}
