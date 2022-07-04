import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";
import { List } from "phosphor-react";
import { useState } from "react";


export function Event() {
    const { slug } = useParams<{ slug: string }>();
    const [open, setOpen] = useState(false)


    return (
        <div className="flex flex-col min-h-screen">
            <div className="absolute top-5 right-4 lg:hidden">
                <button onClick={() => setOpen(!open)}>
                    <List
                        size={34}
                    />
                </button>
            </div>
            <Header />
            <main className="flex flex-1">
                {slug ?
                    <Video lessonSlug={slug} />
                    : <div className="flex-1" />}
                <div className={`lg:flex absolute lg:static lg:z-auto lg:w-auto lg:h-auto ${open ? ' flex right-0 min-h-screen z-50' : 'hidden'} transition-all ease-in-out duration-500`}>
                    <Sidebar />

                </div>
            </main>
        </div>

    )
}