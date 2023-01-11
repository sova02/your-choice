import Header from "../header";
import React from "react";
import './styles.sass'

export default function Body(
    { content }
) {
    return (
        <div className="body">
            <Header />

            <div className="-content">
                {content}
            </div>
            <div className="-background"/>
        </div>
    )
}