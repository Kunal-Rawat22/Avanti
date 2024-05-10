import Download from "./download"
import Contact from "./contact"
import Features from "./Features"
import VideoPage from "./VideoPage"
import Header from "./Header"
export default function IndexPage()
{
    return (
        <>
            <div>
                <Header/>
                <Features/>
                <Download/>
                <Contact/>
                <VideoPage/>
                
            </div>
        </>
    )
}
