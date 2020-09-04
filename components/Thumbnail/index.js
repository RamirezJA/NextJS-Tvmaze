import ThumbnailStyles from './styles';

const Thumbnail = ({ imageUrl, caption }) => {
  return (
    <div className="thumbnail">
      <img src={imageUrl} alt="thumbnail_image" />
      <h4 className="thumbnail_caption">{caption}</h4>

      <style jsx>{ThumbnailStyles}</style>
    </div>
  );
};

export default Thumbnail;
