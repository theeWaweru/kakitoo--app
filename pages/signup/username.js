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
  // } = useForm({ defaultValues: { username: "" } });

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
              <div className="number-line" />
              <div className="number">
                <div>2</div>
              </div>
              <div className="number-line" />
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
            <div className="title-text">Welcome! First thing first...</div>
          </div>
          <div className="sub-text">Think of a unique username.</div>

          <form
            className="form-registration"
            action="/signup/phonenumber"
            id="username-reg"
            // onSubmit={handleSubmit((data) => {
            //   console.log(data);
            // })}
          >
            <label className="text-input-heading" htmlFor="#username-reg">
              Enter the username
            </label>

            <input
              type="text"
              className="text-input"
              id="username"
              // required="true"
              autoFocus="true"
              // {...register("username", {
              //   required: "Kindly key in your desired Username",
              //   minLength: {
              //     value: "4",
              //     message: "minimum length is 4, e.g Job3",
              //   },
              // })}
              placeholder="Job24"
            ></input>
            {/* <p className="error-text">{errors.username?.message}</p> */}
            <input
              className="link-block"
              type="submit"
              value="Next"
              data-wait="Please wait..."
            />
            <div className="text-link-div">
              <Link href="../forgot-details/forgot-phonenumber">
                <a className="text-link">Forgot Username?</a>
              </Link>
              <Link href="../delete-details/delete-phonenumber">
                <a className="text-link">Delete Username?</a>
              </Link>
            </div>
          </form>
        </div>
      </div>

      <div className="pic-div">
        <div className="bg-img">
          <Image src="/img2.png" alt="" layout="fill" objectFit="cover" />
        </div>

        <div className="pic-div-text">
          Get a Kakitoo <span className="bolded">Username</span> to hide your
          phone number when someone sends you Mpesa on Kakitoo.
        </div>
      </div>
    </div>
  );
}
