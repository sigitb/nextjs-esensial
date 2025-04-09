import { getSetting } from "./queries/getSetting";
import Nav from "./nav";
import { Suspense } from "react";

export async function Header() {
    // const setting = getSetting();  // jika menggunakan promise

    const setting = await getSetting();
   
    return (
        <header className="border-b border-green-500 py-2 mb-2">
            <div className="text-3xl">{setting.siteName}</div>
            {/* untuk menampilkan loading ketika data belum siap */}
            {/* <Suspense fallback="Loading..."> */} 
                {/* <Nav settingPromise={setting} /> */}
            {/* </Suspense> */}

            <Nav />
        </header>
    );
}