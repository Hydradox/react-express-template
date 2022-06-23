import { useState } from 'react';

import './UserTable.css';



function UserTable({ users }) {
    const [userList, setUserList] = useState(users);


    const printUsers = () => {
        if(userList != undefined) {
            return users.map((user, index) => {
                return (
                    <tr key={index}>
                        <td>{user.name}</td>
                        <td>{user.age}</td>
                    </tr>
                );
            }).reverse();
        }
    }


    return (
        <table className='User-table'>
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Age</td>
                </tr>
            </thead>
            <tbody>
                { printUsers() }
            </tbody>
        </table>
    );
}


export default UserTable;