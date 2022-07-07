import Image from "next/image";
import Nav from "../../comps/Nav";
import * as React from "react";
// import { useForm } from "react-hook-form";

export default function forgotphonenumber() {
  // const {
  //   register,
  //   handleSubmit,
  //   watch,
  //   formState: { errors },
  // } = useForm({ defaultValues: { phonenumber: "" } });

  // console.log(errors);
  // console.log(watch());

  return (
    <div className="body-div">
      <div className="details-div">
        <div className="details-div-holder">
          <Nav />

          <div className="title-div with-margin">
            <div className="title-text">Forgotten your Username?</div>
          </div>
          <div className="sub-text">Don&apos;t worry we&apos;ve got you</div>

          <div
            id="phone-registration-form"
            className="w-form form-registration"
          >
            <form
              name="Forgot-Phonenumber-Registration-Form"
              method="post"
              data-name="Forgot Number"
              className="forgot-number-form"
              action="/forgot-details/forgot-otp"
              id="forgot-number"
              // onSubmit={handleSubmit((data) => {
              //   console.log(data);
              // })}
            >
              <label className="text-input-heading" htmlFor="phone-number">
                Enter your phone number
              </label>

              <input
                name="User Phone Number"
                data-name="phone-number"
                id="phone-number"
                className="text-input w-input"
                placeholder="e.g 0702123456"
                pattern="[0-9]{2}[0-9]{8}"
                // required="true"
                autoFocus="true"
                type="text"
                size="10"
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
                // {...register("phonenumber", {
                //   required: "Kindly key in your phone number",
                //   minLength: {
                //     value: "10",
                //     message: "Minimum length is 10, e.g 0712345678",
                //   },
                //   maxLength: {
                //     value: "10",
                //     message: "Maximum length is 10, e.g 0712345678",
                //   },
                // })}
              />
              {/* <p className="error-text">{errors.phonenumber?.message}</p> */}
              <input
                type="submit"
                defaultValue="Next"
                data-wait="Please wait..."
                className="submit-button w-button link-block form-submit"
              />
            </form>
          </div>
        </div>
      </div>
      <div className="pic-div">
        <div className="bg-img">
          <Image src="/img6.png" alt="" layout="fill" objectFit="cover" />
        </div>
        <div className="pic-div-text">
          Get a Kakitoo <span className="bolded">Username</span> to hide your
          phone number when someone sends you Mpesa on Kakitoo.
        </div>
      </div>
    </div>
  );
}
