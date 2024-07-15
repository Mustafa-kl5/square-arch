import { getSquareData } from "../../services/square.service";
import { replaceText } from "../../services/square.service";
export default function Services(props) {
    const services = getSquareData();
    return (
        <div className="Warp-box1 our-service-section">
            {" "}
            <div className="spaceing">OUR SERVICES</div>
            {services.OurServices.map(function (element) {
                return (
                    <div className="services-wrap" key={element.id}>
                        <span
                            dangerouslySetInnerHTML={{
                                __html: replaceText(element.title),
                            }}
                        ></span>
                        <br />
                        <span
                            dangerouslySetInnerHTML={{
                                __html: replaceText(element.sub_title),
                            }}
                        ></span>
                    </div>
                );
            })}
        </div>
    );
}
