import Nav from "../comps/Nav";

const Unknown = () => {
  return (
    <div className="body-div">
      <div className="_404-div">
        <Nav />
        <div>Privacy as a Service</div>
        <div className="_404-block">
          <div>404</div>
          <div className="divider" />
          <div>Page not Found</div>
        </div>
      </div>
    </div>
  );
};

export default Unknown;
