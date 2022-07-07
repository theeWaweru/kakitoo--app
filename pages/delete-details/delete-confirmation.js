import Nav from "../../comps/Nav";
import Link from "next/link";
import Image from "next/image";

const deleteNicknameConfirmation = () => {
  return (
    <div className="body-div">
      <div className="details-div">
        <div className="details-div-holder">
          <Nav />
          <div className="title-div with-margin">
            <div className="title-text">
              Your Username is{" "}
              <span className="title-text username">xxxxxxx</span>
            </div>
          </div>
          <div className="sub-text">Are you sure you want to delete</div>
          <div className="delete-name-form">
            <Link href="/">
              <a className="link-block no-btn w-inline-block">
                <div>No</div>
              </a>
            </Link>
            <Link href="/delete-details/delete-finish">
              <a className="link-block yes-btn w-inline-block">
                <div>Yes</div>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="pic-div">
        <div className="bg-img">
          <Image src="/img11.png" alt="" layout="fill" objectFit="cover" />
        </div>
        <div className="pic-div-text">
          Get a Kakitoo <span className="bolded">Username</span> to hide your
          phone number when someone sends you Mpesa on Kakitoo.
        </div>
      </div>
    </div>
  );
};

export default deleteNicknameConfirmation;
