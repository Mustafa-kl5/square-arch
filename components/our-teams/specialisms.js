import { replaceText } from "../../services/square.service";
export default function Specialisms(props) {
    return (
        <div className="warp-specla ">
            <div className="titel-specla">SPECIALISMS</div>
            {props.skill.map((item, index) => {
                return (
                    <div className="speclicem-spacing" key={index}>
                        <span
                            dangerouslySetInnerHTML={{
                                __html: replaceText(item),
                            }}
                        ></span>
                    </div>
                );
            })}
        </div>
    );
}
