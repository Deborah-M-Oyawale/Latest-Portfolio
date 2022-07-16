import LeftBar from "../components/LeftBar"
import Home from '../components/Home'
import RightBar from "../components/RightBar";
import MainContent from "../components/MainContent"
const MainPage = () => {
    return (
        <>
            <section >
                <LeftBar/>
                <MainContent/>
                <RightBar />
            </section>
        </>
    )
}

export default MainPage;