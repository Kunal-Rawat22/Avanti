import Download from "./download"
import Contact from "./contact"

export default function IndexPage()
{
    return (
        <>
            <div>
                <h1 className="text-4xl text-blue-700"></h1>
                <Download/>
                <Contact/>
                
            </div>
        </>
    )
}
