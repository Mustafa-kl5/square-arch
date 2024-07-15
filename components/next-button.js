import Image from "next/image";

export default function NextButton(props) {
    return (
        <button className="next-button ">
            {props.buttonName}
            <Image
                width={10}
                height={10}
                loader={() => "/image/next.png"}
                src="/image/next.png"
                alt=""
            />
        </button>
    );
}
