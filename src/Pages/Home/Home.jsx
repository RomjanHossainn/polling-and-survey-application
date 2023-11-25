import Navbar from "../../ShareComponets/Navbar/Navbar";

const Home = () => {


    const date = new Date();
    

    return (
        <div>
            <Navbar></Navbar>
            <h1 className="text-5xl">Home Page</h1>
        </div>
    );
};

export default Home;