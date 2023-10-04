"use client"
import { useSelector } from "react-redux";

export default function DisplayUser() {
    const Userlistdata = useSelector((data)=> data.users);
    console.log(Userlistdata);
    return (
        <div>
            <h3>User List</h3>
        </div>
    );
}
