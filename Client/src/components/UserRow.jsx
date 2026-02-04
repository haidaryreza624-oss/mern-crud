import React from 'react'

function UserRow({ item, id }) {
    return (
        <tr>
            <td>{id}</td>
            <td>{item.userName}</td>
            <td>{item.userAddress}</td>
            <td>{item.userEmail}</td>
            <td className="text-center align-middle">
                <div className="d-inline-flex gap-2">
                    <button className="btn btn-danger btn-sm">
                        <i className="bi bi-trash"></i>
                    </button>

                    <button className="btn btn-primary btn-sm">
                        <i className="bi bi-pencil-square"></i>
                    </button>
                </div>
            </td>

        </tr>
    )
}

export default UserRow
