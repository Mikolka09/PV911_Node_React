import React from "react";
import NpArea from "./npArea";
import NpCity from "./npCity";
import NpDepartament from "./npDepartament";

export default class NpContainer extends React.Component {

    render() {
        return (
            <div className="row">
                <div className="col-2">
                    <NpArea></NpArea>
                </div>
                <div className="col-2">
                    <NpCity></NpCity>
                </div>
                <div className="col-2">
                    <NpDepartament></NpDepartament>
                </div>
            </div>

        );
    }
}