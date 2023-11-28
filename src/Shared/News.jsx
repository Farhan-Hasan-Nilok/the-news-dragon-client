/* eslint-disable react/prop-types */
import { useState } from "react";
import { BsBookmark, BsShare, BsEyeFill, BsStarFill, BsStarHalf } from "react-icons/bs";
const News = ({ news }) => {
    const [fold, setFold] = useState(true);
    const [bookmark, setBookMark] = useState(false);
    return (
        <div>
            <div className="card mb-4">
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
                        <BsBookmark onClick={() => setBookMark(!bookmark)} className={bookmark ? "text-primary" : ""}/>
                        <BsShare className="ms-2" />
                    </div>
                </div>
                <div className="card-body">
                    <h5 className="card-title fw-bold font-color">{news?.title}</h5>
                    <img className="w-100" src={news?.image_url} alt="news-thumbnail" />
                    {/* Read More button */}
                    {
                        fold ? <>
                            <p className="text-gray mb-2">{news?.details?.substring(0, 200)} <span onClick={() => setFold(!fold)} className="color-golden pointer-event">...Read More</span></p>
                        </>

                            : <p className="text-gray mb-2">{news?.details} <span onClick={() => setFold(!fold)} className="color-golden pointer-event">...Read Less</span></p>
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

export default News;