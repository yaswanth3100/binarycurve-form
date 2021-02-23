import React from 'react';
import './App.css';

function App() {
  const [details,setDetails]=React.useState(false);
  const [input,setInput]=React.useState({
    name:"",
    dob:"",
    address:"",
    email:"",
    phone:""
  })

  const handleSubmit=(e)=>{
    e.preventDefault();
    setDetails(true);
  }

  const handleChange=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setInput({...input,[name]:value});
  }

  return (
    <>
    { !details ? <div className="screen">
      <form className="input_">
        <div className="input__name">
          <i className="far fa-user"></i>
        <input type="text" id="name" name="name" placeholder="User Name" onChange={handleChange} required/>
        </div>

        <div className="input__name">
        <i className="fas fa-birthday-cake"></i>
        <input type="text" id="name" name="dob" placeholder="Date of Birth" onChange={handleChange} required />
        </div>

        <div className="input__name">
        <i class="fas fa-address-book"></i>
        <input type="text" id="name" name="address" placeholder="Address" required onChange={handleChange} />
        </div>

        <div className="input__name">
        <i class="fas fa-envelope-square"></i>
        <input type="text" id="name" name="email" placeholder="Email " required onChange={handleChange} />
        </div>

        <div className="input__name">
        <i class="fas fa-phone-square-alt"></i>
        <input type="text" id="name" name="phone" placeholder="Phone Number" required onChange={handleChange} />
        </div>

        <div className="input__btn">
        <button type="submit" onClick={handleSubmit} id="btn">Show Details</button>
        </div>

      </form>
      </div> 
      :
    <div className="screen">
      <div className="output_">
        <h1> <span>Name : </span> {input.name}</h1>
        <br/>
        <h1> <span>Date of Birth :</span> {input.dob}</h1>
        <br/>
        <h1> <span> Address :</span>{input.address}</h1>
        <br/>
        <h1> <span> Email : </span>{input.email}</h1>
        <br/>
        <h1> <span> Phone Number : </span>{input.phone}</h1>
      </div>
      <button id="btn" onClick={()=>{
        setDetails(false)
        setInput({...input,name:"",dob:"",address:"",email:"",phone:""})
      }} >HOME</button>
    </div>
      }
    </>
    
    
  );
}

export default App;
