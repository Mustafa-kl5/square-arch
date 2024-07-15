import TeamCard from "./team-card";
import { getSquareData } from "../../services/square.service";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function TeamCardContainer() {
    const { TeamMember } = getSquareData();
    const ListTeam = [];
    let element;
    const [isMobile, setIsMobile] = useState(false);

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
        if (!element) {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            element = $(".main-container-team").toArray()[0];
            $("#upClick").on("click", function () {
                if ($(element).scrollTop() > 0)
                    $(element).animate({
                        scrollTop: $(element).scrollTop() - 150,
                    });
            });

            $("#downClick").on("click", function () {
                if ($(element).prop("scrollHeight") > $(element).scrollTop())
                    $(element).animate({
                        scrollTop: $(element).scrollTop() + 150,
                    });
            });

            $("#prev").on("click", function () {
                const CardContainer = $(".card-container-team").toArray()[0];
                if ($($(CardContainer)).scrollLeft() > 0)
                    $(CardContainer).animate({
                        scrollLeft: `-=${$(CardContainer).width()}`,
                    });
            });

            $("#next").on("click", function () {
                const CardContainer = $(".card-container-team").toArray()[0];
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

    TeamMember.map((item, index) => {
        ListTeam.push(<TeamCard data={item} key={item.id} index={index} />);
    });

    const mobile = (
        <>
            <div className="w-100 h-100 position-relative">
                <button className="btn team-arrow-up" id="upClick">
                    <Image
                        className="arrow-image"
                        width={10}
                        height={10}
                        loader={() => "/image/up.png"}
                        src="/image/prev.png"
                        alt="prev"
                    />
                </button>
                <div className="main-container-team">
                    <div
                        className="card-container-team"
                        id="card-container-team"
                    >
                        {ListTeam}
                    </div>
                </div>
                <button className="btn" id="downClick">
                    <Image
                        className="arrow-image"
                        width={10}
                        height={10}
                        loader={() => "/image/down.png"}
                        src="/image/prev.png"
                        alt="next"
                    />
                </button>
            </div>
        </>
    );

    const desktop = (
        <>
            <div className="main-container-team">
                <div className="card-container-team">{ListTeam}</div>
            </div>
            <div className="button-holder">
                <div className=".card-container arrows-containers">
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
        <div className="d-flex justify-content-end land-team team-page">
            {isMobile ? mobile : desktop}
        </div>
    );
}
