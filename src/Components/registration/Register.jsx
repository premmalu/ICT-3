import React,{useState,useEffect} from 'react';
import { postData } from "../services/services";

import { useNavigate } from 'react-router-dom';

export default function Register() {
    let navigate=useNavigate()
    let initialvalues={
        firstName:"",
        lastName:"",
        email:"",
        password:""
    }
    const [newUser,setNewUser]=useState(initialvalues);
    const [isSubmit, setisSubmit] = useState(false);
    const [errors, setError] = useState({});
    const handleForm=(event)=>{
        event.preventDefault();
        let name = event.target.name;
        let value = event.target.value;
        setNewUser({...newUser,[name]:value})
    }

    const createUser=(e)=>{
        e.preventDefault();
        setError(validate(newUser));
        setisSubmit(true);
    }
    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmit) {
            postData(newUser)
            .then((response) => {
                navigate("/login")
              console.log(response);

            })
            .catch((error) => console.log(error));
        }
      }, [errors]);

    function validate(values) {
        let errors = {};
        if (!values.firstName) {
          errors.nameError = "Please Enter a Name";
        } else if (values.firstName.length < 3 || values.firstName.length > 30) {
          errors.nameError = "Please Enter Name b/w length of 3 and 30";
        }
        if (!values.email) {
          errors.emailError = "Please Enter a Valid Email";
        }
        if (!values.lastName) {
          errors.salaryError = "Please Enter Salary";
        } else if (values.lastName.length < 3 || values.lastName.length > 30) {
          errors.salaryError = "Please Enter Name b/w length of 3 and 30";
        }
        if (!values.password) {
          errors.password = "Please Enter password";
        }
        return errors;
      }

  return (
    <div>
         <form className='registeration-form'>
         <div className="text-center mb-5">
                <h1 className="display-4">Register</h1>
            </div>
            <div class="row">
              <div class="col-md-6 mb-4">
                <div class="form-outline">
                  <input type="text" id="form3Example1" class="form-control" onChange={handleForm} name="firstName" value={newUser.firstName} />
                  <label class="form-label" for="form3Example1">First name</label>
                </div>
                <div>
              <p className="text-danger">{errors.firstName}</p>
            </div>
              </div>
              <div class="col-md-6 mb-4">
                <div class="form-outline">
                  <input type="text" id="form3Example2" class="form-control" onChange={handleForm} name="lastName" value={newUser.lastName} />
                  <label class="form-label" for="form3Example2">Last name</label>
                </div>
              </div>
              <div>
              <p className="text-danger">{errors.lastName}</p>
            </div>
            </div>

            <div class="form-outline mb-4">
              <input type="email" id="form3Example3" class="form-control" onChange={handleForm} name="email" value={newUser.email} />
              <label class="form-label" for="form3Example3">Email address</label>
              <div>
              <p className="text-danger">{errors.password}</p>
            </div>
            </div>

            <div class="form-outline mb-4">
              <input type="password" id="form3Example4" class="form-control" onChange={handleForm} name="password" value={newUser.password} />
              <label class="form-label" for="form3Example4">Password</label>
              <div>
              <p className="text-danger">{errors.nameError}</p>
            </div>
            </div>

            <div className="text-center">
            <button type="submit" onClick={createUser} class="btn btn-primary btn-block mb-4">
              Register
            </button>
            </div>


          </form>
    </div>
  )
}
