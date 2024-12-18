import React, { useState } from "react"
import { data, Person } from "../../static/data"
import UsersListTableHead, { SortType } from "../UsersListTableHead/UsersListTableHead"
import styles from './UsersList.module.css'
import UserListItem from "../UserItem/UserListItem"
import AddNewUser from '../UserAddForm/AddNewUser'
import { useCallback } from 'react';

const UserList = () => {
  const [users, setUsers] = useState<Person[]>(data); 
  const [nameSort, setNameSort] = useState<SortType>();
  const [ageSort, setAgeSort]=useState<SortType>();

  const removeUser = (id: number) => {
    setUsers((previousUsers) => {
      return previousUsers.filter((user) => user.id !== id);
    });
  };
//Sort by Name
 const sortByFirstName = useCallback(() => {
  if (nameSort === 'asc') {
    setUsers((previousUsers) => {
      const newUsers = [...previousUsers];
      newUsers.sort((userA, userB) => {
        if (userA.first_name > userB.first_name) return 1;
        if (userA.first_name < userB.first_name) return -1;
        return 0;
      });
      return newUsers;
    });
    setNameSort('desc');
  } else {
    setUsers((previousUsers) => {
      const newUsers = [...previousUsers];
      newUsers.sort((userA, userB) => {
        if (userA.first_name > userB.first_name) return -1;
        if (userA.first_name < userB.first_name) return 1;
        return 0;
      });
      return newUsers;
    });
    setNameSort('asc');
  }
}, [nameSort]);
  //Sort by lastName
const sortByAge = useCallback(() => {
  if (ageSort === 'asc') {
    setUsers((previousUsers) => {
      const newUsers = [...previousUsers];
      newUsers.sort((userA, userB) => userA.age - userB.age); 
      return newUsers;
    });
    setAgeSort('desc');
  } else {
    setUsers((previousUsers) => {
      const newUsers = [...previousUsers];
      newUsers.sort((userA, userB) => userB.age - userA.age); 
      return newUsers;
    });
    setAgeSort('asc');
  }
}, [ageSort]);
  // Function to add a new user to the list
  const addUser = (user: Person) => {
    setUsers((prevUsers) => {
    
      const newUser = { ...user, id: prevUsers.length + 1 }; 
      return [...prevUsers, newUser]; 
    });
  };

  return (
    <div className={styles.table_container}>
      {<AddNewUser addUser={addUser} />}
      
       <h2>User List</h2>
      <table>
        <UsersListTableHead
        sortByFirstName={sortByFirstName}
        nameSort={nameSort}
        sortByAge={sortByAge}
        ageSort={ageSort}
      />
        <tbody>
          {users.map((user) => {
            return (
              <React.Fragment key={user.id}>
                <UserListItem user={user} removeUser={removeUser} />
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;