import Download from "./download"
import Contact from "./contact"
import Features from "./Features"

export default function IndexPage()
{
    return (
        <>
            <div>
                <h1 className="text-4xl text-blue-700"></h1>
                <Features/>
                <Download/>
                <Contact/>
                
                
            </div>
        </>
    )
}
