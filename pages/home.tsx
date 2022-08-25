import SearchBar from "../components/app/SearchBar";
import TopBar from "../components/app/TopBar";
import Page from "../components/general/Page";
import { logout } from "./api/auth";

const Home = () => {
    return (
        <Page type="stack">
            <TopBar>
                <SearchBar />
            </TopBar>
        </Page>
    );
};

export default Home;