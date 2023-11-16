import "./UserAvatar.css";

export default function UserAvatar() {
  return (
    <div className="UserAvatar">
      <div className="row d-flex justify-content-center">
        <div className="col-2 col-md-2 col-lg-2 userAvatar-box ">
          <img src="/avatar/Profile pic.png" alt="/" className="img-fluid" />
        </div>
      </div>
    </div>
  );
}
