

export default function ContactNumEmail(props) {
  return (
    <div className="wrap-box-footer">
      <div className="Contact-Text">Contact</div>
      <div className="Call-Text">
        Call <span style={{ color: "gray" }}>{props.CallNum}</span>
      </div>
      <div className="Email-Text">
        Email <span style={{ color: "gray" }}>{props.Email}</span>
      </div>
    </div>
  );
}
