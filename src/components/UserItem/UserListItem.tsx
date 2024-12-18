import { Person } from "../../static/data";


type UserListItemProps = {
  user: Person;
  removeUser: (id: number) => void;
}

const UserListItem = (props: UserListItemProps) => {
  const {user, removeUser} = props;

  return (
    <tr key={user.id}>
      <td>{user.id}</td>
      <td>{user.first_name}</td>
      <td>{user.last_name}</td>
      <td>{user.email}</td>
      <td>{user.age}</td>
      <td>{user.gender}</td>
      <td>{user.job}</td>
      <td>{user.country}</td>
      <td>
        <button onClick={() => removeUser(user.id)}>remove user</button>
      </td>
    </tr>
  )
}

export default UserListItem;