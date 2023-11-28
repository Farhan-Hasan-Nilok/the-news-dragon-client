import qzone1 from '../assets/qzone1.png';
import qzone2 from '../assets/qzone2.png';
import qzone3 from '../assets/qzone3.png';
import bg from '../assets/bg.png';
const Qzone = () => {
    return (
        <div className="mt-5 rounded w-100">
            <div className='bg-gray'>
                <h5 className="fw-bold px-3 py-3">Q-Zone</h5>
                <div className='text-center'>
                    <img src={qzone1} alt="" />
                    <img src={qzone2} alt="" />
                    <img src={qzone3} alt="" />
                </div>
            </div>

            <div
                className="bg-img-height mt-3 rounded mb-3"
                style={{ backgroundImage: `url(${bg})`}}
            >
                <div className="text-white text-center d-flex flex-column align-items-center">
                    <h3>Create an <br /> Amazing <br /> Newspaper</h3>
                    <p className="mt-2 fw-light">
                        Discover thousands of <br /> options, easy to <br /> customize layouts, one-click <br /> to import demo and much more.
                    </p>
                    <div className='mt-3'>
                        <button className="nav-btn" data-mdb-ripple-init>Learn More</button>
                    </div>
                </div> 
            </div>
        </div>
    );
};

export default Qzone;