import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";
function AddUser() {
    const navigate = useNavigate()
    const [edit, setEdit] = useState(true)
    const [record, setRecord] = useState({
        userName: "",
        userAddress: "",
        userEmail: ""
    })
    const { id } = useParams()
    if (id && edit) {
        axios.get(`${import.meta.env.VITE_URL}/user/${id}`).then(res => {
            setRecord({
                userName: res.data.userName,
                userAddress: res.data.userAddress,
                userEmail: res.data.userEmail,
            })
            setEdit(false)
            console.log(res)
        })
    }

    const [nameStr, setStr] = useState(`form-control border border-secondry shadow-none`)
    const [emailStr, setStr2] = useState(`form-control border border-secondry shadow-none`)
    const [addressStr, setStr3] = useState(`form-control border border-secondry shadow-none`)

    const formSubmit = async (e) => {
        e.preventDefault()

        if (record.userName.trim() == "") {

            setStr(`form-control border border-danger shadow-none`)


        } else {
            setStr(`form-control border border-secondry shadow-none`)

        }
        if (record.userEmail.trim() == "") {

            setStr2(`form-control border border-danger shadow-none`)

        }
        else {

            setStr2(`form-control border border-secondry shadow-none`)

        }
        if (record.userAddress.trim() == "") {

            setStr3(`form-control border border-danger shadow-none`)

        } else {
            setStr3(`form-control border border-secondry shadow-none`)

        }


        if (record.userAddress.trim() != "" && record.userEmail.trim() != "" && record.userName.trim() != "" && edit) {
            axios.post(`${import.meta.env.VITE_URL}/user/add`, record).then(res => {
                toast.success(res.data.message)
                if (!res.data.error) {
                    setTimeout(navigate('/'), 1000)
                }


            }).catch(e => {
                console.log(e.message)
            })

        } else {
            axios.post(`${import.meta.env.VITE_URL}/user/edit`, { ...record, id: id }).then(res => {
                toast.success(res.data.message)
                if (!res.data.error) {
                    setTimeout(navigate('/'), 1000)
                }
            }).catch(e => {
                console.log(e.message)
            })
        }


    }


    return (
        <div className="d-flex justify-content-center align-items-start vh-100 pt-5">
            <div className="shadow p-4 bg-white rounded w-25">

                <div className="mb-3">
                    <button onClick={() => { navigate('/') }} type="button" className="btn btn-primary">Back</button>
                </div>

                <form onSubmit={formSubmit} >
                    <div className="mb-3">
                        <label className="form-label">Name:</label>
                        <input type="text" onChange={(e) =>
                            setRecord({ ...record, userName: e.target.value })
                        } value={record.userName} className={nameStr} />

                    </div>

                    <div className="mb-3">
                        <label className="form-label">Email:</label>
                        <input type="text" onChange={(e) =>
                            setRecord({ ...record, userEmail: e.target.value })
                        } value={record.userEmail} className={emailStr} />

                    </div>

                    <div className="mb-4 " >
                        <label className="form-label">Address:</label>
                        <input type="text" onChange={(e) =>
                            setRecord({ ...record, userAddress: e.target.value })
                        } value={record.userAddress} className={addressStr} />

                    </div>

                    <div className="d-flex justify-content-end">
                        <button type="submit" className="btn btn-success">
                            Submit
                        </button>
                    </div>
                </form>

            </div>
        </div>
    );


}

export default AddUser
