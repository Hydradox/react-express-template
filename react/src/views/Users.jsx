import { useState, useEffect } from 'react';

import UserTable from '../components/UserTable/UserTable';



function Users() {
    const [userCount, setUserCount] = useState(0);
    const [users, setUsers] = useState([]);
    const [dots, setDots] = useState('.');


    const getUsers = async () => {
        fetch('/api/test')
            .then(res => res.json())
            .then(data => setUsers(data.users));
    }


    const setCount = () => {
        if(userCount === 0) {
            return <div>Loading users { dots }</div>
        } else {
            clearTimeout(timeout);
            return <div style={{ textDecoration: 'underline' }}>Loaded { users.length } users</div>
        }
    }


    const timeout = setTimeout(() => {
        console.log('timeout');
        if(dots.length === 3) {
            setDots('.');
        } else {
            setDots(dots + '.');
        }
    }, 400);

    useEffect(() => {
        setUserCount(users.length);
    }, [users]);

    useEffect(() => {
        getUsers();
    }, []);


    return (
        <div>
            { setCount() }
            
            <UserTable users={users} />
        </div>
    );
}


export default Users;