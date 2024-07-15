import ScrollerText from "../../shared/scroller-text";
import Specialisms from "./specialisms";
import ProjectName from "../projects/project-name";
import { getSquareData } from "../../services/square.service";
import NextButton from "../next-button";
import { map, keyBy } from "lodash";
import { useRouter } from "next/router";

const getNextPerson = (id) => {
    const { TeamMember } = getSquareData();
    const ids = map(TeamMember, "id");
    const data = keyBy(TeamMember, "id");
    let nextId = ids.indexOf(id) + 1;
    nextId = nextId >= ids.length ? 0 : nextId;
    return {
        id: ids[nextId],
        name: (data[ids[nextId]].name || "").replace(/\s/g, "_"),
    };
};



export default function PersonInfo({ team }) {
    const nextId = getNextPerson(team.id).id;
    const teamName = getNextPerson(team.id).name;
    const router = useRouter();
    function clicknext() {
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
            router.push(`/our-team/${nextId}/${teamName}`, `/our-team/${nextId}/${teamName}`, {
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
        }, 1000);
    }
    return (
        <>
            <div className="animate__animated animate__fadeIn" id="information">
                <ProjectName projectname={team.name} placeyear={team.major} />
                <div className="Wrap">
                    <ScrollerText descriptionScrolText={team.description} />
                    <Specialisms skill={team.specialists} />
                </div>
            </div>
            <div
                id="nextbutton"
                className="global-next-position animate__animated animate__fadeIn"
                onClick={clicknext}
            >
                <NextButton key={nextId} buttonName="NEXT" id={nextId} />
            </div>
        </>
    );
}
