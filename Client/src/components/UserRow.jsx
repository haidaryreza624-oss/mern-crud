import axios from 'axios';
import React from 'react'
import toast from 'react-hot-toast';


function UserRow({ item, id, handler, handler2 }) {

    return (
        <tr>
            <td>{id}</td>
            <td>{item.userName}</td>
            <td>{item.userAddress}</td>
            <td>{item.userEmail}</td>
            <td className="text-center align-middle">
                <div className="d-inline-flex gap-2">
                    <button className="btn btn-danger btn-sm">
                        <i className="bi bi-trash" onClick={() => handler(item._id)}></i>
                    </button>

                    <button className="btn btn-primary btn-sm">
                        <i className="bi bi-pencil-square" onClick={() => handler2(item._id)}></i>
                    </button>
                </div>
            </td>

        </tr>
    )
}

export default UserRow
