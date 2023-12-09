import { useState } from "react";
import NavBar from "./components/nav";
import HumanVerifiy from "./components/humanVerify";
import Calculating from "./components/calculating";

export default function Calculator() {
    const [verifiedYear, changeYear] = useState(0);
    const [humanVerified, updateVerify] = useState(false);

    return (
        <>
            <NavBar />
            { humanVerified ? <Calculating verifiedYear={verifiedYear} /> : <HumanVerifiy updateVerify={updateVerify} changeYear={changeYear} /> }
        </>
    );
}