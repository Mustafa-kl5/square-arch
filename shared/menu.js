import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Menu() {
    const [show, setShown] = useState(true);
    const [isMobile, setIsMobile] = useState(false);
    const router = useRouter();

    const windowSize = () => {
        if (
            window.innerWidth <= 640 &&
            window.innerHeight > window.innerWidth
        ) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    };

	const windowClick = (event) => {
		event.stopPropagation();
		event.preventDefault();
		if (event.target.id === 'backdrop') {
			onClickButton();
		}
	}

    useEffect(() => {
        windowSize();
        window.addEventListener("resize", windowSize);
        window.addEventListener("click", windowClick);

		return () => {
			window.removeEventListener('resize', windowSize);
			window.removeEventListener('click', windowClick);
		}
    });

    function onClickButton() {
        const backdrop = document.getElementById("backdrop");
        const colorChange = document.getElementById("outer-button");
        setShown(!show);
        if (typeof window === "object" && show) {
            if (backdrop && colorChange) {
                backdrop.className = backdrop?.className.replace(
                    "d-none",
                    "d-flex"
                );
                colorChange.className = colorChange?.className.replace(
                    "color",
                    "change-color"
                );
            }
        } else {
            if (backdrop && colorChange) {
                backdrop.className = backdrop?.className.replace(
                    "d-flex",
                    "d-none"
                );
                colorChange.className = colorChange?.className.replace(
                    "change-color",
                    "color"
                );
            }
        }
        const mobilemenu = document.getElementById("mobilemenu");

        if (mobilemenu)
            if (!show) {
                mobilemenu.className = mobilemenu?.className.replace(
                    "mobile-menu-holder-show",
                    "mobile-menu-holder-unshow"
                );
            } else {
                mobilemenu.className = mobilemenu?.className.replace(
                    "mobile-menu-holder-unshow",
                    "mobile-menu-holder-show"
                );
            }
    }

    const changePath = (newPath) => {
        const path = router.pathname;
        if (newPath == path) {
            return;
        }
        const animatedItem = document.getElementById("animation-section");
        const carousel = document.getElementById("carousel");
        const leftText = document.getElementById("left-text");
        const video = document.getElementById("video");
        const rightText = document.getElementById("right-text");
        if (path === "/main") {
            if (animatedItem && carousel && leftText && video && rightText) {
                leftText.className = leftText?.className.replace(
                    "animate__fadeIn animate__delay-1s",
                    "animate__fadeOut"
                );
                video.className = video?.className.replace(
                    "animate__fadeIn",
                    "animate__fadeOut"
                );
                rightText.className = rightText?.className.replace(
                    "animate__fadeIn animate__delay-1s",
                    "animate__fadeOut"
                );
            }

            setTimeout(() => {
                router.push(newPath, newPath, {shallow: true});
            }, 700);
        } else {
            if (animatedItem && carousel) {
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
                router.push(newPath, newPath, {shallow: true});
            }, 700);
        }
    };

    if (isMobile) {
        return (
            <button
                id="outer-button"
                type="button"
                className="mobile-menu  shadow-lg color "
                onClick={onClickButton}
            >
				<span>
					MENU
				</span>
				<div id="mobilemenu" className="mobile-menu-holder-unshow animate__animated animate__fadeInBottomLeft">
					<div
						className="mobile-menu-holder-container position-relative"
					>
						<div className="over-side animate__animated animate__fadeIn animate__delay-1s">
							<div
								className="rout-button1"
								onClick={() => changePath("/projects")}
							>
								PROJECTS
							</div>
						</div>
						<div className="under-side animate__animated animate__fadeIn animate__delay-1s">
							<div
								className="rout-button1"
								onClick={() => changePath("/contact")}
							>
								CONTACT
							</div>
						</div>
						<div className="left-side animate__animated animate__fadeIn animate__delay-1s">
							<div
								className="rout-button1"
								onClick={() => changePath("/our-brand")}
							>
								OUR BRAND
							</div>
						</div>
						<div className="right-side animate__animated animate__fadeIn animate__delay-1s">
							<div
								className="rout-button1"
								onClick={() => changePath("/our-team")}
							>
								OUR TEAM
							</div>
						</div>
					</div>
				</div>
            </button>
        );
    } else {
        return (
            <div
                className="PopupMenu animate__animated animate__fadeIn"
                id="menu"
            >
                <button
                    id="outer-button"
                    type="button"
                    aria-haspopup="true"
                    className="PopupMenu__Button shadow-lg color"
                    onClick={onClickButton}
                >
                    MENU
                    <div className={`PopupMenu__Menu -over`} aria-hidden={show}>
                        <div
                            className="rout-button"
                            onClick={() => changePath("/projects")}
                        >
                            PROJECTS
                        </div>
                    </div>
                    <div
                        className={`PopupMenu__Menu -under`}
                        aria-hidden={show}
                    >
                        <div
                            className="rout-button"
                            onClick={() => changePath("/contact")}
                        >
                            CONTACT
                        </div>
                    </div>
                    <div
                        id="right"
                        className={`PopupMenu__Menu -right`}
                        aria-hidden={show}
                    >
                        <div
                            className="rout-button"
                            onClick={() => changePath("/our-brand")}
                        >
                            OUR BRAND
                        </div>
                    </div>
                    <div
                        className={`left-land PopupMenu__Menu -left `}
                        id="left"
                        aria-hidden={show}
                    >
                        <div
                            className="rout-button "
                            onClick={() => changePath("/our-team")}
                        >
                            OUR TEAM
                        </div>
                    </div>
                </button>
            </div>
        );
    }
}
