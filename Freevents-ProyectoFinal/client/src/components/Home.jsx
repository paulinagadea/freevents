import { Link } from "react-router-dom";
import React from "react";

const Home = () => {
    return (
        <div>
            <button>INGRESA</button>
            <button>CREA TU CUENTA</button>
            <h1>Freevents</h1>
            <div>
                <select>
                    <option selected disabled>
                        Orden Alfabetico
                    </option>
                    <option value="A-Z">A-Z</option>
                    <option value="Z-A">Z-A</option>
                </select>
                <select>
                    <option selected disabled>
                        Rating
                    </option>
                    <option value="0-5">0-5</option>
                    <option value="5-0">5-0</option>
                </select>
            </div>
            <div>

            </div>
        </div>
    )
}
export default Home;