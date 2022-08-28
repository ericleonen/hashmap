import { useRouter } from "next/router";
import CreateNoteModal from "../components/app/CreateNoteModal";
import RecentSection from "../components/app/RecentSection";
import SearchBar from "../components/app/SearchBar";
import Shader from "../components/app/Shader";
import TopBar from "../components/app/TopBar";
import Page from "../components/general/Page";
import { logout } from "./api/auth";

const Home = () => {
    const router = useRouter();
    const { key } = router.query;

    return (
        <Page type="stack">
            <TopBar>
                <SearchBar />
            </TopBar>
            <RecentSection />
            { key && <CreateNoteModal /> }
        </Page>
    );
};

export default Home;