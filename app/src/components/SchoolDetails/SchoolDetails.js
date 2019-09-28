import React from "react";
import HeaderMenu from "../HeaderMenu";
import FooterCredits from "../FooterCredits";
import DetailWrapper from "./DetailWrapper"
import SchoolCard from "../SchoolDetails/SchoolCard"
import "./SchoolDetailsLayout.css";

const SchoolDetails = () => {
    return (
        <div className="Layout">
            <HeaderMenu />
            <DetailWrapper>
                <SchoolCard/>
            </DetailWrapper>
            <FooterCredits />
        </div>
    );
};

export default SchoolDetails;
