import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import Register from "./pages/Register";
import Event from "./pages/Event";
import Tickets from "./pages/Tickets";
import Payment from "./pages/Payment";
import ChangePassword from "./pages/ChangePassword";
import MyBooking from "./pages/MyBooking";
import MyWishlist from "./pages/MyWishlist";
import CreateEvent from "./pages/CreateEvent";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import PrivateRoute from "./components/PrivateRoute";
import {PersistGate} from 'redux-persist/integration/react'
import SearchResults from "./pages/SearchResults";
import CodeForgotPassword from "./pages/CodeForgotPassword";
import Tes from "./pages/Tes";

const App = ()=> {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/forgot-password" element={<ForgotPassword />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/events/:id" element={<Event />} />
                        <Route path="/tickets/:id" element={<PrivateRoute><Tickets /></PrivateRoute>} />
                        <Route path="/payment" element={<PrivateRoute><Payment /></PrivateRoute>} />
                        <Route path="/change-password" element={<ChangePassword />} />
                        <Route path="/my-booking" element={<PrivateRoute><MyBooking /></PrivateRoute>} />
                        <Route path="/my-wishlist" element={<PrivateRoute><MyWishlist /></PrivateRoute>} />
                        <Route path="/create-event" element={<PrivateRoute><CreateEvent /></PrivateRoute>} />
                        <Route path="/search" element={<SearchResults />} />
                        <Route path="/code-forgot-password" element={<CodeForgotPassword />} />
                        <Route path="/tes" element={<Tes />} />
                    </Routes>
                </BrowserRouter>
            </PersistGate>
        </Provider>
    )
}

export default App