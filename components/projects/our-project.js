import { getSquareData } from "../../services/square.service";
import ScrollerText from "../../shared/scroller-text";
export default function OurProject(props) {
  const ourProject = getSquareData();
  return (
    <>
      <div>
        
        <div className="title">{ourProject.ProjectOverview[0]?.title}</div>
        <div className="sup-title">
          {ourProject.ProjectOverview[0].sub_description}
        </div>
        <div className="decription">
          <ScrollerText
            descriptionScrolText={ourProject.ProjectOverview[0]?.description}
          />
        </div>
      </div>
     
    </>
  );
}
