import React from "react";
import { SecondsCounter } from "./SecondsCounter";
import { IconTimer } from "./IconTimer"

const Home = ({ digitos }) => {
    return (
        <div className="Home d-flex justify-content-center align-items-center bg-dark text-white fs-1 min-vh-100">
            <IconTimer />
            <SecondsCounter valor={digitos[0]} />
            <SecondsCounter valor={digitos[1]} />
            <SecondsCounter valor={digitos[2]} />
            <SecondsCounter valor={digitos[3]} />
            <SecondsCounter valor={digitos[4]} />
            <SecondsCounter valor={digitos[5]} />
        </div>
    );
};

export default Home;

