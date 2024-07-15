import {  getSquareData } from "../../services/square.service";
export default function ContactSocial(props) {
  const socialContact=getSquareData()
  return (
    <div className="Wrap-box1">
      {socialContact.SocialMedia.map((item,index) => {
        return (
          <div className="Spacing-social" key={index}>
            <span style={{ color: "rgb(91, 91, 91)" }}>{item.title} </span>
            <br />
            <a href={item.link} className="social-link">{item.username}</a>
          </div>
        );
      })}
    </div>
  );
}
