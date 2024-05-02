import Contact from "./contact"
import Download from "./download"
export default function IndexPage()
{
    return (
        <>
            <div>
                <h1 className="text-4xl text-blue-700"></h1>
                <Contact/>
                <Download/>
            </div>
        </>
    )
}
