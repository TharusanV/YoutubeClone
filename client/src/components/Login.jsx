import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Login = () => {

    const [userList, setUserList] = useState([]);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const getUsers = () => {
        axios.get("http://localhost:3001/login").then((response) => {
            setUserList(response.data);
        });
    };
    
    const checkLoginDetails = (username, password) => {
        if(username===null || password===null){
            return false;
        }
        else{
            userList.map((val,key) => {
                if(val.username !== username || val.password !== password){
                    return false;
                }
                else{
                    return true;
                }
            })
        }
    }


  return (
    <div>Login</div>
  )
}

export default Login