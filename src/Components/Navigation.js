import React, { useRef } from "react";
import { CSVReader } from "react-papaparse";

function Navigation({ uploadFile, isValid, children }) {
  const buttonRef = useRef();
  function handleOpenDialog(e) {
    // Note that the ref is set async, so it might be null at some point
    if (buttonRef.current) {
      buttonRef.current.open(e);
    }
  }

  function handleOnFileLoad(data) {
    console.log("file load ---------------------------", data);
    isValid(true);
    uploadFile(data);
  }

  function handleOnError(err, file, inputElem, reason) {
    console.log("error ---------------------------", err);
    isValid(false);
  }

  function handleOnRemoveFile(data) {
    console.log("on remove file ---------------------------", data);
  }

  return (
    <>
      <CSVReader
        ref={buttonRef}
        onFileLoad={handleOnFileLoad}
        onError={handleOnError}
        noClick
        noDrag
        onRemoveFile={handleOnRemoveFile}
      >
        {({ file }) => (
          <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid d-flex justify-content-between align-items-center py-1">
              <h3 className="m-0">
                <span className="badge rounded-pill bg-light text-success">
                  {file && file.name}
                </span>
              </h3>
              <div className="buttons-container w-50 d-flex px-3">
                <button
                  className="btn btn-outline-success w-50 mx-3"
                  type="button"
                  onClick={handleOpenDialog}
                >
                  Browse file
                </button>
                {children}
              </div>
            </div>
          </nav>
        )}
      </CSVReader>
    </>
  );
}

export default Navigation;
