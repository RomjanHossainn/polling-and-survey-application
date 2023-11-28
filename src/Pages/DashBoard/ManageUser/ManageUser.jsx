import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useUserRole from "../../../Hooks/useUserRole";

const ManageUser = () => {

    const [ {userRole} ] = useUserRole();

    console.log(userRole)

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


  if(isPending){
    return (
      <span className="loading absolute left-1/2 top-1/2 loading-spinner text-success"></span>
    );
  }

  const handleSelect = (roleValue,_id) => {

    Swal.fire({
      title: `Are you sure want to make ${roleValue}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: `Yes, ${roleValue}`,
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSercure.post(`/user/role/${_id}`, { roleValue }).then((res) => {
          if(res.data.modifiedCount > 0){
            Swal.fire({
              title: "successFully!",
              text: `Role change ${roleValue}`,
              icon: "success",
            });
            refetch()
          }
        });
        
      }
    });
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
                  <select
                    disabled={user.role === "admin" && "disabled"}
                    value="user.role"
                    onChange={(e) => handleSelect(e.target.value, user._id)}
                    className="bg-transparent"
                  >
                    <option selected>
                      {` Role _ ${user?.role ? user.role : "user"}`}
                    </option>
                    <option value="user">user</option>
                    <option
                      value="admin"
                      disabled={userRole === "surveyor" && "disabeld"}
                    >
                      admin
                    </option>
                    <option value="pro_user">pro-user</option>
                    <option
                      value="surveyor"
                      disabled={userRole === "surveyor" && "disabeld"}
                    >
                      surveyor
                    </option>
                  </select>
                </td>
                <td className="p-3 px-5 flex justify-end">
                  <button
                    disabled={user.role === "admin" && "disabeld"}
                    onClick={() => handleDeleteUser(user._id)}
                    type="button"
                    className={`text-sm ${
                      user.role === "admin"
                        ? "bg-green-600"
                        : "bg-red-500 hover:bg-red-700"
                    } text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline`}
                  >
                    {user.role === 'admin' ? 'Admin' : 'delete'}
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
