import { replaceText } from "../../services/square.service";

export default function ProjectInfo(props) {
    return (
        <div className="Wrap-info ">
            <div className="Spacing">
                Client
                <br />
                <span style={{ color: "rgb(181, 181, 181)" }}>
                    <span
                        dangerouslySetInnerHTML={{
                            __html: replaceText(props.client),
                        }}
                    ></span>
                </span>
            </div>
            <div className="Spacing">
                Facility <br />
                <span style={{ color: "rgb(181, 181, 181)" }}>
                    <span
                        dangerouslySetInnerHTML={{
                            __html: replaceText(props.facility),
                        }}
                    ></span>
                </span>
            </div>
            <div className="Spacing">
                Size <br />
                <span style={{ color: "rgb(181, 181, 181)" }}>
                    <span
                        dangerouslySetInnerHTML={{
                            __html: replaceText(props.size),
                        }}
                    ></span>
                </span>
            </div>
            <div className="Spacing">
                Status <br />
                <span style={{ color: "rgb(181, 181, 181)" }}>
                    <span
                        dangerouslySetInnerHTML={{
                            __html: replaceText(props.status),
                        }}
                    ></span>
                </span>
            </div>
        </div>
    );
}
