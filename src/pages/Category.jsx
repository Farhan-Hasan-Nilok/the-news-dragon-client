import { useLoaderData } from "react-router-dom";
import News from "../Shared/News";

// this page is for redering categorywise news

const Category = () => {
    const data = useLoaderData();
    return (
        <div>
            <h5 className="fw-bold">Dragon News Home</h5>
            <div className="mb-3">
                {
                    data.map(news => <News key={news._id} news={news} />)
                }
            </div>
        </div>
    );
};

export default Category;