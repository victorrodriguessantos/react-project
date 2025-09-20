import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UserList() {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(
        () => {
            axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                setUsers(response.data);
                setLoading(false);

            })
            .catch(error => {
                console.error(error);
                setLoading(false);
            });
        }, []
    );

    if (loading) {
        return <div> Carregando dados ... </div>
    }

    return(
        <div>
            <h1>Lista de Usuarios</h1>                
                    <div>
                        <table width="100%">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Usuario</th>
                                    <th>Nome</th>
                                    <th>Telefone</th>
                                    <th>Email</th>
                                </tr>
                            </thead>
                           
                            <tbody>
                                {users.map(users => (
                                <tr>
                                    <td key={users.id}> {users.id} </td>
                                    <td key={users.id}> {users.username} </td>
                                    <td key={users.id}> {users.name} </td>
                                    <td key={users.id}> {users.phone}</td>
                                    <td key={users.id}> {users.email}</td>
                                </tr>
                                ))}
                            </tbody>
                                
                        </table>
                    </div>
        </div>
    )
}

export default UserList;