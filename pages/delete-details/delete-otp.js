import Image from "next/image";
import Nav from "../../comps/Nav";
import * as React from "react";
// import { useForm } from "react-hook-form";
import OtpInput from "react-otp-input";
// import { useState } from "react";

export default function app() {
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
            <div className="otp-app" id="otp-app">
              <OtpInput
                // value={code}
                // onChange={handleChange}
                numInputs={4}
                isInputNum={true}
                shouldAutoFocus={true}
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
            </div>
            <input
              type="submit"
              value="Next"
              data-wait="Please wait..."
              className="link-block form-submit w-inline-block"
            />
            <div className="success-message w-form-done">
              <div>Thank you! Your submission has been received!</div>
            </div>
            <div className="error-message w-form-fail">
              <div>
                Oops! Something went wrong.
                <br />
                Check your details and try again.
              </div>
            </div>
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
