const Thumbnail = ({ imageUrl, caption }) => {
  return (
    <div className="thumbnail">
      <img src={imageUrl} alt="thumbnail_image" />
      <h4 className="thumbnail_caption">{caption}</h4>

      <style jsx>{`
        .thumbnail_image {
          width: 100%;
        }

        .thumbnail_caption {
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default Thumbnail;
