// import React, { useState } from 'react';

// function Register() {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add your registration logic here, e.g., send data to backend API
//     console.log(formData);
//     // Reset the form after submission
//     setFormData({
//       firstName: '',
//       lastName: '',
//       email: '',
//       password: ''
//     });
//   };

//   return (
//     <div className="registration-window">
//       <h2>Register</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="firstName">First Name:</label>
//           <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} />
//         </div>
//         <div>
//           <label htmlFor="lastName">Last Name:</label>
//           <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} />
//         </div>
//         <div>
//           <label htmlFor="email">Email:</label>
//           <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
//         </div>
//         <div>
//           <label htmlFor="password">Password:</label>
//           <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default Register;
