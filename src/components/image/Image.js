

const Image = ({img,className}) => {
  return (
    <div className={`${className} image-container`}>
      <img src={img} alt="" />
    </div>
  );
}

export default Image;
