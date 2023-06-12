import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBookedAppointment } from "../../../mainStore/user/user-action";

const MyAppointment = () => {
  const dispatch: any = useDispatch();
   
  const {userData} = useSelector((state: any) => state.user);
  const {bookedAppointment} = useSelector((state: any) => state.user);


  useEffect(() => {
       dispatch(getAllBookedAppointment(userData.id))   
  },[]);


  const eventBody =   bookedAppointment.map((event:any) => (
    <tr key={event.id}>
      <td className="py-2 px-4">{event.doctor.name}</td>
      <td className="py-2 px-4">{event.doctor.email}</td>
      <td className="py-2 px-4">{event.start}</td>
      <td className="py-2 px-4">{event.end}</td>
      <td className="py-2 px-4">{event.title}</td>
    </tr>
  ))
return (
    <div>
     <table className="border-collapse border border-gray-300">
     <thead className="bg-gray-100">
  <tr>
    <th className="py-2 px-4">Doctor Name</th>
    <th className="py-2 px-4">Doctor Email</th>
    <th className="py-2 px-4">Appointment Start Time</th>
    <th className="py-2 px-4">Appointment End Time</th>
    <th className="py-2 px-4">Title</th>
  </tr>
</thead>
<tbody>
    {eventBody}
</tbody>
     </table>
    </div>

    )

};

export default MyAppointment;