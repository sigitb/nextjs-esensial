import { getSetting } from "./queries/getSetting";

export async function Footer() {
    const setting = await getSetting();
    return (
        <footer className="border-t border-green-500 py-2 mt-2">
            copyright &copy; {setting.siteName }
        </footer>
    );
}