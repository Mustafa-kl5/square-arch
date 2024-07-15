import { replaceText } from "../services/square.service";

export default function ScrollerText(props) {
    return (
        <div className="Text-Box ">
            <div className="Text-Box2">
                <span
                    dangerouslySetInnerHTML={{
                        __html: replaceText(props.descriptionScrolText),
                    }}
                ></span>
            </div>
        </div>
    );
}
