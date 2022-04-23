import profileImage from "../../assets/profile.webp";

const Home: React.FC<{}> = () => {
    return (
        <div className="bg-[url('./assets/space.webp')] bg-cover bg-fixed mt-[32px]">
            <div className="bg-black bg-opacity-60 flex flex-col items-center justify-center text-center h-[calc(100vh-32px)] lg:flex-row">
                <img className="rounded-full w-1/2 sm:w-72 lg:w-60 mr-2" src={profileImage} />
                <div className="text-white">
                    <h1 className="relative mt-1 px-10 text-3xl font-extrabold  group-hover:scale-[1.005] duration-100 ease-in cursor-default sm:text-4xl sm:px-3 hover:scale-[1.01]">Maximiliano Ponce Marquez</h1>
                    <div className="relative group mt-4 inline-block">
                        <div className="absolute -inset-0 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                        <p className="relative bg-neutral-900 rounded-lg px-5 cursor-default text-sm md:text-base">
                            &#128104;&#8205;&#127981; Mechatronics Engineer &amp; Software Developer &#128421;&#65039;
                        </p>
                    </div>
                </div>
                <a className="absolute bottom-5 right-10 text-white text-xs" href="https://www.freepik.com/photos/night">Night photo created by wirestock - www.freepik.com</a>
            </div>
        </div>

    )
}

export default Home;