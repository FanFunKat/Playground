import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, addUser } from "../store";
import Button from "./Button";
import { Sceleton } from "./Sceleton";

export function UsersList() {
  const dispatch = useDispatch();
  const { isLoading, data, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleUserAdd = () => {
    dispatch(addUser());
  }

  if (isLoading) {
    return <Sceleton times={6} className='h-10 w-full' />;
  }

  if (error) {
    return <div>Error fetching data...</div>;
  }

  const renderUsers = data.map((user) => {
    return <div key={user.id} className="mb-2 px-3 py-1 text-lg bg-gray-50 border rounded">
      <div className="flex p-2 justify-between items-center cursor-pointer">
        {user.name}
      </div>
    </div>
  });

  return (
    <div>
      <div className="flex flex-row justify-between m-3 items-center">
        <h1 className="m-2 text-xl">Users</h1>
        <Button primary onClick={handleUserAdd}>+ Add User</Button>
      </div>
      {renderUsers}
    </div>
  );

  // return 'Users List';
}