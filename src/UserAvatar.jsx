import "./UserAvatar.css";

export default function UserAvatar() {
  return (
    <div className="UserAvatar">
      <div className="row d-flex justify-content-center mt-5 mt-md-5 mt-lg-5 ">
        <div className="col-3 col-md-3 col-lg-2 ">
          <img src="/avatar/Profile pic.png" alt="/" className="img-fluid" />
        </div>
      </div>
    </div>
  );
}
