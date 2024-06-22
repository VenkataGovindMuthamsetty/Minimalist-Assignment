import { Component } from "react";
import './index.css'
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";

import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

class Home extends Component{
    render(){
        return(
            <div>
                <div className="top-backgroundimg">
                    <nav className="navbar">FireFly</nav>
                    <h1 className="top-heading">The choice is yours. Because they don’t have one.</h1>
                    <button className="top-button">QUICK VIEW</button>
                </div>
                <div className="middle-section">
                    <div className="main-headings">
                        <div>
                            <hr/>
                        </div>
                        <p className="about">About</p>
                        <div>
                            <hr/>
                        </div>
                    </div>
                    <div className="about-content">
                        <p>Our products are crafted exclusively from the dreams and screams of young kids who wanted to show their mastery in their chosen fields, but were directed towards a factory for daily wages. Each cracker bursts brighter than their lost smiles, and can be heard louder than their cries for miles. Buy them, burst them, brag about them.
                        <span>The choice is yours. Because they don’t have one.</span></p>
                    </div>
                    <div className="main-headings">
                        <div>
                            <hr/>
                        </div>
                        <p className="about">Our products</p>
                        <div>
                            <hr/>
                        </div>
                    </div>
                    <div className="product-content">
                        <div className="card-container">
                            <div>
                                <img src="https://s3-alpha-sig.figma.com/img/22f6/b7b5/b47561aa2ad560235e2702e286a6d4b7?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D1sbiDpivdUXcgrTSSc5RJI2iy3cl2mwuq097Tpi94ZpTu3~CqkJu2CqbmlnwjeiEeUzVqQUUgTZIB0HIJaeAcoUGpYkYgj5iApxpXhBq8jPPpW7Cmtm0saXQFrc0LKUy6XsnG8wxIZHPREhmyuW4LNknYuhHvNm8TprWaYRkGly99XqiTze8Z11IXY6mv4riXabS7ljTwOF1zxFW0ruK4EYsRp5fslGOdqTzDg4mtihhjaFPBli6UHwj4DU7WMKupfRMcViizjGCa929hiupZkrCgYl1mNTaiV4UeJVa06~6uVCLNAiSqhZeBapYwomqMSjuGQnDIkac7mNX4VsSA__" className="image" alt="crackers"/>
                            </div>
                            <div className="card-container-bottom">
                                <p>Raju Rassibomb</p>
                                <div className="popup-container">
                                    <Popup
                                        modal
                                        trigger={
                                        <button type="button" className="bottom-button">
                                            QUICK VIEW
                                        </button>
                                        }
                                    >
                                        {close => (
                                        <>
                                            <div className="inner-popup-container">
                                                <div>
                                                    <img src="https://s3-alpha-sig.figma.com/img/22f6/b7b5/b47561aa2ad560235e2702e286a6d4b7?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D1sbiDpivdUXcgrTSSc5RJI2iy3cl2mwuq097Tpi94ZpTu3~CqkJu2CqbmlnwjeiEeUzVqQUUgTZIB0HIJaeAcoUGpYkYgj5iApxpXhBq8jPPpW7Cmtm0saXQFrc0LKUy6XsnG8wxIZHPREhmyuW4LNknYuhHvNm8TprWaYRkGly99XqiTze8Z11IXY6mv4riXabS7ljTwOF1zxFW0ruK4EYsRp5fslGOdqTzDg4mtihhjaFPBli6UHwj4DU7WMKupfRMcViizjGCa929hiupZkrCgYl1mNTaiV4UeJVa06~6uVCLNAiSqhZeBapYwomqMSjuGQnDIkac7mNX4VsSA__" className="popup-image" alt="crackers"/>
                                                    <div className="image-container">
                                                        <img src="https://s3-alpha-sig.figma.com/img/22f6/b7b5/b47561aa2ad560235e2702e286a6d4b7?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D1sbiDpivdUXcgrTSSc5RJI2iy3cl2mwuq097Tpi94ZpTu3~CqkJu2CqbmlnwjeiEeUzVqQUUgTZIB0HIJaeAcoUGpYkYgj5iApxpXhBq8jPPpW7Cmtm0saXQFrc0LKUy6XsnG8wxIZHPREhmyuW4LNknYuhHvNm8TprWaYRkGly99XqiTze8Z11IXY6mv4riXabS7ljTwOF1zxFW0ruK4EYsRp5fslGOdqTzDg4mtihhjaFPBli6UHwj4DU7WMKupfRMcViizjGCa929hiupZkrCgYl1mNTaiV4UeJVa06~6uVCLNAiSqhZeBapYwomqMSjuGQnDIkac7mNX4VsSA__" className="popup-image-1" alt="crackers"/>
                                                        <img src="https://s3-alpha-sig.figma.com/img/22f6/b7b5/b47561aa2ad560235e2702e286a6d4b7?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D1sbiDpivdUXcgrTSSc5RJI2iy3cl2mwuq097Tpi94ZpTu3~CqkJu2CqbmlnwjeiEeUzVqQUUgTZIB0HIJaeAcoUGpYkYgj5iApxpXhBq8jPPpW7Cmtm0saXQFrc0LKUy6XsnG8wxIZHPREhmyuW4LNknYuhHvNm8TprWaYRkGly99XqiTze8Z11IXY6mv4riXabS7ljTwOF1zxFW0ruK4EYsRp5fslGOdqTzDg4mtihhjaFPBli6UHwj4DU7WMKupfRMcViizjGCa929hiupZkrCgYl1mNTaiV4UeJVa06~6uVCLNAiSqhZeBapYwomqMSjuGQnDIkac7mNX4VsSA__" className="popup-image-1" alt="crackers"/>
                                                        <img src="https://s3-alpha-sig.figma.com/img/22f6/b7b5/b47561aa2ad560235e2702e286a6d4b7?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D1sbiDpivdUXcgrTSSc5RJI2iy3cl2mwuq097Tpi94ZpTu3~CqkJu2CqbmlnwjeiEeUzVqQUUgTZIB0HIJaeAcoUGpYkYgj5iApxpXhBq8jPPpW7Cmtm0saXQFrc0LKUy6XsnG8wxIZHPREhmyuW4LNknYuhHvNm8TprWaYRkGly99XqiTze8Z11IXY6mv4riXabS7ljTwOF1zxFW0ruK4EYsRp5fslGOdqTzDg4mtihhjaFPBli6UHwj4DU7WMKupfRMcViizjGCa929hiupZkrCgYl1mNTaiV4UeJVa06~6uVCLNAiSqhZeBapYwomqMSjuGQnDIkac7mNX4VsSA__" className="popup-image-1" alt="crackers"/>
                                                        <img src="https://s3-alpha-sig.figma.com/img/22f6/b7b5/b47561aa2ad560235e2702e286a6d4b7?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D1sbiDpivdUXcgrTSSc5RJI2iy3cl2mwuq097Tpi94ZpTu3~CqkJu2CqbmlnwjeiEeUzVqQUUgTZIB0HIJaeAcoUGpYkYgj5iApxpXhBq8jPPpW7Cmtm0saXQFrc0LKUy6XsnG8wxIZHPREhmyuW4LNknYuhHvNm8TprWaYRkGly99XqiTze8Z11IXY6mv4riXabS7ljTwOF1zxFW0ruK4EYsRp5fslGOdqTzDg4mtihhjaFPBli6UHwj4DU7WMKupfRMcViizjGCa929hiupZkrCgYl1mNTaiV4UeJVa06~6uVCLNAiSqhZeBapYwomqMSjuGQnDIkac7mNX4VsSA__" className="popup-image-1" alt="crackers"/>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="close-button">
                                                        <h1>Raju Rassibomb</h1>
                                                        <button
                                                            type="button"
                                                            className="trigger-button"
                                                            onClick={() => close()}
                                                            >
                                                            <IoCloseOutline />
                                                        </button>
                                                    </div>
                                                    <p>MRP:</p>
                                                    <p>Raju's Dreams/-</p>
                                                    <hr/>
                                                    <h5>Product Description:</h5>
                                                    <p>This product packs an extra punch, thanks to the literal blood, sweat and trears of a young boy.</p>
                                                    <hr/>
                                                    <h5>Product Contents:</h5>
                                                        <ul>
                                                            <li>10 hand-hurting pieces of rassi bombs</li>
                                                            <li>Jilled with great pain</li>
                                                            <li>Raju's hopes</li>
                                                        </ul>
                                                    <hr/>
                                                    <h5>Shipping Time:</h5>
                                                    <p>Before Raju understands that his dreams do not matter.</p>
                                                    <button type="button">Choose Now</button>
                                                </div>
                                            </div>
                                            
                                        </>
                                        )}
                                    </Popup>
                                </div>
                            </div>
                        </div>
                        <div className="card-container-1">
                            <div>
                                <img src="https://s3-alpha-sig.figma.com/img/22f6/b7b5/b47561aa2ad560235e2702e286a6d4b7?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D1sbiDpivdUXcgrTSSc5RJI2iy3cl2mwuq097Tpi94ZpTu3~CqkJu2CqbmlnwjeiEeUzVqQUUgTZIB0HIJaeAcoUGpYkYgj5iApxpXhBq8jPPpW7Cmtm0saXQFrc0LKUy6XsnG8wxIZHPREhmyuW4LNknYuhHvNm8TprWaYRkGly99XqiTze8Z11IXY6mv4riXabS7ljTwOF1zxFW0ruK4EYsRp5fslGOdqTzDg4mtihhjaFPBli6UHwj4DU7WMKupfRMcViizjGCa929hiupZkrCgYl1mNTaiV4UeJVa06~6uVCLNAiSqhZeBapYwomqMSjuGQnDIkac7mNX4VsSA__" className="image" alt="crackers"/>
                            </div>
                            <div className="card-container-bottom">
                                <p>Ladiyon ki Rani Chani</p>
                                <div className="popup-container">
                                    <Popup
                                        modal
                                        trigger={
                                        <button type="button" className="bottom-button">
                                            QUICK VIEW
                                        </button>
                                        }
                                    >
                                        {close => (
                                        <>
                                            <div className="inner-popup-container">
                                                <div>
                                                    <img src="https://s3-alpha-sig.figma.com/img/22f6/b7b5/b47561aa2ad560235e2702e286a6d4b7?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D1sbiDpivdUXcgrTSSc5RJI2iy3cl2mwuq097Tpi94ZpTu3~CqkJu2CqbmlnwjeiEeUzVqQUUgTZIB0HIJaeAcoUGpYkYgj5iApxpXhBq8jPPpW7Cmtm0saXQFrc0LKUy6XsnG8wxIZHPREhmyuW4LNknYuhHvNm8TprWaYRkGly99XqiTze8Z11IXY6mv4riXabS7ljTwOF1zxFW0ruK4EYsRp5fslGOdqTzDg4mtihhjaFPBli6UHwj4DU7WMKupfRMcViizjGCa929hiupZkrCgYl1mNTaiV4UeJVa06~6uVCLNAiSqhZeBapYwomqMSjuGQnDIkac7mNX4VsSA__" className="popup-image" alt="crackers"/>
                                                    <div className="image-container">
                                                        <img src="https://s3-alpha-sig.figma.com/img/22f6/b7b5/b47561aa2ad560235e2702e286a6d4b7?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D1sbiDpivdUXcgrTSSc5RJI2iy3cl2mwuq097Tpi94ZpTu3~CqkJu2CqbmlnwjeiEeUzVqQUUgTZIB0HIJaeAcoUGpYkYgj5iApxpXhBq8jPPpW7Cmtm0saXQFrc0LKUy6XsnG8wxIZHPREhmyuW4LNknYuhHvNm8TprWaYRkGly99XqiTze8Z11IXY6mv4riXabS7ljTwOF1zxFW0ruK4EYsRp5fslGOdqTzDg4mtihhjaFPBli6UHwj4DU7WMKupfRMcViizjGCa929hiupZkrCgYl1mNTaiV4UeJVa06~6uVCLNAiSqhZeBapYwomqMSjuGQnDIkac7mNX4VsSA__" className="popup-image-1" alt="crackers"/>
                                                        <img src="https://s3-alpha-sig.figma.com/img/22f6/b7b5/b47561aa2ad560235e2702e286a6d4b7?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D1sbiDpivdUXcgrTSSc5RJI2iy3cl2mwuq097Tpi94ZpTu3~CqkJu2CqbmlnwjeiEeUzVqQUUgTZIB0HIJaeAcoUGpYkYgj5iApxpXhBq8jPPpW7Cmtm0saXQFrc0LKUy6XsnG8wxIZHPREhmyuW4LNknYuhHvNm8TprWaYRkGly99XqiTze8Z11IXY6mv4riXabS7ljTwOF1zxFW0ruK4EYsRp5fslGOdqTzDg4mtihhjaFPBli6UHwj4DU7WMKupfRMcViizjGCa929hiupZkrCgYl1mNTaiV4UeJVa06~6uVCLNAiSqhZeBapYwomqMSjuGQnDIkac7mNX4VsSA__" className="popup-image-1" alt="crackers"/>
                                                        <img src="https://s3-alpha-sig.figma.com/img/22f6/b7b5/b47561aa2ad560235e2702e286a6d4b7?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D1sbiDpivdUXcgrTSSc5RJI2iy3cl2mwuq097Tpi94ZpTu3~CqkJu2CqbmlnwjeiEeUzVqQUUgTZIB0HIJaeAcoUGpYkYgj5iApxpXhBq8jPPpW7Cmtm0saXQFrc0LKUy6XsnG8wxIZHPREhmyuW4LNknYuhHvNm8TprWaYRkGly99XqiTze8Z11IXY6mv4riXabS7ljTwOF1zxFW0ruK4EYsRp5fslGOdqTzDg4mtihhjaFPBli6UHwj4DU7WMKupfRMcViizjGCa929hiupZkrCgYl1mNTaiV4UeJVa06~6uVCLNAiSqhZeBapYwomqMSjuGQnDIkac7mNX4VsSA__" className="popup-image-1" alt="crackers"/>
                                                        <img src="https://s3-alpha-sig.figma.com/img/22f6/b7b5/b47561aa2ad560235e2702e286a6d4b7?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D1sbiDpivdUXcgrTSSc5RJI2iy3cl2mwuq097Tpi94ZpTu3~CqkJu2CqbmlnwjeiEeUzVqQUUgTZIB0HIJaeAcoUGpYkYgj5iApxpXhBq8jPPpW7Cmtm0saXQFrc0LKUy6XsnG8wxIZHPREhmyuW4LNknYuhHvNm8TprWaYRkGly99XqiTze8Z11IXY6mv4riXabS7ljTwOF1zxFW0ruK4EYsRp5fslGOdqTzDg4mtihhjaFPBli6UHwj4DU7WMKupfRMcViizjGCa929hiupZkrCgYl1mNTaiV4UeJVa06~6uVCLNAiSqhZeBapYwomqMSjuGQnDIkac7mNX4VsSA__" className="popup-image-1" alt="crackers"/>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="close-button">
                                                        <h1>Ladiyon ki Rani Chani</h1>
                                                        <button
                                                            type="button"
                                                            className="trigger-button"
                                                            onClick={() => close()}
                                                            >
                                                            <IoCloseOutline />
                                                        </button>
                                                    </div>
                                                    <p>MRP:</p>
                                                    <p>Raju's Dreams/-</p>
                                                    <hr/>
                                                    <h5>Product Description:</h5>
                                                    <p>This product packs an extra punch, thanks to the literal blood, sweat and trears of a young boy.</p>
                                                    <hr/>
                                                    <h5>Product Contents:</h5>
                                                        <ul>
                                                            <li>10 hand-hurting pieces of rassi bombs</li>
                                                            <li>Jilled with great pain</li>
                                                            <li>Raju's hopes</li>
                                                        </ul>
                                                    <hr/>
                                                    <h5>Shipping Time:</h5>
                                                    <p>Before Raju understands that his dreams do not matter.</p>
                                                    <button type="button">Choose Now</button>
                                                </div>
                                            </div>
                                            
                                        </>
                                        )}
                                    </Popup>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="followus-section">
                    <p className="follow">Follow us on</p>
                    <div>
                        <FaInstagramSquare />
                        <FaYoutubeSquare />
                        <FaTwitterSquare />
                        <FaFacebookSquare />
                        <FaLinkedin />
                    </div>
                </div>
            </div>
        )
    }
}
export default Home