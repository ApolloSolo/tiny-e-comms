import { useState, useEffect } from "react";
import { Image } from "cloudinary-react";

const Home = () => {
  const [imageIds, setImageIds] = useState("");
  const [loading, setLoading] = useState(false);

  const loadImages = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/images");
      const data = await res.json();
      console.log(data);

      setImageIds(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadImages();
  }, []);

  return (
    <div>
      <nav>
        <h1>Home</h1>
      </nav>
      {loading
        ? <p>LOADING...</p>
        : <div>
            {imageIds &&
              imageIds.map((imageId, index) =>
                <Image
                  key={index}
                  cloudName="dilgi4bff"
                  publicId={imageId}
                  width="300"
                  height="200"
                  crop="scale"
                />
              )}
          </div>}
    </div>
  );
};

export default Home;