import { useEffect, useState } from "react"
import moment from "moment"
import orang from '../assets/2orang.png'
import Group5899 from '../assets/Group5899.png'
import Group28 from '../assets/Group28.png'
import Group5885 from '../assets/Group5885.png'
import Group58852 from '../assets/Group58852.png'
import Group5877 from '../assets/Group5877.png' 
import Group5878 from '../assets/Group5878.png' 
import Group5892 from '../assets/Group5892.png'
import Group5911 from '../assets/Group5911.png'
import Icon01 from '../assets/Icon-01.png'
import Icon02 from '../assets/Icon-02.png'
import Icon03 from '../assets/Icon-03.png'
import Icon04 from '../assets/Icon-04.png'
import Icon05 from '../assets/Icon-05.png'
import Icon06 from '../assets/Icon-06.png'
import { Link, useNavigate } from "react-router-dom"
import http from "../helpers/http.helper"
import { useDispatch, useSelector } from "react-redux"
import { logout as logoutAction, setWarningMessage } from "../redux/reducers/auth"
import { Formik } from "formik"
import NavbarLogout from '../components/NavbarLogout'
import Footer from "../components/Footer"
import {BiSearch} from 'react-icons/bi'

const Home = ()=> {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [setProfile] = useState({})
    const token = useSelector(state => state.auth.token)
    const [events, setEvents] = useState([])
    const [cities, setCities] = useState([])
    const [category, setCategory] = useState([])
    const [selectedCategory, setSelectedCategory] = useState([])
    const [partners, setPartners] = useState([])
    
    async function getEventsCategory(name){
        const {data} = await http(token).get('/events', {params: {category: name}})
        setSelectedCategory(data.results)
    }
    useEffect(()=> {
        async function getProfileData(){
            const fallback = (message)=> {
                dispatch(logoutAction())
                dispatch(setWarningMessage(message))
                navigate('/login')
            }
            const {data} = await http(token, fallback).get('/profile')
            setProfile(data.results)
        }
        async function getEvents(){
            const {data} = await http(token).get('/events')
            setEvents(data.results)
        }
        async function getCities(){
            const {data} = await http(token).get('/city', {params:{limit: 1000}})
            setCities(data.results)
        }
        async function getCategory(){
            const {data} = await http(token).get('/categories', {params:{limit: 1000}})
            setCategory(data.results)
        }
        async function getPartners(){
            const {data} = await http().get('http://localhost:8888/partners')
            setPartners(data.results)
        }
        if(token){
            getProfileData()
        }
        getEvents()
        getCities()
        getCategory()
        getPartners()
        getEventsCategory()
    }, [dispatch, navigate, setProfile, token])
    
    const onSearch = (values)=> {
        const qs = new URLSearchParams(values).toString()
        navigate(`/search?${qs}`)
    }

    useEffect(() => {
        console.log(cities)
    }, [cities]);
    
    return (
        <>
        <NavbarLogout />
        <div>
            <div className="bg-[#FF8551] flex justify-between px-12 items-center h-[70vh]">
                <div className="max-w-[550px] flex flex-col gap-6">
                    <div className="text-7xl text-white font-bold">Find events you love with our</div>
                    <div className="flex relative items-center">
                        <input name='email' type="text" placeholder='Email' className='input input-bordered w-full' />
                        <BiSearch size={40} className="absolute right-4 text-slate-400"/>
                    </div>
                </div>
                <div>
                    <img src={orang} className="w-[450px] h-[380px] max-lg:hidden"/>
                </div>
            </div>
            <div className="my-12 mx-12">
                <div className="mb-12">
                    <img src={Group5899} className="w-[180px] h-[90px]"/>
                </div>
                <div className="flex justify-between">
                    <div className="flex gap-4 items-center">
                        <button>
                            <img src={Group5877} className="w-16 h-16"/>
                        </button>
                        <div className="w-[500px] flex justify-between items-center h-full">
                            <div className="flex flex-col items-center">
                                <div>13</div>
                                <div>Mon</div>
                            </div>
                            <div className="flex flex-col items-center">
                                <div>14</div>
                                <div>Tue</div>
                            </div>
                            <div className="flex flex-col items-center text-[#FF8900] border-2 border-[#FF8900] py-4 px-2 rounded-xl">
                                <div>15</div>
                                <div>Wed</div>
                                <div className="w-2 h-2 rounded-full bg-[#FF8900] mt-4"></div>
                            </div>
                            <div className="flex flex-col items-center">
                                <div>16</div>
                                <div>Thu</div>
                            </div>
                            <div className="flex flex-col items-center">
                                <div>17</div>
                                <div>Fri</div>
                            </div>
                        </div>
                        <button>
                            <img src={Group5878} className="w-16 h-16"/>
                        </button>
                    </div>
                    <img src={Group5892} className="h-[45px]"/>
                </div>
                <div className="mt-16 mb-6 flex justify-center gap-6 w-full flex-wrap">
                    {events.map(event => {
                        return (
                        <div key={event.id} className="relative">
                            <img src={event.picture} className="w-[260px] h-[300px] rounded-2xl object-cover"/>
                            <div className="mx-4 absolute top-36 text-white max-lg:top-24">
                                <div className="font-semibold">{moment(event.date).format('DD-MM-YYYY')}</div>
                                <div className="font-bold text-xl my-4">{event.title}</div>
                                <img src={Group28} />
                            </div>
                        </div>
                        )
                    })}
                </div>
                <div className="flex justify-center">
                    <button className="w-32 h-12 bg-[#FF8551] rounded-xl">
                        <div className="text-white font-bold">See All</div>
                    </button>
                </div>
            </div>
            <div className="bg-[#FF8551] w-[90%] mx-[5%] rounded-xl flex gap-16 max-lg:flex-col">
                <div className="pt-12 pl-12 lg:max-w-[300px] max-lg:max-w-[700px] flex flex-col gap-4">
                    <img src={Group5885} className="w-[200px]"/>
                    <div className="text-6xl text-white">Discover Events Near You</div>
                </div>
                <div className="flex flex-wrap gap-6 justify-center my-6">
                    {cities.map(city=>
                    <div key={city.id} className="flex flex-col items-center">
                        <img src={city.picture} className="w-[240px] h-[120px] rounded-md"/>
                        <div className="text-white font-semibold">{city.name}</div>
                    </div>
                        )}
                </div>
            </div>
            <div className="my-24">
                <div className="mb-8 flex flex-col items-center gap-4">
                    <img src={Group5911} className="w-[160px] v-[30px]"/>
                    <div className="text-3xl font-bold">Browse Events By Category</div>
                </div>
                <div className="flex justify-between max-sm:justify-center mx-28 mb-8 max-md:mx-6 max-sm:flex-wrap max-sm:gap-12">
                    {category.map(category => 
                        <div key={category.id} className="font-bold">{category.name}</div>
                    )}
                </div>
                <div className="flex justify-center gap-12 max-xl:flex-wrap">
                    {events.slice(0, 3).map(events=> 
                    <div key={events.id} className="relative max-xl:mb-4">
                        <img src={events.picture} className="w-[400px] h-[300px] rounded-xl"/>
                        <div className="bg-blue-500 w-full h-[50%] absolute top-[200px] rounded-b-xl">
                            <div className="ml-6 absolute top-[-15px] text-white">
                                <img src={Group28} className="object-cover"/>
                                <div className="text-xl font-semibold my-2">{moment(events.date).format('DD-MM-YYYY')}</div>
                                <div className="text-xl font-semibold">{events.title}</div>
                            </div>
                        </div>
                    </div>
                        )}
                </div>
            </div>
            <div className="bg-black w-[90%] h-[500px] mx-[5%] rounded-xl">
                <div className="flex flex-col gap-6 items-center pt-12">
                    <img src={Group58852} />
                    <div className="text-2xl font-bold text-white">Our Trusted Partners</div>
                    <div className="text-white">By companies like :</div>
                </div>
                <div className="flex justify-center">
                    <div className="flex mt-[50px] mx-12 justify-between w-[1000px] gap-6 flex-wrap">
                        <img src={Icon01} />
                        <img src={Icon02} />
                        <img src={Icon03} />
                        <img src={Icon04} />
                        <img src={Icon05} />
                        <img src={Icon06} />
                    </div>
                </div>
            </div>
        </div>
<Footer />
        </>
    )
}

export default Home