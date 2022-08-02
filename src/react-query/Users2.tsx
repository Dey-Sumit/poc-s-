import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useUsers } from "./Users";
// Access the client
// create a fetch function that returns the users from json placeholder

const Users2 = () => {
  //   const queryClient = useQueryClient();
  //   const data = queryClient.getQueryData<any>(["users"]);
  //   console.log({ data });

  const { data, isLoading } = useUsers({
    enabled: false,
  });
  console.log({ data, isLoading });

  return (
    <div>
      <h1 className="mb-4 border border-red-500">Users 2</h1>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};
export default Users2;
