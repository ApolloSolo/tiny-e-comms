import { useState } from "react";
import PreviewImageUpload from "../components/PreviewImageUpload";
import SelectDropdown from "../components/SelectDropdown";
import Auth from "../utils/auth";

const Upload = () => {
  const userLoggedIn = Auth.loggedIn();
  const userToken = Auth.getToken();

  if (!userLoggedIn) {
    window.location.assign("/");
  }

  const [formData, setFormData] = useState({
    name: "",
    price: ""
  });

  const [category, setCategory] = useState(null)

  const [fileInput, setFileInput] = useState("");
  const [previewSource, setPreviewSource] = useState("");
  const [selectedFile, setSelectedFile] = useState("");
  const [uploadedUrls, setUploadedUrls] = useState([]);
  const [submitProdError, setSubmitProdError] = useState(null);

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
      const response = await fetch("/api/cloud/upload", {
        method: "POST",
        body: JSON.stringify({ data: image }),
        headers: {
          Authorization: `Bearer ${userToken}`,
          "Content-Type": "application/json"
        }
      });
      setFileInput("");
      setPreviewSource("");

      const urlData = await response.json();
      setUploadedUrls(oldData => [...oldData, urlData]);
      console.log(uploadedUrls);
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

  const onChange = event => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const submitProductData = async e => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/products/${category}/add`, {
        method: "POST",
        body: JSON.stringify({
          name: formData.name,
          price: formData.price,
          url: uploadedUrls
        }),
        headers: {
          Authorization: `Bearer ${userToken}`,
          "Content-Type": "application/json"
        }
      });

      const data = await response.json();

      if (response.ok) {
        window.location.assign("/");
      } else throw new Error(data.error);
    } catch (error) {
      setSubmitProdError(error.message);
    }
  };

  return (
    <div className="p-4">
      <div className="border-[#00273d73] border-2 p-4 rounded-lg shadow-md dark:bg-gray-800 dark:text-[#fdf8ad]">
        <h2 className="text-center font-bold mb-4">Choose An Image Of Your Product</h2>
        <div className="flex flex-col justify-center sm:flex-row">
          <form onSubmit={handleSubmitFile} className="flex flex-col">
            <input
              type="file"
              name="image"
              onChange={handleFileInput}
              value={fileInput}
              className="font-semibold mt-4"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold sm:py-2 sm:px-4 sm:mx-2 sm:mt-12 my-4 py-2 rounded"
            >
              Upload
            </button>
          </form>
          <div className="w-full bg-gray-200  flex justify-center p-6 rounded-sm max-w-lg sm:ml-12">
            <PreviewImageUpload source={previewSource} />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-xl border-[#00273d73] border-2 py-8 px-4 mt-4 rounded-lg shadow-md dark:bg-gray-800 dark:text-[#fdf8ad]">
        <h2 className="text-center font-bold mb-4">Submit Product Details</h2>
        <form className="mt-6">
          <div className="mb-2">
            <label
              for="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Product Name
            </label>
            <input
              type="text"
              name="name"
              onChange={onChange}
              required
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              for="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Product Price
            </label>
            <input
              type="number"
              min={0.01}
              step={0.01}
              name="price"
              onChange={onChange}
              required
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <SelectDropdown setCategory={setCategory}/>
          <button
            onClick={submitProductData}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </form>
      </div>

      <div className="mt-6">
        <h2 className="text-center font-bold mb-4">Images To Submit</h2>
        <div className="flex flex-wrap justify-evenly mt-4">
          {uploadedUrls
            ? uploadedUrls.map((url, index) =>
                <PreviewImageUpload source={url} key={index} />
              )
            : false}
        </div>
      </div>

      {submitProdError &&
        <p className="text-center mt-4 font-bold text-red-600">
          {submitProdError}
        </p>}
    </div>
  );
};

export default Upload;
