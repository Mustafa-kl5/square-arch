import { useRouter } from "next/router";
import { getSquareData } from "../services/square.service";
import { replaceText } from "../services/square.service";

export default function Header() {
    const { Main } = getSquareData();
    const router = useRouter();
    function handelClick() {
        const path = router.pathname;
        if (path === "/main") {
            return;
        }
        const animatedItem = document.getElementById("animation-section");
        const carousel = document.getElementById("carousel");
        if (carousel && animatedItem) {
            animatedItem.className = animatedItem?.className.replace(
                "animate__fadeIn",
                "animate__fadeOut"
            );
            carousel.className = carousel?.className.replace(
                "animate__fadeInRight",
                "animate__fadeOutRight"
            );
        }
        setTimeout(() => {
            router.push("/main", "/main", {shallow: true});
        }, 700);
    }

    return (
        <a
            id="head"
            className="link-for-header animate__animated animate__fadeIn"
            onClick={handelClick}
        >
            <div className="landscape Header-Box ">
                <span
                    dangerouslySetInnerHTML={{
                        __html: replaceText(Main[0]?.logo_text),
                    }}
                ></span>
            </div>
        </a>
    );
}
