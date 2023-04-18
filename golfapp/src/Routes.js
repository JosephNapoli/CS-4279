import {Navigate, Route, Routes} from "react-router-dom";
import Home from "./Home";
import Scoring from "./Scoring";
import Profile from "./Profile";
import Scheduling from "./Scheduling";
import CreateGame from "./CreateGame";
import AllGames from "./AllGames";

export default function PathRoutes( { currUser }) {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path ="/home" element={<Home user={currUser}/>} />
            <Route path="/allscores" element={<AllGames/>} />
            <Route path="/score/:id" element={<Scoring/>} />
            <Route path="/profile/:id" element={<Profile user={currUser}/>} />
            <Route path="/scheduling" element={<Scheduling/>} />
            <Route path="/new" element={<CreateGame user={currUser} />} />
        </Routes>
    );
}