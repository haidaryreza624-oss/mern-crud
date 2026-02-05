import React from 'react'
import { useState } from 'react';
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import UserRow from '../components/UserRow';
import Swal from "sweetalert2";

function ListUser() {
    const [user, setUser] = useState([])
    const [render, setrender] = useState(true)
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_URL}/users`).then(response => {
            setUser(response.data)
        })
    }, [render])
    const navigate = useNavigate();
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "This action cannot be undone!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "Cancel",
        }).then(res => {
            if (res.isConfirmed) {
                axios.post(`${import.meta.env.VITE_URL}/user/remove`, { id: id }).then(res => {
                    setrender(res => {
                        if (res) {
                            return false
                        }
                        return true
                    })
                    toast.success(res.data.message)
                })
            }
        })
    }
    const handleupdate = (id) => {
        navigate(`edit/${id}`)
    }
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
                            return <UserRow item={item} key={index} id={index + 1} handler={handleDelete} handler2={handleupdate} />
                        })}

                    </tbody>
                </table>

            </div>
        </div>
    );

}

export default ListUser
