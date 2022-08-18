import { logout } from "./api/auth";

const Home = () => {
    return (
        <div>
            Hey, it's the home
            <button onClick={logout}>Logout</button>
        </div>
    );
};

export default Home;