
export default function Person(props) {
  return (
    <div className="warp-2">
      <div className="name">{props.name}</div>
      <div className="major">{props.major}</div>
    </div>
  );
}
