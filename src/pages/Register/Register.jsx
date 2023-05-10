import React from "react";
import "./Register.scss";

const Register = () => {
  return (
    <div className="Register_wrapper">
      <section className="registration">
        <div className="register-form">
          <h1>
            Register <span>Here</span>
          </h1>
          <form action="">
            <input
              type="text"
              name="myname1"
              placeholder="Name"
              id="name"
              required
            />
            <input
              type="email"
              name="myemail"
              placeholder="Email"
              id=""
              required
            />
            <input
              type="tel"
              name="myphone"
              placeholder="Phone No."
              id="phonenum"
              required
            />
            <input
              type="number"
              name="myage"
              placeholder="Age"
              id=""
              required
            />

            <h4>Gender</h4>
            <input
              type="radio"
              name="mygender"
              id="male"
              value="female"
              checked
            />
            <label htmlFor="male">Male</label>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <input type="radio" name="mygender" id="female" value="female" />
            <label htmlFor="female">Female</label>

            <h4>Departure</h4>
            <input type="datetime-local" name="departuredate" id="" required />
            <h4>Return</h4>
            <input type="datetime-local" name="returndate" id="" required />

            <h4>Travel Destination</h4>
            <input type="checkbox" name="td" id="" />
            <label htmlFor="">Kashmir</label>
            &nbsp; &nbsp; &nbsp;
            <input type="checkbox" name="td" id="" />
            <label htmlFor="">Istanbul</label>
            &nbsp; &nbsp; &nbsp;
            <input type="checkbox" name="td" id="" />
            <label htmlFor="">Paris</label>
            &nbsp; &nbsp; &nbsp;
            <input type="checkbox" name="td" id="" />
            <label htmlFor="">Bali</label>
            &nbsp; &nbsp; &nbsp;
            <input type="checkbox" name="td" id="" />
            <label htmlFor="">Dubai</label>
            &nbsp; &nbsp; &nbsp;
            <input type="checkbox" name="td" id="" />
            <label htmlFor="">Geneva</label>
            &nbsp; &nbsp; &nbsp;
            <input type="checkbox" name="td" id="" />
            <label htmlFor="">Port Blair</label>
            &nbsp; &nbsp; &nbsp;
            <input type="checkbox" name="td" id="" />
            <label htmlFor="">Rome</label>
            &nbsp; &nbsp; &nbsp;

            <br /> <br />
            <h4>Package</h4>
            <input type="radio" name="locations" id="loc1" required/>
            <label htmlFor="">Bronze</label>
            &nbsp; &nbsp; &nbsp;
            <input type="radio" name="locations" id="loc1"/>
            <label htmlFor="">Silver</label>
            &nbsp; &nbsp; &nbsp;
            <input type="radio" name="locations" id="loc1"/>
            <label htmlFor="">Gold</label>
            &nbsp; &nbsp; &nbsp;
            <input type="radio" name="locations" id="loc1"/>
            <label htmlFor="">Platinum</label>
            &nbsp; &nbsp; &nbsp;

            <br /> <br />
            <input type="checkbox" name="t&c" id="" checked required/>
            <label htmlFor="">I accept the Terms & Conditions.</label>

            <br /> <br />
            <input type="submit" value="Submit" className="submitbtn" />
          </form>
        </div>
      </section>
    </div>
  );
};

export default Register;
