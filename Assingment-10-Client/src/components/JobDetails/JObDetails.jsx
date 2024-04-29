import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const JObDetails = () => {
  const jobs = useLoaderData();
  const { _id } = useParams();
  const idInt = parseInt(_id);
  const job = jobs.find((job) => job._id === idInt);

  return (
    <>
      <h1>Hii {jobs.length}</h1>

      <ToastContainer />
    </>
  );
};

export default JObDetails;
