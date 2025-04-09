"use client";

import Link from "next/link";
// import { Setting } from "./types/Setting";
// import { use } from "react";

// untuk menggunakan promise
// export default function Nav({
//     settingPromise,
// }: {
//     settingPromise: Promise<Setting>;
// }) {
//     const setting = use(settingPromise);
    
    
//     return (
//         <nav className="space-x-4">
//                 <Link href="/">Home</Link>
//                 <Link href="/about">About</Link>
//                 <Link href="/about/team">Team</Link>
//             </nav>
//     );
// }

export default function Nav() {
   
    return (
        <nav className="space-x-4">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/about/team">Team</Link>
            </nav>
    );
}