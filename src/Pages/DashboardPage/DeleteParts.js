import React from 'react';
import { toast } from 'react-toastify';


const DeleteParts = ({ product, index, refetch }) => {
    const { _id, name, price, minQuantity, avaiQuantity, image } = product;

    const handleDelete = () => {
        const proceed = window.confirm(`Are You sure You Want To Delete ${name}.?`);
        if (proceed) {
            fetch(`http://localhost:5000/CarParts/${_id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    refetch()
                    toast.success(`Product is deleted.`)
                })
        }
    }
    return (

        <tr>
            <th>{index + 1}</th>
            <td><div className="avatar">
                <div className="w-8 rounded">
                    <img src={image} alt={name} />
                </div>
            </div></td>
            <td>{name}</td>
            <td>{price}</td>
            <td>
                <button onClick={handleDelete}><i className="fa-solid fa-trash-can text-red-500"></i></button>
            </td>
        </tr>
    );
};

export default DeleteParts;