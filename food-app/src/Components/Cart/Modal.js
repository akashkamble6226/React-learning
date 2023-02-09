import { React, Fragment } from "react";
import cssClasses from "./Modal.module.css";

import ReactDOM from "react-dom";
const Backdrop = (props) => {
  return <div className={cssClasses.backdrop} onClick={props.onClose}></div>;
};

const ModelOverlay = (props) => {
  return (
    <div className={cssClasses.modal}>
      <div className={cssClasses.content}>{props.children}</div>
    </div>
  );
};

const Model = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        document.getElementById("backdrop")
      )}
      {ReactDOM.createPortal(
        <ModelOverlay>{props.children}</ModelOverlay>,
        document.getElementById("backdrop")
      )}
    </Fragment>
  );
};

export default Model;
