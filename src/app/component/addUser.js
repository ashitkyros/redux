"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/slice";
export default function AddUser() {
    const [username, setUsername] = useState("");
    const dispatch = useDispatch()
    const addUserfunction = () => {
        dispatch(addUser(username))
    };
    return (
        <div className="user_form">
            <input
                type="text"
                placeholder="Enter Your Name"
                onChange={(e) => setUsername(e.target.value)}
            />
            <button onClick={addUserfunction}>ADD</button>
        </div>
    );
}
