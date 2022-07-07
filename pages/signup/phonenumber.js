import Image from "next/image";
import Link from "next/link";
import Nav from "../../comps/Nav";
// import * as React from "react";
// import { useForm } from "react-hook-form";

export default function app() {
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
              <div className="number-line" />
              <div className="number">
                <div>3</div>
              </div>
              <div className="number-line" />
            </div>
            <div className="number-div">
              <div className="number-line" />
              <div className="number">
                <div>4</div>
              </div>
            </div>
          </div>

          <div className="title-div">
            <div className="title-text">We need your phone number</div>
          </div>
          <div className="sub-text">It links with your username</div>
          <form
            id="phone-registration-form"
            className="w-form form-registration"
            name="Phone-Registration-Form"
            data-name="Phone Registration Form"
            method="post"
            action="/signup/otp"
            // onSubmit={handleSubmit((data) => {
            //   console.log(data);
            // })}
          >
            <label className="text-input-heading" htmlFor="phone-number">
              Enter your phone number
            </label>
            <input
              name="User Phone Number"
              id="phonenumber"
              className="text-input w-input"
              placeholder="e.g 0702123456"
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
              //     message: "minimum length is 10, e.g 0712345678",
              //   },
              //   maxLength: {
              //     value: "10",
              //     message: "maximum length is 10, e.g 0712345678",
              //   },
              // })}
            />
            {/* <p className="error-text">{errors.phonenumber?.message}</p> */}
            <label
              className="radio-button-field w-radio"
              htmlFor="terms-of-service-radio"
            >
              <input
                className="w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input"
                type="radio"
                name="term-of-service"
                id="terms-of-service-radio"
                defaultValue="Radio"
                data-name="term-of-service"
                required=""
                // {...register("terms", {
                //   required: "Kindly view and tick the terms of service",
                // })}
              />
              <span className="w-form-label" htmlFor="Terms-of-Service">
                Agree to
              </span>
              <Link href="/terms-of-service">
                <a className="text-link">Terms of Service</a>
              </Link>
            </label>
            {/* <p className="error-text">{errors.terms?.message}</p> */}
            <input
              type="submit"
              value="Next"
              data-wait="Please wait..."
              className="submit-button w-button link-block form-submit"
            />
          </form>
        </div>
      </div>
      <div className="pic-div">
        <div className="bg-img">
          <Image src="/img3.png" alt="" layout="fill" objectFit="cover" />
        </div>
        <div className="pic-div-text">
          Get a Kakitoo <span className="bolded">Username</span> to hide your
          phone number when someone sends you Mpesa on Kakitoo.
        </div>
      </div>
    </div>
  );
}
