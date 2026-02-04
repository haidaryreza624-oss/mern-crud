import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function AddUser() {
    const navigate = useNavigate()
    const [record, setRecord] = useState({
        userName: '',
        userAddress: '',
        userEmail: ''
    })

    return (
        <div className="d-flex justify-content-center align-items-start vh-100 pt-5">
            <div className="shadow p-4 bg-white rounded w-25">

                <div className="mb-3">
                    <button onClick={() => { navigate('/') }} type="button" onChange={(e) =>
                        setRecord({ ...record, userName: e.target.value })
                    } className="btn btn-primary">Back</button>
                </div>

                <form>
                    <div className="mb-3">
                        <label className="form-label">Name:</label>
                        <input type="text" value={record.userName} className="form-control" />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Email:</label>
                        <input type="text" value={record.userEmail} className="form-control" />
                    </div>

                    <div className="mb-4">
                        <label className="form-label">Address:</label>
                        <input type="text" value={record.userAddress} className="form-control" />
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
