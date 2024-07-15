import React, { Component } from "react";
import ContactNumEmail from "./contact-num-email";
import Address from "./address";
import Social from "./social";
import CopyRight from "./copy-right";
import { getSquareData } from "../services/square.service";

export default function Footer(props) {
    const squareData = getSquareData();
    return (
        <div className="Footer-Box animate__animated animate__fadeIn">
            <CopyRight
                year={
                    squareData?.Contact
                        ? squareData?.Contact[0]?.copy_right
                        : 2022
                }
            />
        </div>
    );
}
