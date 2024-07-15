import { getSquareData } from "../../services/square.service";
import ScrollerText from "../../shared/scroller-text";
export default function OurTeam() {
  const ourTeam = getSquareData();
  return (
    <>
      <div className="title">{ourTeam.TeamOverview[0].title}</div>
      <div className="sup-title">{ourTeam.TeamOverview[0].sub_description}</div>
      <div className="decription">
        <ScrollerText
          descriptionScrolText={ourTeam.TeamOverview[0].description}
        />
      </div>
    </>
  );
}
