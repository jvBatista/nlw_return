import { useState } from "react";
import { Camera, Trash } from "phosphor-react";
import html2canvas from "html2canvas";
import { LoadingState } from "../LoadingState";

interface ScreenshotButtonProps {
    screenshot: string | null;
    onScreenshotTaken: (screenshot: string | null) => void;
}

export function ScreenshotButton({ screenshot, onScreenshotTaken }: ScreenshotButtonProps) {
    const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);

    async function handleTakeScreenshot() {
        setIsTakingScreenshot(true);

        const canvas = await html2canvas(document.querySelector("html")!);
        const base64Img = canvas.toDataURL("image/png");
        onScreenshotTaken(base64Img);

        setIsTakingScreenshot(false);
    }

    if (screenshot) return (
        <button
            type="button"
            onClick={() => onScreenshotTaken(null)}
            className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-300 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
            style={{ backgroundImage: `url(${screenshot})`, backgroundPosition: "right-bottom", backgroundSize: 100 }}
        >
            <Trash weight="fill" />
        </button>
    );

    return (
        <button
            type="button"
            onClick={handleTakeScreenshot}
            className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
        >
            {
                isTakingScreenshot ? <LoadingState /> : <Camera className="w-6 h-6" />
            }
        </button>
    )
}