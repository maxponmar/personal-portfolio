import profileImage from "../assets/profile.webp";

const Home: React.FC<{}> = () => {
    return (
        <div className="flex flex-col items-center justify-center text-center h-screen lg:flex-row">
            <img className="rounded-full w-1/2 sm:w-1/3 md:w-1/5 lg:w-60" src={profileImage} />
            <div>
                <h1 className="mt-1 px-10 text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-black to-blue-900 hover:-translate-y-1 hover:scale-105 duration-75 ease-in cursor-pointer sm:text-4xl sm:px-3">Maximiliano Ponce Marquez</h1>
                <p>Mechatronics Engineer &amp; Software Developer</p>
            </div>
        </div>
    )
}

export default Home;