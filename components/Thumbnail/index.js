import ThumbnailStyles from './styles';
import Link from 'next/link';

const Thumbnail = ({
  imageUrl = 'https://via.placeholder.com/210x295?text=?',
  caption,
  href = '',
  as = '',
}) => {
  return (
    <div className="thumbnail">
      <Link href={href} as={as}>
        <a>
          <img src={imageUrl} alt="thumbnail_image" />
          <h4 className="thumbnail_caption">{caption}</h4>
        </a>
      </Link>

      <style jsx>{ThumbnailStyles}</style>
    </div>
  );
};

export default Thumbnail;
