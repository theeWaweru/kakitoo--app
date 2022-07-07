import Nav from "../comps/Nav";
import Image from "next/image";
import Link from "next/link";

export default function app() {
  return (
    <div className="body-div">
      <div className="deets-div">
        <Nav />
        <div className="main-text">
          Provides <span className="colored-text">privacy as a service</span> to
          Mpesa customers
        </div>
        <div className="sec-text">
          The safest way to send Mpesa to someone and hide your mobile number
          and name.
        </div>
        <div className="div-block">
          <div className="phone-img">
            <Image
              src="/phone-with-number.png"
              alt=""
              width={140}
              height={276}
            />
          </div>
          <div>
            <div className="title-text">Call *384*6#</div>
            <div className="sec-text">
              To tip or send someone Mpesa and hide your number and name.
            </div>
          </div>
        </div>
      </div>
      <div className="pic-div">
        <div className="bg-img">
          <Image src="/img1.png" alt="" layout="fill" objectFit="cover" />
        </div>
        <div className="pic-div-text">
          Get a Kakitoo <span className="bolded">Username</span> to hide your
          phone number when someone sends you Mpesa on Kakitoo.
        </div>
        <Link href="/signup/username">
          <a className="link-block w-inline-block">
            <div>Get a Username</div>
          </a>
        </Link>
      </div>
    </div>
  );
}
