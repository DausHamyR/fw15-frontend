import loveWishlist from '../assets/love-wishlist.png'
import Fill from '../assets/Fill 1.png'
import Wetick from '../assets/Wetick.png'
import Bitmap from '../assets/Bitmap (1).png'
import mappin from '../assets/map-pin.png'
import clock from '../assets/clock.png'
import org1 from '../assets/org1.png'
import org2 from '../assets/org2.png'
import org3 from '../assets/org3.png'
import org4 from '../assets/org4.png'
import peta from '../assets/peta.png'
import fb from '../assets/fb.png'
import wa from '../assets/wa.png'
import ig from '../assets/ig.png'
import twitter from '../assets/twitter.png'
import Avatar from '../assets/Avatar.png'
import menuHamburger from '../assets/menu-hamburger.png'
import { Link } from "react-router-dom"

const Event = ()=> {
    return (
        <>
        <header className="w-full flex justify-between items-center bg-white px-6">
        <div className="flex items-center">
            <img src={Fill} />
            <img src={Wetick} className="w-[89px] h-[36px]" />
        </div>
        <div className="max-md:hidden">
            <nav className="text-black">
                <Link className="mr-8" to="/home">Home</Link>
                <Link className="mr-8" to="/create-event">Create Event</Link>
                <Link className="" to="/event">Location</Link>
            </nav>
        </div>
        <div className="flex items-center max-md:hidden">
            <img className="rounded-full border-2 border-blue-500 p-1" src={Avatar} />
            <h1 className="text-black ml-4">Jhon Tomson</h1>
        </div>
        <div className="md:hidden">
            <img src={menuHamburger} />
        </div>
    </header>
        <main className="flex max-md:grid w-[80%] max-md:w-full ml-[10%] max-md:ml-0 bg-white mt-10 rounded-3xl">
        <div className="ml-[5%] mt-20">
            <img className="rounded-2xl brightness-75" src={Bitmap} />
            <div className="flex justify-center items-center h-[70px] max-md:justify-start">
                <img src={loveWishlist} />
                <h1 className="ml-4 font-semibold">Add to Wishlist</h1>
            </div>
        </div>
        <div className="ml-[100px] max-sm:ml-0 w-[50%] max-sm:w-full mt-14">
            <div>
                <h1 className="w-[200px] font-bold text-2xl">Sights & Sounds Exhibition</h1>
            </div>
            <div className="flex justify-between mt-12">
                <div className="flex items-center">
                    <img src={mappin} />
                    <h1 className="ml-2">Jakarta, Indonesia</h1>
                </div>
                <div className="flex items-center">
                    <img src={clock} />
                    <h1 className="ml-3">Wed, 15 Nov, 4:00 PM</h1>
                </div>
            </div>
            <div className="mt-8">
                <h1 className="mb-2">Attendees</h1>
                <div className="flex">
                    <img src={org1} />
                    <img src={org2} />
                    <img src={org3} />
                    <img src={org4} />
                </div>
            </div>
            <div className="mt-10">
                <h1 className="font-bold text-2xl">Event Detail</h1>
                <p className="text-slate-400 text-sm mt-3">After his controversial art exhibition Tear and Consume back in November 2018, in which guests were invited to tear up…</p>
                <p className="text-blue-500 font-semibold mt-3">Read More</p>
            </div>
            <div className="mt-[30px]">
                <h1 className="font-bold text-xl mb-4">LOCATION</h1>
                <img src={peta} />
            </div>
            <div className="flex justify-center items-center text-white bg-blue-500 w-[50%] max-md:w-full h-[45px] mt-10 rounded-xl mb-16">
                <a href="payment.html" className="font-semibold tracking-wider">Buy Tickets</a>
            </div>
        </div>
    </main>
    <footer className="w-full flex justify-center h-[400px] max-md:grid max-sm:ml-8">
        <section className="w-[400px] mt-10 max-md:h-[150px]">
            <div className="flex items-center">
                <img src={Fill} />
                <img src={Wetick} className="w-[90px] h-[35px]" />
            </div>
            <h3 className="font-medium mt-4">Find events you love with our</h3>
            <div className="flex w-[120px] h-[150px] justify-between mt-3">
                <img src={fb} className="w-[18px] h-[18px]" />
                <img src={wa} className="w-[18px] h-[18px]" />
                <img src={ig} className="w-[18px] h-[18px]" />
                <img src={twitter} className="w-[18px] h-[18px]" />
            </div>
            <h2 className="text-slate-600 max-md:hidden">© 2020 Wetick All Rights Reserved</h2>
        </section>
        <div className="w-[200px] mt-14">
            <h1 className="font-bold mb-6">Wetick</h1>
            <div className="grid content-between h-[150px] text-slate-400">
                <h4>About Us</h4>
                <h4>Features</h4>
                <h4>Blog</h4>
                <h4>Payment</h4>
                <h4>Mobile App</h4>
            </div>
        </div>
        <div className="w-[200px] mt-14">
            <h1 className="font-bold mb-6">Features</h1>
            <div className="grid content-between h-[150px] text-slate-400">
                <h4>Booking</h4>
                <h4>Creater Event</h4>
                <h4>Discover</h4>
                <h4>Register</h4>
            </div>
        </div>
        <div className="w-[200px] mt-14">
            <h1 className="font-bold mb-6">Company</h1>
            <div className="grid content-between h-[150px] text-slate-400">
                <h4>Partnership</h4>
                <h4>Help</h4>
                <h4>Terms of Service</h4>
                <h4>Privacy Policy</h4>
                <h4>Sitemap</h4>
            </div>
        </div>
        <h2 className="text-slate-600 my-8 md:hidden">© 2020 Wetick All Rights Reserved</h2>
    </footer></>
    )
}

export default Event