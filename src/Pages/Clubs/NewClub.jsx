import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
export default function Form() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    about: '',
    firstName: '',
    lastName: '',
    srn: '',
    gender: 'Male',
    contact: '',
    email: '',
    create_password: '',
    password: '',
    campus: 'RR',
    year: '2025',
    specialization: 'CS',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Add this to prevent form from refreshing
    const { create_password, password } = formData; // Destructure the necessary fields from formData
    
    if (create_password !== password) {
      alert("Passwords do not match, try again.");
    } else {
      fetch('http://localhost:5050/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      .then((response) => {
        if (response.status === 200) {
          alert("SignUp successful");
          navigate('/')
        } 
        else{
          alert("Email/User_name already exists");
        }
      })
      .then((data) => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    }
  };
  

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-8">
      <form onSubmit={handleSubmit}>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
          <h1 className="text-2xl font-semibold leading-9 text-gray-900">Sign Up</h1>

            <p className="mt-1 text-sm leading-6 text-gray-600">
              This information will be displayed publicly so be careful what you share.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                  Username
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      id="username"
                      name="username"
                      type="text"
                      value={formData.username}
                      onChange={handleChange}
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>

              <div className="col-span-full">
                <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                  About
                </label>
                <div className="mt-2">
                  <textarea
                    id="about"
                    name="about"
                    rows={3}
                    value={formData.about}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
              </div>
            </div>
          </div>

          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-gray-900">
                  First name
                </label>
                <div className="mt-2">
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-gray-900">
                  Last name
                </label>
                <div className="mt-2">
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="srn" className="block text-sm font-medium leading-6 text-gray-900">
                  SRN
                </label>
                <div className="mt-2">
                  <input
                    id="srn"
                    name="srn"
                    pattern="PES(1|2)(UG|PG)(21|22|23|24)(CS|AM|EC|EE|ME|BT)[0-9]{3}"
                    value={formData.srn}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="gender" className="block text-sm font-medium leading-6 text-gray-900">
                  Gender
                </label>
                <div className="mt-2">
                  <select
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>Male</option>
                    <option>Female</option>
                    <option>Others</option>
                  </select>
                </div>
              </div>

              <div className="sm:col-span-4">
                <label htmlFor="contact" className="block text-sm font-medium leading-6 text-gray-900">
                  Contact Number
                </label>
                <div className="mt-2">
                  <input
                    id="contact"
                    name="contact"
                    type="tel"
                    pattern="[0-9]{10}"
                    value={formData.contact}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-4">
                <label htmlFor="contact" className="block text-sm font-medium leading-6 text-gray-900">
                  Email id
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label htmlFor="create_password" className="block text-sm font-medium leading-6 text-gray-900">
                  Create Password
                </label>
                <div className="mt-2">
                  <input
                    id="create_password"
                    name="create_password"
                    type="password"
                    value={formData.create_password}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Confirm Password
                </label>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2 sm:col-start-1">
                <label htmlFor="campus" className="block text-sm font-medium leading-6 text-gray-900">
                  Campus
                </label>
                <div className="mt-2">
                  <select
                    id="campus"
                    name="campus"
                    value={formData.campus}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>RR</option>
                    <option>EC</option>
                  </select>
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="year" className="block text-sm font-medium leading-6 text-gray-900">
                  Year of Graduation
                </label>
                <div className="mt-2">
                  <select
                    id="year"
                    name="year"
                    value={formData.year}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>2025</option>
                    <option>2026</option>
                    <option>2027</option>
                    <option>2028</option>
                  </select>
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="specialization" className="block text-sm font-medium leading-6 text-gray-900">
                  Specialization
                </label>
                <div className="mt-2">
                  <select
                    id="specialization"
                    name="specialization"
                    value={formData.specialization}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>CS</option>
                    <option>AM</option>
                    <option>EC</option>
                    <option>EE</option>
                    <option>ME</option>
                    <option>BT</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            onClick={(e)=>{
              navigate('/')
            }}
           type="button" className="text-sm font-semibold leading-6 text-gray-900">
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            SignUp
          </button>
        </div>
      </form>
    </div>
  );
}

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; 

// const SignUp = () => {
//   const [email, setEmail] = useState('');
//   const [createpassword,setCreatePassword] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleEmail = (e) => {
//     setEmail(e.target.value);
//   };

//   const handlePassword = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleCreatePassword = (e) => {
//     setCreatePassword(e.target.value);
//   }
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (createpassword !== password) {
//         alert("Passwords do not match.");
//         return; // Stop execution if passwords don't match
//     }
//     fetch('http://localhost:5050/signup', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//             email: email,
//             password: password,
//         }),
//     })
//     .then((response) => {
//         if (!response.ok) {
//             return response.json().then((data) => {
//                 alert(data.error);
//             });
//         }
//         alert('Sign-up successful');
//         navigate('/'); 
//     })
//     .catch((error) => {
//         alert('An error occurred. Please try again.');
//         console.error('Error:', error);
//     });
// };


//   return (
//     <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
//       <div className="sm:mx-auto sm:w-full sm:max-w-sm">
//         <img
//           alt="Your Company"
//           src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
//           className="mx-auto h-10 w-auto"
//         />
//         <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
//           Sign Up to your account
//         </h2>
//       </div>

//       <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div>
//             <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
//               Email address
//             </label>
//             <div className="mt-2">
//               <input
//                 onChange={handleEmail}
//                 id="email"
//                 name="email"
//                 type="email"
//                 required
//                 autoComplete="email"
//                 className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
//               />
//             </div>
//           </div>
//           <div>
//             <div className="flex items-center justify-between">
//               <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
//                 Create Password
//               </label>
//             </div>
//             <div className="mt-2">
//               <input
//                 onChange={handleCreatePassword}
//                 id="create-password"
//                 name="password"
//                 type="password"
//                 required
//                 autoComplete="current-password"
//                 className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
//               />
//             </div>
//           </div>
//           <div>
//             <div className="flex items-center justify-between">
//               <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
//                 Confirm Password
//               </label>
//             </div>
//             <div className="mt-2">
//               <input
//                 onChange={handlePassword}
//                 id="confirm-password"
//                 name="password"
//                 type="password"
//                 required
//                 autoComplete="current-password"
//                 className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
//               />
//             </div>
//           </div>

//           <div>
//             <button
//               type="submit"
//               className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//             >
//               Sign Up
//             </button>
//           </div>
//         </form>

//         <p className="mt-10 text-center text-sm/6 text-gray-500">
//           already a member?{' '}
//           <a href="/signin" className="font-semibold text-indigo-600 hover:text-indigo-500">
//             Sign In
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// };
//   export default SignUp;
  