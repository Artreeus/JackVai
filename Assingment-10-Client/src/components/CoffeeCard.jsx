import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, country_name, location, average_cost} = coffee;

  const handleDelete = (_id) => {
    console.log(_id);
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
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Coffee has been deleted.", "success");
              // eslint-disable-next-line react/prop-types
              const remaining = coffees.filter((cof) => cof._id !== _id);
              setCoffees(remaining);
            }
          });
      }
    });
  };

  return (
    <table className="table my-7 bg-gray-400">
    <thead>
      <tr>
        
        <th>country_name</th>
        <th>location</th>
        <th>average_cost</th>
        
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{country_name}</td>
        <td>{location}</td>
        <td>{average_cost}</td>
        
        <td>
          <div className="btn-group btn-group-vertical space-y-4">
            <Link to={`/updateCpffee/${_id}`}>
              <button className="btn">Edit</button>
            </Link>
            <button onClick={() => handleDelete(_id)} className="btn bg-orange-500">X</button>
          </div>
        </td>
      </tr>
  
    </tbody>
  </table>
  
  );
};

export default CoffeeCard;
