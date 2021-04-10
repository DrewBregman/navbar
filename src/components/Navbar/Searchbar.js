import JSONDATA from './MOCK_DATA.json';
import "./Navbar.css";
import {useState} from 'react'

const Searchbar = () => {
    const [searchTerm, setSearchTerm] = useState('')
    return (
        <div className="Search">
            <input type="text" placeholder="Search..." onChange={event => {setSearchTerm(event.target.value)}}/>
            {JSONDATA.filter(val => val.first_name.toLowerCase().includes(searchTerm.toLowerCase())).forEach((val, key) => {
                return (
                    <div className="user" key={key}>
                        <p>{val.first_name}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default Searchbar