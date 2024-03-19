// import { useEffect, useState } from "react";
// import { API } from "../../../../../src/config/API";

// function BookingList() {
//   const [parties, setParties] = useState([]);

//   useEffect(() => {
//     const fetchParties = async () => {
//       try {
//         const res = await API.getAllParties();
//         console.log(res);
//         // Check if res.data is defined and not empty
//         if (res.data && Array.isArray(res.data)) {
//           setParties(res.data);
//         } else {
//           console.error('Invalid or empty data format:', res.data);
//         }
//       } catch (error) {
//         console.error('Error fetching parties:', error);
//       }
//     };

//     fetchParties();
//   }, []);

//   return (
//     <>
//       <div className="party-list">
//         <h2>DANH SÁCH ĐƠN TIỆC</h2>
//         <ul>
//           {parties.length > 0 ? (
//             parties.map((party) => (
//               <li key={party.id}>{party.name}</li>
//             ))
//           ) : (
//             <li>Bạn chưa đặt tiệc lần nào</li>
//           )}
//         </ul>
//       </div>
//     </>
//   );
// }

// export default BookingList;
