import Image from "next/image";
import Nav from "../../comps/Nav";
import React, { Component } from "react";
import OtpInput from "react-otp-input";
// import { useForm } from "react-hook-form";
// import { useState } from "react";

// const {
//   register,
//   handleSubmit,
//   watch,
//   formState: { errors },
// } = useForm({ defaultValues: { otp: "" } });

// const [code, setCode] = useState("");

// const handleChange = (code) => setCode(code);
// handleChange = (otp) => this.setState({ otp });

// console.log(errors);
// console.log(watch());
export default class App extends Component {
  state = { otp: "" };

  handleChange = (otp) => this.setState({ otp });

  render() {
    return (
      <div className="body-div">
        <div className="details-div">
          <div className="details-div-holder">
            <Nav />
            <div className="title-div with-margin">
              <div className="title-text">You will receive an SMS</div>
            </div>
            <div className="sub-text">It&apos;s to confirm your number</div>

            {/* this is the OTP app below */}
            <form
              id="otp"
              className="form-registration"
              action="/delete-details/delete-confirmation"
              // onSubmit={handleSubmit((data) => {
              //   console.log(data);
              // })}
            >
              <div className="text-input-heading">Enter your OTP</div>

              {/* this is the OTP app below */}
              <OtpInput
                className="otp-app"
                id="otp-app"
                value={this.state.otp}
                onChange={this.handleChange}
                numInputs={4}
                // required="true"
                // {...register("otp", {
                //   required: "Kindly key in the OTP sent to your phone",
                // })}
                inputStyle={{
                  border: "1px solid #4d4d4d",
                  borderRadius: "8px",
                  width: "60px",
                  height: "48px",
                  fontWeight: "400",
                  caretColor: "#f7931e",
                  fontSize: "16px",
                  fontFamily: "Product Sans",
                  fontWeight: "400",
                  margin: "7px 20px 16px 0",
                }}
                focusStyle={{
                  border: "1px solid #f7931e",
                  outline: "none",
                  color: "#f7931e",
                }}
              />
              {/* <p className="error-text">{errors.otp?.message}</p> */}
              <input
                type="submit"
                value="Next"
                data-wait="Please wait..."
                action="/forgot-details/forgot-finish"
                className="link-block form-submit w-inline-block"
              />
            </form>
          </div>
        </div>
        <div className="pic-div">
          <div className="bg-img">
            <Image src="/img10.png" alt="" layout="fill" objectFit="cover" />
          </div>
          <div className="pic-div-text">
            Get a Kakitoo <span className="bolded">Username</span> to hide your
            phone number when someone sends you Mpesa on Kakitoo.
          </div>
        </div>
      </div>
    );
  }
}
