

export default function Social(props) {
  return (
    <div className="wrap-box-social">
      <div className="Contact-Text">Social</div>
      <div className="wrap-box-A">
        <div className="instagram-Text"> {props.instagram}</div>
        <div className="facebook-Text">{props.facebook}</div>
      </div>
      <div className="wrap-box-B">
        <div className="linkedin-Text">{props.linkedin}</div>
        <div className="twitter-Text">{props.twitter}</div>
      </div>
    </div>
  );
}
