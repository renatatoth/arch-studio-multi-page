import Carousel from "../components/ui/Carousel";

const carouselData = [
    {
        "id": 0,
        "desktopUrl" : require("../assets/home/desktop/image-hero-paramour.jpg"),
        "tabletUrl" : "../assets/home/tablet/image-hero-paramour.jpg",
        "mobileUrl" : "../assets/home/mobile/image-hero-paramour.jpg",
        "title" : "Project Paramour",
        "description" : "Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture."
    },
    {
        "id": 1,
        "desktopUrl" : require("../assets/home/desktop/image-hero-seraph.jpg"),
        "tabletUrl" : "../assets/home/tablet/image-hero-seraph.jpg",
        "mobileUrl" : "../assets/home/mobile/image-hero-seraph.jpg",
        "title" : "Seraph Station",
        "description" : "The Seraph Station project challenged us to design a unique station that would transport people through time. The result is a fresh and futuristic model inspired by space stations."
    },
    {
        "id": 2,
        "desktopUrl" : require("../assets/home/desktop/image-hero-federal.jpg"),
        "tabletUrl" : "../assets/home/tablet/image-hero-federal.jpg",
        "mobileUrl" : "../assets/home/mobile/image-hero-federal.jpg",
        "title" : "Federal II Tower",
        "description" : "A sequel theme project for a tower originally built in the 1800s. We achieved this with a striking look of brutal minimalism with modern touches."
    },
    {
        "id": 3,
        "desktopUrl" : require("../assets/home/desktop/image-hero-trinity.jpg"),
        "tabletUrl" : "../assets/home/tablet/image-hero-trinity.jpg",
        "mobileUrl" : "../assets/home/mobile/image-hero-trinity.jpg",
        "title" : "Trinity Bank Tower",
        "description" : "Trinity Bank challenged us to make a concept for a 84 story building located in the middle of a city with a high earthquake frequency. For this project we used curves to blend design and stability to meet our objectives."
    }
];

const Index = () => {
    return (
        <>
            <Carousel data={carouselData}/>
        </>
    );
};

export default Index;