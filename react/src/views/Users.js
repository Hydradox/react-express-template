import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';



function Users({ userId }) {
    const [userCount, setUserCount] = useState(0);
    const [users, setUsers] = useState([]);

    let params = useParams();

    const getUsers = async () => {
        fetch('/api/test')
            .then(res => res.json())
            .then(data => setUsers(data.users));
    }


    const setCount = () => {
        if(userCount === 0) {
            return <div>Loading...</div>
        } else {
            return <div style={{ textDecoration: 'underline' }}>Loaded { users.length } users</div>
        }
    }

    useEffect(() => {
        setUserCount(users.length);
    }, [users]);


    return (
        <div>
            <h1>Your ID is #{ params.userId }</h1>
            <button onClick={getUsers}>Get Users</button>
            { setCount() }
            
            { users.map((user, index) => {
                return <div key={index}>{user.name}</div>
            }) }
        </div>
    );
}


export default Users;