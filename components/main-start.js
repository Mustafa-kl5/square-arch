import { useEffect, useRef } from "react";
import { replaceText } from "../services/square.service";

export default function MainStart({ children, data }) {
	const video = useRef();

	useEffect(() => {
		video.current.play();
	}, []);

    
	return (
        <div className="wrap-box">
            <div
                className="Left-Text animate__animated animate__fadeIn animate__delay-1s "
                id="left-text"
            >
                <span
                    dangerouslySetInnerHTML={{
                        __html: replaceText(data.description_1),
                    }}
                ></span>
            </div>

            <div
                className="Image-box animate__animated animate__fadeIn "
                id="video"
            >
                <video
					ref={video}
                    width={"100%"}
                    height={"100%"}
                    src={data.video}
                    muted
                    autoPlay={"autoplay"}
                    loop
					playsInline
					preload="auto"
                ></video>
            </div>

            <div
                className="Right-Text animate__animated animate__fadeIn animate__delay-1s"
                id="right-text"
            >
                <span
                    dangerouslySetInnerHTML={{
                        __html: replaceText(data.description_2),
                    }}
                ></span>
            </div>
        </div>
    );
}
