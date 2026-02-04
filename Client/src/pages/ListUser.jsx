import React from 'react'
import { useState } from 'react';
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import UserRow from '../components/UserRow';

function ListUser() {
    const [user, setUser] = useState([])
    useEffect(() => {
        axios.get('http://localhost:7000/mern/users').then(response => {
            setUser(response.data)
        })
    }, [])
    const navigate = useNavigate();
    console.log(user)
    return (
        <div className="d-flex justify-content-center align-items-start vh-100 pt-5">
            <div className="shadow p-4 bg-white rounded w-75">
                <div className="mb-3">
                    <button onClick={() => { navigate('/add') }} className="btn btn-primary">Add</button>
                </div>

                <table className="table table-bordered table-striped">
                    <thead className="table-dark">
                        <tr>
                            <th>Column 1</th>
                            <th>Column 2</th>
                            <th>Column 3</th>
                            <th>Column 4</th>
                            <th>Column 5</th>
                        </tr>
                    </thead>
                    <tbody>
                        {user.map((item, index) => {
                            return <UserRow item={item} key={index} id={index + 1} />
                        })}

                    </tbody>
                </table>

            </div>
        </div>
    );

}

export default ListUser
