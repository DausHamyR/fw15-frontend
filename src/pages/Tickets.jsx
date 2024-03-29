import stadion from '../assets/stadion.png'
import sort from '../assets/sort.png'
import tiketBlue from '../assets/tiket-blue.png'
import tiketRed from '../assets/tiket-merah.png'
import tiketYelow from '../assets/tiket-yelow.png'
import { useNavigate, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import http from '../helpers/http.helper'
import {FiPlus, FiMinus} from 'react-icons/fi'
import { logout as logoutAction, setWarningMessage } from "../redux/reducers/auth"
import NavbarLogout from '../components/NavbarLogout'
import Footer from "../components/Footer"

const Tickets = ()=> {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [setProfile] = useState({})
    const [ setEvents] = useState({})
    const token = useSelector(state => state.auth.token)
    const {id:eventId} = useParams()
    const [sections, setSections] = useState([])
    const [filledSection, setFilledSection] = useState({
        id: 0,
        quantity: 0
    })

    const increment = (id) => {
        setFilledSection({
            id,
            quantity: filledSection.quantity + 1
        })
    }

    const decrement = (id) => {
        setFilledSection({
            id,
            quantity: filledSection.quantity - 1
        })
    }

    useEffect(()=> {
        const getSections = async() => {
            const {data} = await http(token).get('/sections')
            setSections(data.results)
        }
        getSections()
    }, [token])

    const doReservation = async ()=> {
        const form = new URLSearchParams({
            eventId,
            sectionId: filledSection.id,
            quantity: filledSection.quantity
        }).toString()
        console.log(form)
        const {data} = await http(token).post('/reservations', form)
        console.log(data)
        navigate('/payment', {state: {
            eventId,
            // eventName: data.results.events.title,
            reservationId: data.results.reservationId,
            sectionName: data.results.ticketSection,
            quantity: data.results.quantity,
            totalPayment: data.results.totalPayment
        },
        replace: true
    })
    }
    
    const selectedSection = filledSection && sections.filter(item => item.id === filledSection.id)[0]

    // useEffect(() => {
    //     console.log(filledSection)
    //     console.log(sections[2], 'sections')
    // }, [filledSection, sections]);

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
        if(token){
            getProfileData()
        }
    }, [dispatch, navigate, token, setProfile])
    
    useEffect(()=> {
        async function getEventsData(){
            const {data} = await http(token).get('/events')
            setEvents(data.results)
        }
        if(token){
            getEventsData()
        }
    }, [dispatch, navigate, token, setEvents])

    return (
    <>
        <NavbarLogout />
        <main className="flex max-md:grid w-[90%] max-md:w-full ml-[5%] max-md:ml-0 bg-white mt-10 rounded-3xl">
            <div className='flex flex-col max-md:items-center max-md:max-w-[768px]'>
                <img src={stadion} className='w-[500px]'/>
            </div>
            <div className="w-1/2 max-md:ml-8 max-md:w-[90%] mt-10">
                <div className="grid">
                    <div className="mb-10">
                        <div className="flex justify-between mb-12">
                            <div>
                                <h1 className="font-bold text-xl">Tickets</h1>
                            </div>
                            <div className="flex">
                                <h1 className="w-16 mr-4">By Price</h1>
                                <img src={sort} />
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div className="flex items-center">
                                <div className="p-2 bg-blue-100 rounded-md">
                                    <img src={tiketBlue} />
                                </div>
                                <div className="ml-3">
                                    <h1>{sections[0]?.name}</h1>
                                    <h1 className="text-slate-400 text-sm">12 Seats available</h1>
                                </div>
                            </div>
                            <div className="text-center">
                                <h1>${sections[0]?.price}</h1>
                                <h1 className="text-slate-400">per person</h1>
                            </div>
                        </div>
                        <div className="flex justify-between mt-4">
                            <h1 className="font-semibold">Quantity</h1>
                            <div className='flex items-center gap-4'>
                                <button className='btn btn-error' onClick={()=> decrement(sections[0].id)}>
                                    <FiMinus color='white'/>
                                </button>
                                <div className='text-xl'>{sections[0]?.id === filledSection.id ? filledSection.quantity: 0}</div>
                                <button className='btn btn-success' onClick={()=> increment(sections[0].id)}>
                                    <FiPlus color='white'/>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="mb-10">
                        <div className="flex justify-between">
                            <div className="flex items-center">
                                <div className="p-2 bg-red-100 rounded-md">
                                    <img src={tiketRed} />
                                </div>
                                <div className="ml-3">
                                    <h1>{sections[1]?.name}</h1>
                                    <h1 className="text-slate-400 text-sm">9 Seats available</h1>
                                </div>
                            </div>
                            <div className="text-center">
                                <h1>${sections[1]?.price}</h1>
                                <h1 className="text-slate-400">per person</h1>
                            </div>
                        </div>
                        <div className="flex justify-between mt-4">
                            <h1 className="font-semibold">Quantity</h1>
                            <div className='flex items-center gap-4'>
                                <button className='btn btn-error' onClick={()=> decrement(sections[1].id)}>
                                    <FiMinus color='white'/>
                                </button>
                                <div className='text-xl'>{sections[1]?.id === filledSection.id ? filledSection.quantity: 0}</div>
                                <button className='btn btn-success' onClick={()=> increment(sections[1].id)}>
                                    <FiPlus color='white'/>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="mb-10">
                        <div className="flex justify-between">
                            <div className="flex items-center">
                                <div className="p-2 bg-orange-100 rounded-md">
                                    <img src={tiketYelow} />
                                </div>
                                <div className="ml-3">
                                    <h1>{sections[2]?.name}</h1>
                                    <h1 className="text-slate-400 text-sm">6 Seats available</h1>
                                </div>
                            </div>
                            <div className="text-center">
                                <h1>${sections[2]?.price}</h1>
                                <h1 className="text-slate-400">per person</h1>
                            </div>
                        </div>
                        <div className="flex justify-between mt-4">
                            <h1 className="font-semibold">Quantity</h1>
                            <div className='flex items-center gap-4'>
                                <button className='btn btn-error' onClick={()=> decrement(sections[2].id)}>
                                    <FiMinus color='white'/>
                                </button>
                                <div className='text-xl'>{sections[2]?.id === filledSection.id ? filledSection.quantity: 0}</div>
                                <button className='btn btn-success' onClick={()=> increment(sections[2].id)}>
                                    <FiPlus color='white'/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="grid content-between h-[100px] font-semibold">
                        <h1>Ticket Section</h1>
                        <h1>Quantity</h1>
                        <h1>Total Payment</h1>
                    </div>
                    <div className="grid content-between h-[100px] text-blue-500 font-semibold">
                        <h1>{selectedSection?.name || "-"}</h1>
                        <h1>{filledSection.quantity || "0"}</h1>
                        <h1>${(selectedSection?.price * filledSection?.quantity) || "0"}</h1>
                    </div>
                </div>
                <div className="flex justify-center items-center text-white w-[70%] max-md:w-full h-[45px] mt-10 rounded-xl mb-16">
                    <button onClick={doReservation} className="btn btn-primary w-full font-semibold">Checkout</button>
                </div>
            </div>
        </main>
        <Footer />
    </>
    )
}

export default Tickets