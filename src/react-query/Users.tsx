import { QueryOptions, useQuery } from "@tanstack/react-query";

// create a fetch function that returns the users from json placeholder
const fetchUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  return response.json();
};

export const useUsers = (options = {}) => {
  return useQuery(["users"], fetchUsers, {
    // staleTime: 10000,
    // cacheTime: 20000,
    select: (data) => {
      return data.slice(0, 5);
    },
    ...options,
  });

  //   return {
  //     ...queryInfo,
  //     data: queryInfo.data?.slice(0, 5),
  //   };
};

const Users = () => {
  const { data, isLoading } = useUsers();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1 className="text-lg mb-4 border border-blue-500">Users </h1>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};
export default Users;
