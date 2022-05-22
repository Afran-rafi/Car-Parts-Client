import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrder = () => {
    const [orders, setOrders] = useState([])
    const [user] = useAuthState(auth)
    const navigate = useNavigate()
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/myOrder?email=${user.email}`, {
                method: "GET",
                headers: {
                    "authorization": `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    console.log('res', res)
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        navigate("/")
                    }
                    return res.json()
                })
                .then(data => setOrders(data))
        }
    }, [user])

    const handleDeleteOrder = id => {
        const proceed = window.confirm(`Are You sure You Want To Delete Your Order.?`);
        if (proceed) {
            const url = `http://localhost:5000/myOrder/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = orders.filter(order => order._id !== id);
                    setOrders(remaining);
                })
        }
    }

    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>email</th>
                            <th>Quantity</th>
                            <th>Address</th>
                            <th>Phone</th>
                            <th>Payment</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{order.name}</td>
                                <td>{order.email}</td>
                                <td>{order.quantity}</td>
                                <td>{order.address}</td>
                                <td>{order.phone}</td>

                                <td>{(order.price && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-xs btn-success'>Pay</button></Link>}
                                    {(order.price && order.paid) &&
                                        <div>
                                            <span className='text-success'>Paid</span> <br />
                                            <span className='text-red-500'>{order.transactionId}</span>
                                        </div>
                                    }
                                </td>

                                <td>{!order.transactionId && <button onClick={() => handleDeleteOrder(order._id)} className='text-red-500 font-bold'><i class="fa-solid fa-trash-can"></i></button>}</td>

                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default MyOrder;

