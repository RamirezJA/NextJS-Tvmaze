const Thumbnail = ({ imageUrl, caption }) => {
  return <div className="thumbnail">
      <img src={imageUrl} alt="thumbnail_image"/>
<h3 className="thumbnail_caption">{caption}</h3>
  </div>;
};

export default Thumbnail;
