import profileImage from "./assets/profile.webp";

const Home: React.FC<{}> = () => {
    return (
        <div className="text-center">
            <img className="rounded-full" src={profileImage} />
            <h1 className="mt-10 text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-black to-blue-900 hover:-translate-y-1 hover:scale-105 duration-75 ease-in cursor-pointer">Maximiliano Ponce Marquez</h1>
        </div>
    )
}

export default Home;


