import Avatar from '../assets/Avatar.png'
import coklat from '../assets/coklat.png'
import blue from '../assets/blue.png'
import calender from '../assets/calender.png'
import Vector from '../assets/Vector.png'
import Vector1 from '../assets/Vector (1).png'
import Vector4 from '../assets/Vector (4).png'
import Vector6 from '../assets/Vector (6).png'
import Vector7 from '../assets/Vector (7).png'
import { Link } from "react-router-dom"
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import http from '../helpers/http.helper'
import Logout from '../components/Logout'
import Navbar from '../components/Navbar'
import Footer from "../components/Footer"

const MyBooking = ()=> {
    const [histories, setHistories] = useState([])
    const token = useSelector(state => state.auth.token)
    useEffect(()=> {
        const getHistoryData = async() => {
            const {data} = await http(token).get('/history')
            setHistories(data.results)
        }
        getHistoryData()
    }, [token])
    return (
        <>
        <Navbar />
    <main className="w-full flex max-sm:ml-[0]">
        <section className="w-[25%] min-h-[825px] mt-12 max-md:hidden">
            <div className="flex justify-center">
                <img className="rounded-full border-2 border-blue-500 p-1" src={Avatar} />
                <div className="grid ml-4">
                    <h1 className="text-md tracking-wider font-medium">Jhon Tomson</h1>
                    <p className="text-slate-400 text-sm tracking-wider">Entrepreneur, ID</p>
                </div>
            </div>
            <div className="w-[80%] h-[440px] mt-8 grid ml-[20%] content-between">
                <div className="flex items-center font-semibold">
                    <img src={Vector} className="w-[21px] h-[21px]" />
                    <h3 className="ml-6">Profile</h3>
                </div>
                <div className="flex items-center font-semibold ml-12">
                    <img src={Vector1} className="w-[20px] h-[16px]" />
                    <h3 className="ml-6">Card</h3>
                    <div className="relative left-[-85px] w-24 h-[1px] bg-black"></div>
                </div>
                <Link to='/profile' className="flex items-center font-semibold ml-12">
                    <img src={coklat} className="w-[18.75px] h-[18.75px]" />
                    <h3 className="ml-6">Edit Profile</h3>
                </Link>
                <Link to='/change-password' className="flex items-center font-semibold ml-12">
                    <img src={Vector4} className="w-[16px] h-[20px]" />
                    <h3 className="ml-6">Change Password</h3>
                </Link>
                <Link to='/my-booking' className="flex items-center font-semibold">
                    <img src={blue} className="w-[20px] h-[20px]" />
                    <h3 className="ml-6 text-blue-500">My Booking</h3>
                </Link>
                <Link to='/my-wishlist' className="flex items-center font-semibold">
                    <img src={Vector6} className="w-[20px] h-[18px]" />
                    <h3 className="ml-6">My Wishlist</h3>
                </Link>
                <div className="flex items-center font-semibold">
                    <img src={Vector7} className="w-[18.5px] h-[19px]" />
                    <h3 className="ml-6">Settings</h3>
                </div>
                <Logout />
            </div>
        </section>
        <section className="w-[70%] bg-white min-h-[100vh] max-md:min-h-[50vh] mt-12 rounded-xl max-md:w-full">
            <div className="w-[90%] h-[80px] flex justify-between items-center mx-6">
                <h1 className="text-2xl font-semibold">My Booking</h1>
                <div className="flex items-center bg-blue-100 px-4 py-2 rounded-md">
                    <img src={calender} className="w-[24px] h-[24px]" />
                    <p className="ml-2 text-xs text-blue-400 font-medium">March</p>
                </div>
            </div>
            <div className="w-[80%] grid content-between h-[80%] mt-10 ml-16 max-sm:ml-4">
                {histories.map(history => (
                <div key={`history-list-${history.id}`} className="flex">
                    <div className="grid content-start justify-items-center mr-8">
                        <p className="text-orange-500 font-medium">15</p>
                        <p className="text-slate-400">Wed</p>
                    </div>
                    <div className="grid content-start">
                        <h1 className="font-bold text-2xl">{history.title}</h1>
                        <div className="mt-4">
                            <p className="text-slate-400 mb-1">{history.location}</p>
                            <p className="text-slate-400 mb-1">{history.date}</p>
                            <p className="text-blue-500">Detail</p>
                        </div>
                    </div>
                </div>
                ))}
                <div className="flex">
                    <div className="grid content-start justify-items-center mr-8">
                        <p className="text-orange-500 font-medium">15</p>
                        <p className="text-slate-400">Wed</p>
                    </div>
                    <div className="grid content-start">
                        <h1 className="font-bold text-2xl">Sights & Sounds Exhibition</h1>
                        <div className="mt-4">
                            <p className="text-slate-400 mb-1">Jakarta, Indonesia</p>
                            <p className="text-slate-400 mb-1">Wed, 15 Nov, 4:00 PM</p>
                            <p className="text-blue-500">Detail</p>
                        </div>
                    </div>
                </div>
                <div className="flex max-md:hidden">
                    <div className="grid content-start justify-items-center mr-8">
                        <p className="text-orange-500 font-medium">15</p>
                        <p className="text-slate-400">Wed</p>
                    </div>
                    <div className="grid content-start">
                        <h1 className="font-bold text-2xl">Sights & Sounds Exhibition</h1>
                        <div className="mt-4">
                            <p className="text-slate-400 mb-1">Jakarta, Indonesia</p>
                            <p className="text-slate-400 mb-1">Wed, 15 Nov, 4:00 PM</p>
                            <p className="text-blue-500">Detail</p>
                        </div>
                    </div>
                </div>
                <div className="flex max-md:hidden">
                    <div className="grid content-start justify-items-center mr-8">
                        <p className="text-orange-500 font-medium">15</p>
                        <p className="text-slate-400">Wed</p>
                    </div>
                    <div className="grid content-start">
                        <h1 className="font-bold text-2xl">Sights & Sounds Exhibition</h1>
                        <div className="mt-4">
                            <p className="text-slate-400 mb-1">Jakarta, Indonesia</p>
                            <p className="text-slate-400 mb-1">Wed, 15 Nov, 4:00 PM</p>
                            <p className="text-blue-500">Detail</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <Footer />
    </>
    )
}

export default MyBooking