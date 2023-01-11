
import { useContext } from "react";
import Image from "../../components/image/Image";
import { Context } from "../../Context";
import { getClass } from "../../utils";

const Photos = () => {
  const {allPhotos} = useContext(Context)
  
  const imageElements = allPhotos.map((img,i) => (
    <Image key={img.id} img={img} className={getClass(i)} />
  ))
  return (
    <div>
      <main className="photos">
        <h1>Images go here</h1>
        {imageElements}
      </main>
    </div>
  );
};

export default Photos;