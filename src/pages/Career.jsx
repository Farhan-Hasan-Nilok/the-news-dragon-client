import { useState } from "react";
import { BsBookmark, BsShare, BsEyeFill, BsStarFill, BsStarHalf } from "react-icons/bs";
const Career = () => {
    const news = {
        "_id": "e342b6c0c8efc8ca9e811991dc8a7901",
        "others_info": {
            "is_todays_pick": false,
            "is_trending": false
        },
        "category_id": "4",
        "rating": {
            "number": 4.5,
            "badge": "Excellent"
        },
        "total_view": 733,
        "title": "George Russell wears $110 Daniel Ricciardo merchandise to Zandvoort paddock ahead of Dutch GP",
        "author": {
            "name": "Theo Minh Châu",
            "published_date": "2022-08-25 06:03:00",
            "img": "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
        },
        "thumbnail_url": "https://i.ibb.co/df3gJ1b/unsplash-Eh-Tc-C9s-YXsw-13.png",
        "image_url": "https://i.ibb.co/Z2JjRnF/unsplash-Eh-Tc-C9s-YXsw-2.png",
        "details": "Mercedes’ George Russell arrived at the Zandvoort paddock wearing a Daniel Ricciardo merchandise ahead of the Dutch GP. Ricciardo is one of the most popular and marketable drivers in F1 today. Millions of fans around the world love and idolize him, and his merchandise is one of the highest-selling among all active F1 drivers. It seems as though George Russell himself is a huge fan of the former Red Bull star. Ahead of the 2022 Dutch Grand Prix, Russell arrived at Zandvoort sporting Ricciardo’s merch. He wore a full-sleeve sweater with ‘Enchante’ written on it, and according to the Aussie’s website, it costs $110. something about george russell in daniel ricciardo merch pic.twitter.com/1Z9ZqQ4Lm1 — abs (@footonthegasIy) September 1, 2022 Some people on social media also reported that the 24-year-old was not wearing his own sweater. It was his girlfriend’s sweater, and F1 Twitter loved the fact that both he and his partner are fans of the honey badger! george russell and daniel ricciardo you will always be famous pic.twitter.com/2g2cik6P5P — s (@formullana) September 1, 2022 Ricciardo is having a tough time on track in 2022, but even he will feel good to know that he has so many fans around the world who still love him. Also read: “I have a lot of respect for Ferrari in general”: 24-year old Max Verstappen shares thoughts on $1.35 billion rival team Where will Daniel Ricciardo drive in 2023? Ricciardo’s departure at the end of the season was confirmed by McLaren in August. The Perth-born driver was not performing up to expectations and the Surrey-based outfit decided to pull the plug early. This was not a popular decision, as many people including Sebastian Vettel and Lewis Hamilton felt that the 33-year-old should have gotten more time. For now, he is without an F1 seat but he’s too valuable a driver to remain on the sidelines. Strong rumors have linked him back to a move to Alpine. Team boss Otmar Szafnauer has not confirmed anything as of yet, but he remains the favorite. This is especially because their junior driver Oscar Piastri, who was first choice to replace Fernando Alonso at the team is reportedly on his way to McLaren. There are some other teams who are interested in securing the services of Ricciardo. Both him and Haas team principal Guenther Steiner recently admitted that they held talks about their 2023 seat a few weeks ago. A decision regarding his future in F1 is expected to be announced very soon. Also read: McLaren F1 to save fund from Daniel Ricciardo’s $16 Million Contract to secure Oscar Piastri   The post George Russell wears $110 Daniel Ricciardo merchandise to Zandvoort paddock ahead of Dutch GP appeared first on The SportsRush."
    }
    const [fold, setFold] = useState(true);
    return (
        <div>
            <div className="card mb-4 w-50 mx-auto mt-5">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                        <div>
                            <img className="author-img" src={news?.author?.img} alt="" />
                        </div>
                        <div className="ms-2">
                            <p className="mb-1 fw-semibold">{news?.author?.name}</p>
                            <p className="mb-1">{news?.author?.published_date}</p>
                        </div>
                    </div>

                    <div className="px-2 text-gray">
                        <BsBookmark />
                        <BsShare className="ms-2" />
                    </div>
                </div>
                <div className="card-body">
                    <h5 className="card-title fw-bold font-color">{news?.title}</h5>
                    <img className="w-100" src={news?.image_url} alt="news-thumbnail" />
                    {/* Read More button */}
                    {
                        fold ? <>
                            <p onClick={() => setFold(!fold)} className="text-gray mb-2">{news.details.substring(0, 200)} <span className="color-golden pointer-event">...Read More</span></p>
                        </>

                            : <p onClick={() => setFold(!fold)} className="text-gray mb-2">{news.details} <span className="color-golden pointer-event">...Read Less</span></p>
                    }
                    <hr />
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center color-golden">
                            <BsStarFill size={17} />
                            <BsStarFill size={17} />
                            <BsStarFill size={17} />
                            <BsStarFill size={17} />
                            <BsStarHalf size={17} />
                            <p className="mb-0 px-2">{news?.rating?.number}</p>
                        </div>
                        <div className="d-flex align-items-center text-gray">
                            <BsEyeFill size={17} />
                            <p className="mb-0 px-2">{news?.total_view}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Career;