

const Image = ({img,className}) => {
  return (
    <div className={`${className} image-container`}>
      <img className="image-grid" src={img} alt="" />
    </div>
  );
}

export default Image;
