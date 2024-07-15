export default function Address(props) {
  return (
    <div className="wrap-box-footer">
      <div className="Contact-Text">Address</div>
      <div className="Address-Text">
        <span style={{ color: "gray" }}>{props.Address}</span>
      </div>
    </div>
  );
}
