import NextButton from "../next-button";
import ScrollerText from "../../shared/scroller-text";
import ProjectInfo from "./project-info";
import ProjectName from "./project-name";
import { getSquareData } from "../../services/square.service";
import { map, keyBy } from "lodash";
import { useRouter } from "next/dist/client/router";

const getNextProject = (id, type) => {
    const { Project: projects } = getSquareData();
    //const projects = Project; //filter(Project, (item) => item.privacy === type);
    const data = keyBy(projects, "id");
    const ids = map(projects, "id");
    let nextId = ids.indexOf(id) + 1;
    nextId = nextId >= ids.length ? 0 : nextId;
    return {
        id: ids[nextId],
        title: data[ids[nextId]].title.replace(/\s/g, "_"),
    };
};
export default function ProjectContainer({ project }) {
    const nextId = getNextProject(project.id, project.privacy).id;
    const projectTitle = getNextProject(project.id, project.privacy).title;
    const router = useRouter();
    function clickNext() {
        const item = document.getElementById("information");
        const button = document.getElementById("nextbutton");
        const carousel = document.getElementById("carousel-container");
        const nextImages = document.getElementById("next-image");
        const prevImages = document.getElementById("prev-image");
        const middel = document.getElementById("middel");
        if (item && button && carousel && nextImages && prevImages && middel) {
            item.className = item?.className.replace(
                "animate__animated animate__fadeIn",
                "animate__animated animate__fadeOut"
            );
            button.className = button?.className.replace(
                "animate__animated animate__fadeIn",
                "animate__animated animate__fadeOut"
            );
            carousel.className = carousel?.className.replace(
                "animate__animated animate__fadeInRight",
                "animate__animated animate__fadeOutRight"
            );
            nextImages.className = nextImages?.className.replace(
                "animate__animated animate__fadeInRight",
                "animate__animated animate__fadeOutRight"
            );
            prevImages.className = prevImages?.className.replace(
                "animate__animated animate__fadeInRight",
                "animate__animated animate__fadeOutRight"
            );
            middel.className = middel?.className.replace(
                "animate__animated animate__fadeInRight",
                "animate__animated animate__fadeOutRight"
            );
        }

        setTimeout(() => {
            router.push(`/projects/${nextId}/${projectTitle}`, `/projects/${nextId}/${projectTitle}`, {
                shallow: true,
            });
            if (
                item &&
                button &&
                carousel &&
                nextImages &&
                prevImages &&
                middel
            ) {
                item.className = item?.className.replace(
                    "animate__animated animate__fadeOut",
                    "animate__animated animate__fadeIn"
                );
                button.className = button?.className.replace(
                    "animate__animated animate__fadeOut",
                    "animate__animated animate__fadeIn"
                );
                carousel.className = carousel?.className.replace(
                    "animate__animated animate__fadeOutRight",
                    "animate__animated animate__fadeInRight"
                );
                nextImages.className = nextImages?.className.replace(
                    "animate__animated animate__fadeOutRight",
                    "animate__animated animate__fadeInRight"
                );
                prevImages.className = prevImages?.className.replace(
                    "animate__animated animate__fadeOutRight",
                    "animate__animated animate__fadeInRight"
                );
                middel.className = middel?.className.replace(
                    "animate__animated animate__fadeOutRight",
                    "animate__animated animate__fadeInRight"
                );
            }
        }, 500);
    }

    return (
        <>
            <div id="information" className="animate__animated animate__fadeIn">
                <ProjectName
                    projectname={project.title}
                    placeyear={project.location + " " + project.date}
                />
                <div className="Wrap-text">
                    <ScrollerText descriptionScrolText={project.description} />
                    <ProjectInfo
                        client={project.client}
                        facility={project.facility}
                        size={project.size}
                        status={project.status}
                    />
                </div>
            </div>
            <div
                id="nextbutton"
                className="global-next-position animate__animated animate__fadeIn"
                onClick={clickNext}
            >
                <NextButton
                    key={nextId}
                    buttonName="NEXT PROJECT"
                    id={nextId}
                />
            </div>
        </>
    );
}
