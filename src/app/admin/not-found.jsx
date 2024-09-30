"use client"
export default function AdminError(){
    return(
        <div className="not-found-error w-screen h-screen grid place-content-center">
            <div className="w-240px h-auto max-md:w-screen">
                <h1 className="text-9xl font-mono font-thin">Error</h1>
                <h2 className="text-6xl text-sans font-bold">404</h2>
                <button className="h-[44px] w-[80%]">home</button>
            </div>
        </div>
    )
}