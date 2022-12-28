import React, { useState } from "react";

export default function TextForm(props) {
    const [text, setText] = useState("");

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    const handleCamelCase = () => {
        var ans = text.toLowerCase();
        let newText = ans.split(" ").reduce((s, c) => s + (" " + c.charAt(0).toUpperCase() + c.slice(1)));
        setText(newText);
        props.showAlert("Converted to camelcase!", "success");
    }
    const handleUpperClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    };

    const handleLowerClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success");
    };

    const handleClearClick = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    };


    const handleCopyClick = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to Clipboard!", "success");
    };

    const handleExtraSpacesClick = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    };


    return (
        <>
            <div
                className="container"
                style={{ color: props.mode === "dark" ? "white" : "#5f2c3e" }}
            // document key:value stored 
            >
                <h1 className="mb-4">{props.heading}</h1>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        value={text}
                        onChange={handleOnChange}
                        style={{
                            backgroundColor: props.mode === "dark" ? "#5f2c3e" : "white",
                            color: props.mode === "dark" ? "white" : "#5f2c3e",
                        }}
                        id="myBox"
                        rows="10"
                    ></textarea>
                </div>
                <button
                    disabled={text.length === 0}
                    className="btn btn-primary mx-3 my-3"
                    onClick={handleCamelCase}
                >
                    Convert to CamelCase
                </button>
                <button
                    disabled={text.length === 0}
                    className="btn btn-primary mx-3 my-3"
                    onClick={handleUpperClick}
                >
                    Convert to Uppercase
                </button>
                <button
                    disabled={text.length === 0}
                    className="btn btn-primary mx-3 my-3"
                    onClick={handleLowerClick}
                >
                    Convert to Lowercase
                </button>
                <button
                    disabled={text.length === 0}
                    className="btn btn-primary mx-3 my-3"
                    onClick={handleClearClick}
                >
                    Clear Textarea Text
                </button>
                <button
                    disabled={text.length === 0}
                    className="btn btn-primary mx-3 my-3"
                    onClick={handleCopyClick}
                >
                    Copy All Text
                </button>
                <button
                    disabled={text.length === 0}
                    className="btn btn-primary mx-3 my-3"
                    onClick={handleExtraSpacesClick}
                >
                    Remove Extra Spaces in text
                </button>
            </div>
            <div
                className="container my-3"
                style={{ color: props.mode === "dark" ? "white" : "#5f2c3e" }}
            >
                <h2>Your text summary</h2>
                <p>
                    {
                        text.split(/\s+/).filter((element) => {
                            return element.length !== 0;
                        }).length
                    }{" "}
                    words and {text.length} characters
                </p>
                <p>
                    {/* filter function return true then they consider for removing spaces for first time  */}
                    {/* calculation of reading time */}
                    {0.008 *
                        text.split(" ").filter((element) => {
                            return element.length !== 0;
                        }).length}{" "}
                    Minutes read
                </p>
                <h2>Preview Your Text </h2>
                <p>{text.length > 0 ? text : "Nothing to show preview!"}</p>
            </div>
        </>
    );
}
