import Link from "next/link";

const Footer = () => {
  return (
    <div className="footer">
      <div href="#" className="footer-links w-inline-block">
        © 2022 Kakitoo Ltd. All rights reserved.
      </div>
      <div className="left-footer-side">
        <Link href="/terms-of-service">
          <a className="footer-links w-inline-block">
            <div>Terms of Service</div>
          </a>
        </Link>
        <Link href="/privacy-policy">
          <a className="footer-links w-inline-block">
            <div>Privacy Policy</div>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
