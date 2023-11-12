import axios from "axios";
import { useEffect, useState } from "react";
import User from "../Components/User";

const Services = () => {

    const [users, setUsers] = useState([]);
    useEffect(() => {
        const getUsers = async () => {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            setUsers(response.data);
        }
        getUsers();
    }, []);
    return (
        <div>
            <h2 className="text-center text-3xl md:text-6xl py-3 md:py-6 dark:bg-slate-900 dark:text-white">All Users</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 p-3 md:p-6 dark:bg-slate-900 dark:text-white">
                {users.map((user) => (
                    <User key={user.id} name={user.name} email={user.email} phone={user.phone} website={user.website} />
                ))}
            </div>
        </div>
    );
};

export default Services;