import { useContext } from "react";
import { ThemeContext } from "../App";
import classes from "./Profile.module.css";


export default function Profile() {

    const theme = useContext(ThemeContext);
    return (
        <>
            <div className={theme === "light" ? `${classes.light}` : `${classes.dark}`}>
                <h1>Profile</h1>
                <p>lorema ask sdklskdf sdlkasd sdfksm sdlkmslk sdkmweim mkl;iojfsldk soidjf'asdkl sdkiojngkoitkkkjh jdiusdj kdhfueukjhdocument.querySelector.
                    jjjjdfnj; dfnklkfj kkhhjfdopsd losdkf dl dflskdfonbe  ksdfipkdfklkj skdfl
                    jjksdjhisdfj ksdjkfd lskdjfasdij sdij;'awoefjsjdl isdjfosdfksdf
                </p>
            </div>
        </>
    );
}
