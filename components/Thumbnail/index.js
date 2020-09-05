import ThumbnailStyles from './styles';

const Thumbnail = ({ imageUrl = 'https://via.placeholder.com/210x295?text=?', caption }) => {
  return (
    <div className="thumbnail">
      <img src={imageUrl} alt="thumbnail_image" />
      <h4 className="thumbnail_caption">{caption}</h4>

      <style jsx>{ThumbnailStyles}</style>
    </div>
  );
};

export default Thumbnail;
