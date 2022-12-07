import { useState } from "react";

const Upload = () => {
  const [fileInput, setFileInput] = useState("");
  const [previewSource, setPreviewSource] = useState("");
  const [selectedFile, setSelectedFile] = useState("");

  const handleFileInput = e => {
    const file = e.target.files[0];
    previewFile(file);
    setSelectedFile(file);
    setFileInput(e.target.value);
  };

  const handleSubmitFile = e => {
    e.preventDefault();
    if (!selectedFile) return;

    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    reader.onloadend = () => {
      uploadImage(reader.result);
    };

    reader.onerror = () => {
      console.log("Error");
    };
  };

  const uploadImage = async image => {
    try {
      await fetch("/api/upload", {
        method: "POST",
        body: JSON.stringify({ data: image }),
        headers: { "Content-Type": "application/json" }
      });
      setFileInput("");
      setPreviewSource("");
    } catch (error) {
      console.log(error);
    }
  };

  const previewFile = file => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  return (
    <div>
      <form onSubmit={handleSubmitFile}>
        <input
          type="file"
          name="image"
          onChange={handleFileInput}
          value={fileInput}
        />
        <button type="submit">Upload</button>
      </form>
      {previewSource && <img src={previewSource} style={{ height: "300px" }} />}
    </div>
  );
};

export default Upload;
