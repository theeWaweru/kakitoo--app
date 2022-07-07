import Image from "next/image";
import Nav from "../../comps/Nav";

// import { useForm } from "react-hook-form";
// // import { useState } from "react";

import React, { Component } from "react";
import OtpInput from "react-otp-input";

export default class App extends Component {
  state = { otp: "" };

  handleChange = (otp) => this.setState({ otp });

  render() {
    return (
      <div className="body-div">
        <div className="details-div">
          <div className="details-div-holder">
            <Nav />

            <div className="process-timeline">
              <div className="number-div">
                <div className="number current">
                  <div>1</div>
                </div>
                <div className="number-line current" />
              </div>
              <div className="number-div">
                <div className="number-line current" />
                <div className="number current">
                  <div>2</div>
                </div>
                <div className="number-line current" />
              </div>
              <div className="number-div">
                <div className="number-line current" />
                <div className="number current">
                  <div>3</div>
                </div>
                <div className="number-line current" />
              </div>
              <div className="number-div">
                <div className="number-line" />
                <div className="number">
                  <div>4</div>
                </div>
              </div>
            </div>

            <div className="title-div">
              <div className="title-text">You will receive an SMS</div>
            </div>
            <div className="sub-text">It&apos;s to confirm your number</div>

            <form
              id="otp"
              className="form-registration"
              action="/signup/confirmation"
              // onSubmit={handleSubmit((data) => {
              //   console.log(data);
              // })}
            >
              <div className="text-input-heading">Enter your OTP</div>
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
                className="link-block form-submit w-inline-block"
              />
            </form>
          </div>
        </div>
        <div className="pic-div">
          <div className="bg-img">
            <Image src="/img4.png" alt="" layout="fill" objectFit="cover" />
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
