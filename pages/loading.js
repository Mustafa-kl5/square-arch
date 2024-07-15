import Image from "next/image";
import logo from "../public/image/logo.jpg";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { getSquareData, getSquareTitle } from "../services/square.service";

export default function Home() {
    const [size, setSize] = useState(450);
    const router = useRouter();
    const { Main } = getSquareData();

    useEffect(() => {
        if (window.innerWidth <= 640) {
            setSize(300);
        } else {
            setSize(450);
        }
        window.addEventListener("resize", () => {
            if (window.innerWidth <= 640) {
                setSize(300);
            } else {
                setSize(450);
            }
        });

        setTimeout(() => {
            //const image = document.getElementById("image");
            //const text = document.getElementById("text");
            //image.className = image?.className.replace(
            //    "animate__fadeIn",
            //    "animate__fadeOut"
            //);
            //text.className = text?.className.replace(
            //    "animate__fadeInDown",
            //    "animate__fadeOut"
            //);
        }, 3800);
        setTimeout(() => {
            //router.push("/main", "/main", {shallow: true});
        }, 4000);
    }, []);

    return (
        <>
            <Head>
                <title>{`Welcome Page | ${getSquareTitle()}`}</title>
            </Head>
            <div className="loader-page wrap">
                <div
                    className="image-holder animate__animated animate__fadeIn"
                    id="image"
                >
                    <Image
                        src={Main[0].loading_image}
                        loader={() => Main[0].loading_image}
                        width={size}
                        height={size}
                        alt={Main[0].loading_image}
                    />
                </div>
                <div
                    className="text-holder animate__animated animate__fadeInDown"
                    id="text"
                >
                    <div className="webtitel">{Main[0].title}</div>
                    <div className="loading-location">{Main[0].location}</div>
                </div>
            </div>
        </>
    );
}
