import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useDropzone } from "react-dropzone";

const baseStyle = {
  display: "flex",
  height: "60vh",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#eeeeee",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "#bdbdbd",
  transition: "border .3s ease-in-out",
};

function MyDropzone(props) {
  //hooks
  const [files, setFiles] = useState([]);
  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject, isDragAccept]
  );

  const onDrop = useCallback((acceptedFiles) => {
    props.handleFiles(acceptedFiles);
    setFiles(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );
  }, []);

  const thumbs = files.map((file) => (
    <div key={file.name} className=" dz-preview">
      <img src={file.preview} alt={file.name} className="dz-image" />
    </div>
  ));

  //ComponentWillUnmount
  useEffect(
    () => () => {
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({ onDrop, accept: "image/jpeg, image/png" });

  return (
    <div className="dropzone">
      <div {...getRootProps({ style })}>
        {thumbs.length > 0 ? (
          <aside>{thumbs}</aside>
        ) : (
          <>
            <input {...getInputProps()} />
            {isDragActive ? (
              <p>Drop it like it's hot!</p>
            ) : (
              <div className="dropdown-icon-area">
                <i className="fas fa-cloud-upload-alt"></i>
                <p>Drag 'n' drop some files here, or click to select files</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default MyDropzone;
