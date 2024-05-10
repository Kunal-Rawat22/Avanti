import Homepage from "./homepage"
import Education from "./education"
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
                <Homepage/>
                <Education/>
                <Features/>
                <Download/>
                <Contact/>
                <VideoPage/>
                
            </div>
        </>
    )
}
