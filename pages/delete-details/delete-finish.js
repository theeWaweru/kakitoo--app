import Nav from "../../comps/Nav";
import Image from "next/image";
import Link from "next/link";

export default function finishRegistration() {
  return (
    <div className="body-div">
      <div className="details-div">
        <div className="details-div-holder">
          <Nav />
          <div className="congrats-svg with-margin w-embed">
            <svg
              width={75}
              height={75}
              viewBox="0 0 75 75"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_996_1158)">
                <path
                  d="M37.05 74.1C57.5121 74.1 74.1 57.5121 74.1 37.05C74.1 16.5878 57.5121 0 37.05 0C16.5878 0 0 16.5878 0 37.05C0 57.5121 16.5878 74.1 37.05 74.1Z"
                  fill="#F7931E"
                />
                <path
                  d="M50.4801 29.7086C44.3301 35.7486 38.1901 41.7886 32.0401 47.8286C31.9801 47.8886 31.9401 47.9686 31.8801 48.0286C31.8501 48.0286 31.8201 48.0286 31.7901 48.0286C29.6001 45.8686 27.4001 43.7086 25.2101 41.5386C24.6401 40.9686 24.1001 40.3786 23.6201 39.8686C24.8101 38.6186 26.0501 37.3286 27.3701 35.9386C28.9001 37.5586 30.4001 39.1386 31.9301 40.7586C36.9701 35.8086 41.8801 30.9786 46.8801 26.0586C47.1601 26.3686 47.4201 26.6786 47.7001 26.9586C48.5001 27.7486 49.3001 28.5386 50.1101 29.3286C50.2201 29.4386 50.3501 29.5286 50.4801 29.6186C50.4801 29.6486 50.4801 29.6786 50.4801 29.7086Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_996_1158">
                  <rect width="74.1" height="74.1" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="title-div">
            <div className="title-text">Username has been deleted</div>
          </div>
          <div className="div-block-7">
            <Link href="/signup/username">
              <a className="link-block w-inline-block">
                <div>Create a new Nickname</div>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="pic-div">
        <div className="bg-img">
          <Image src="/img5.png" alt="" layout="fill" objectFit="cover" />
        </div>
        <div className="pic-div-text">
          Get a Kakitoo <span className="bolded">Username</span> to hide your
          phone number when someone sends you Mpesa on Kakitoo.
        </div>
      </div>
    </div>
  );
}
