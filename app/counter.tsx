"use client";

import { useState } from "react";

export function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p> Counter  : {count}</p>
            <button onClick={() => setCount(count + 1)} 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Tambah</button>
        </div>
    )
}