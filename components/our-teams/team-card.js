import { useRouter } from "next/router";

export default function TeamCard({ data, index }) {
    const path = `/our-team/${data.id}/${(data?.name || "").replace(
        /\s/g,
        "_"
    )}`;
    const router = useRouter();
    function onSelect() {
        const carousel = document.getElementById("carousel");
        const item = document.getElementById("animation-section");
        if (carousel && item) {
            carousel.className = carousel?.className.replace(
                "animate__fadeIn",
                "animate__fadeOut"
            );
            item.className = item?.className.replace(
                "animate__fadeInRight ",
                "animate__fadeOutRight"
            );
        }

        setTimeout(() => {
            router.push(path, path, {shallow: true});
        }, 700);
    }
    const getRandomInt = () => {
        return Math.floor(Math.random() * 3);
    };
    return (
        <a
            className={`link card-link ${index === 0 ? "first-element" : ""}`}
            onClick={onSelect}
        >
            <div
                className={`card-Box-team animate__animated animate__fadeIn animate__delay-${getRandomInt()}s`}
            >
				 <div className="info-over-image-team" id="text-over">
                    <div>{data.name}</div>
                    <div className="fw-bold">{data.major}</div>
                </div>
                <div
                    className="card-team-image"
                    style={{ backgroundImage: `url(${data.main_image})` }}
                ></div>
            </div>
        </a>
    );
}
