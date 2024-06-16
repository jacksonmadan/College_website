// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './Login.css';

// export default function Login() {
//   useEffect(() => {
//     if (!document.getElementById('logjs-script')) {
//       const script = document.createElement('script');
//       script.id = 'logjs-script';
//       script.src = '/Logjs.js'; // Path to the script in the public folder
//       script.async = true;
//       document.body.appendChild(script);

//       script.onload = () => {
//         console.log('Script loaded successfully');
//       };

//       script.onerror = () => {
//         console.log('Error loading script');
//       };

//       // Cleanup function to remove the script when the component is unmounted
//       return () => {
//         if (document.getElementById('logjs-script')) {
//           document.body.removeChild(script);
//         }
//       };
//     }
//   }, []);

//   const [form, setForm] = useState({
//     email: '',
//     password: '',
//     cnfpassword: ''
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value
//     });
//   };

//   const validate = () => {
//     const formErrors = {};
//     if (!form.email) formErrors.email = 'Email is required';
//     if (!form.password) formErrors.password = 'Password is required';
//     if (form.password !== form.cnfpassword) formErrors.cnfpassword = 'Passwords do not match';
//     return formErrors;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formErrors = validate();
//     if (Object.keys(formErrors).length === 0) {
//       try {
//         const response = await axios.post('http://localhost:3000, form);
//         console.log('Signup successful:', response.data);
//         setForm({ email: '', password: '', cnfpassword: '' });
//       } catch (error) {
//         setErrors({ api: 'Failed to signup. Email might already be in use.' });
//       }
//     } else {
//       setErrors(formErrors);
//     }
//   };

//   return (
//     <section className="forms-section">
//       <h1 className="section-title">VSGOI</h1>
//       <div className="forms">
//         <div className="form-wrapper is-active">
//           <button type="button" className="switcher switcher-login">
//             Login
//             <span className="underline" />
//           </button>
//           <form className="form form-login">
//             <fieldset>
//               <legend>Please, enter your email and password for login.</legend>
//               <div className="input-block">
//                 <label htmlFor="login-email">E-mail</label>
//                 <input id="login-email" type="email" required />
//               </div>
//               <div className="input-block">
//                 <label htmlFor="login-password">Password</label>
//                 <input id="login-password" type="password" required />
//               </div>
//             </fieldset>
//             <button type="submit" className="btn-login">
//               Login
//             </button>
//           </form>
//         </div>
//         <div className="form-wrapper">
//           <button type="button" className="switcher switcher-signup">
//             Sign Up
//             <span className="underline" />
//           </button>
//           <form className="form form-signup" onSubmit={handleSubmit}>
//             <fieldset>
//               <legend>Please, enter your email, password and password confirmation for sign up.</legend>
//               <div className="input-block">
//                 <label htmlFor="signup-email">E-mail</label>
//                 <input
//                   id="signup-email"
//                   name="email"
//                   type="email"
//                   value={form.email}
//                   required
//                   onChange={handleChange}
//                 />
//                 {errors.email && <p className="error">{errors.email}</p>}
//               </div>
//               <div className="input-block">
//                 <label htmlFor="signup-password">Password</label>
//                 <input
//                   id="signup-password"
//                   name="password"
//                   type="password"
//                   value={form.password}
//                   required
//                   onChange={handleChange}
//                 />
//                 {errors.password && <p className="error">{errors.password}</p>}
//               </div>
//               <div className="input-block">
//                 <label htmlFor="signup-password-confirm">Confirm password</label>
//                 <input
//                   id="signup-password-confirm"
//                   name="cnfpassword"
//                   type="password"
//                   value={form.cnfpassword}
//                   required
//                   onChange={handleChange}
//                 />
//                 {errors.cnfpassword && <p className="error">{errors.cnfpassword}</p>}
//               </div>
//             </fieldset>
//             <button type="submit" className="btn-signup">
//               Continue
//             </button>
//             {errors.api && <p className="error">{errors.api}</p>}
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// }
import React, { useState } from 'react';
import axios from 'axios';
import './Login.css'; // Ensure you have the CSS file
import Button from '../mycomponent/Button';


const Signup = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const validate = () => {
    let formErrors = {};
    if (!form.name) formErrors.name = 'Name is required';
    if (!form.email) formErrors.email = 'Email is required';
    if (!form.password) formErrors.password = 'Password is required';
    return formErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      try {
        const response = await axios.post('http://localhost:3000/', form);
        console.log('Signup successful:', response.data);
        setForm({ name: '', email: '', password: '' });
      } catch (error) {
        console.error('Signup error:', error); // Log error details
        if (error.response) {
          console.error('Error response:', error.response.data);
          setErrors({ api: 'Failed to signup. Email might already be in use.' });
        } else {
          setErrors({ api: 'Failed to connect to the server.' });
        }
      }
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <>
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>
        <button type="submit">Sign Up</button>
        {errors.api && <p className="error">{errors.api}</p>}
      </form>
    </div>
<Button/>
    </>
  );
};

export default Signup;
