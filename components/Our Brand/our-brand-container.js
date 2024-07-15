import ScrollerText from "../../shared/scroller-text";
import Services from "./services";
import { getSquareData } from "../../services/square.service"
import ProjectName from "../projects/project-name";
export default function OurBrandContainer() {
  const brand = getSquareData();
  return (
    <>
      <ProjectName
        projectname={brand.Brand[0]?.title}
        placeyear={brand.Brand[0]?.location}
      />
      <div className="Wrap">
        <ScrollerText descriptionScrolText={brand.Brand[0]?.description} />
        <Services />
      </div>
    </>
  );
}
