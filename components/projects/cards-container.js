import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getSquareData } from "../../services/square.service";
const Tabs = dynamic(() =>
    import("react-bootstrap/Tabs", {
        ssr: false,
    })
);
const Tab = dynamic(() =>
    import("react-bootstrap/Tab", {
        ssr: false,
    })
);
import ProjectCard from "./project-card";

export default function CardsContainer() {
    let elements = [];
    const { Project, ProjectOverview } = getSquareData();
    const privateListProject = [];
    const publicListProject = [];
    Project.map((element) => {
        if (element.privacy === "PRIVATE") {
            privateListProject.push(element);
        } else {
            publicListProject.push(element);
        }
    });
    const [isMobile, setIsMobile] = useState(false);
    let prevTab = "all";

    const prepareSizes = () => {
        if (window.innerHeight < window.innerWidth) {
            setIsMobile(false);
        } else {
            if (window.innerWidth <= 640) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        }
    };

    useEffect(() => {
        if (elements.length === 0) {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            elements = $(".card-container").toArray();
            $("#upClick").on("click", function () {
                const activeElement = elements.find((element) =>
                    $(element).parent().hasClass("show")
                );
                $(activeElement).animate({
                    scrollTop: $(activeElement).scrollTop() - 100,
                });
            });

            $("#downClick").on("click", function () {
                const activeElement = elements.find((element) =>
                    $(element).parent().hasClass("show")
                );
                $(activeElement).animate({
                    scrollTop: $(activeElement).scrollTop() + 100,
                });
            });

            $("#prev").on("click", function () {
                const CardContainer = $(".card-container")
                    .toArray()
                    .find((element) => $(element).parent().hasClass("show"));
                if ($($(CardContainer)).scrollLeft() > 0)
                    $(CardContainer).animate({
                        scrollLeft: `-=${$(CardContainer).width()}`,
                    });
            });

            $("#next").on("click", function () {
                const CardContainer = $(".card-container")
                    .toArray()
                    .find((element) => $(element).parent().hasClass("show"));
                if (
                    $(CardContainer).scrollLeft() <
                    $(CardContainer).prop("scrollWidth")
                ) {
                    $(CardContainer).animate({
                        scrollLeft: `+=${$(CardContainer).width()}`,
                    });
                }
            });
        }

        prepareSizes();
        window.addEventListener("resize", () => {
            prepareSizes();
        });
    });

    const tabs = (
        <>
            <Tabs defaultActiveKey="all" className=" tab-position">
                <Tab
                    eventKey="private"
                    className="animate__animated animate__fadeInRight tab-private"
                    title={ProjectOverview[0].private_text}
                >
                    <div className="card-container">
                        {privateListProject.map((element, index) => {
                            return <ProjectCard key={index} data={element} />;
                        })}
                    </div>
                </Tab>
                <Tab
                    eventKey="public"
                    className="animate__animated animate__fadeInRight tab-public"
                    title={ProjectOverview[0].public_text}
                >
                    <div className="card-container">
                        {publicListProject.map((element, index) => {
                            return <ProjectCard key={index} data={element} />;
                        })}
                    </div>
                </Tab>
                <Tab
                    eventKey="all"
                    title={ProjectOverview[0].all_text}
                    className="animate__animated animate__fadeInRight tab-all"
                >
                    <div className="card-container">
                        {Project.map((element, index) => {
                            return <ProjectCard key={index} data={element} />;
                        })}
                    </div>
                </Tab>
            </Tabs>
        </>
    );

    const mobile = (
        <>
            <button className="btn" id="upClick">
                <Image
                    className="arrow-image"
                    width={10}
                    height={10}
                    loader={() => "/image/up.png"}
                    src="/image/prev.png"
                    alt="prev"
                />
            </button>
            {tabs}
            <button className="btn" id="downClick">
                <Image
                    className="arrow-image"
                    width={10}
                    height={10}
                    loader={() => "/image/down.png"}
                    src="/image/prev.png"
                    alt="prev"
                />
            </button>
        </>
    );

    const desktop = (
        <>
            {tabs}
            <div className="button-holder">
                <div className="arrows-containers">
                    <button className="btn button-nextandprev" id="prev">
                        <Image
                            className="arrow-image"
                            width={15}
                            height={20}
                            loader={() => "/image/prev.png"}
                            src="/image/prev.png"
                            alt="prev"
                        />
                    </button>
                    <span className="arrow-text">NEXT</span>
                    <button className="btn button-nextandprev" id="next">
                        <Image
                            className="arrow-image"
                            width={15}
                            height={20}
                            loader={() => "/image/next.png"}
                            src="/image/next.png"
                            alt="next"
                        />
                    </button>
                </div>
            </div>
        </>
    );
    return (
        <div className="project-container carousel-holder-card d-flex flex-column align-items-end">
            {isMobile ? mobile : desktop}
        </div>
    );
}
