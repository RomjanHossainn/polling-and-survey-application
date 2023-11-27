import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const ManageUser = () => {
  const axiosSercure = useAxiosSecure();

  const { data: users = [],isPending,refetch } = useQuery({
    queryKey: ["manageusers"],
    queryFn: async () => {
      const result = await axiosSercure.get("/users");
      return result.data;
    },
  });

  const handleDeleteUser = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSercure.delete(`/user/${_id}`)
        .then(res => {
            if (res.data.deletedCount > 0){
              Swal.fire({
                title: "Deleted!",
                text: "User has been deleted.",
                icon: "success",
                
              });
              refetch()
            }
        })
      }
    });
  }

  console.log(users);

  if(isPending){
    return (
      <span className="loading absolute left-1/2 top-1/2 loading-spinner text-success"></span>
    );
  }

  return (
    <div className="text-gray-900 bg-gray-200 ">
      <div className="p-4 flex">
        <h1 className="text-3xl">Users</h1>
      </div>
      <div className="px-3 py-4 flex justify-center">
        <table className="w-full text-md bg-white shadow-md rounded mb-4">
          <tbody>
            <tr className="border-b">
              <th className="text-left p-3 px-5">Name</th>
              <th className="text-left p-3 px-5">Email</th>
              <th className="text-left p-3 px-5">Role</th>
              <th></th>
            </tr>

            {users?.map((user) => (
              <tr key={user._id} className="border-b hover:bg-orange-100">
                <td className="p-3 px-5">{user.name}</td>
                <td className="p-3 px-5">{user.email}</td>
                <td className="p-3 px-5">
                  <select value="user.role" className="bg-transparent">
                    <option value="user">user</option>
                    <option value="admin">admin</option>
                  </select>
                </td>
                <td className="p-3 px-5 flex justify-end">
                  <button onClick={() => handleDeleteUser(user._id)}
                    type="button"
                    className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUser;
