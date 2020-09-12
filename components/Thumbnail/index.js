import Link from 'next/link';

const Thumbnail = ({
  imageUrl = 'https://via.placeholder.com/210x295?text=?',
  caption,
  href = '',
  as = '',
  small = false,
}) => {
  return (
    <div className="thumbnail">
      <Link href={href} as={as}>
        <a>
          <img src={imageUrl} alt="thumbnail_image" />
          <h4 className="thumbnail_caption">{caption}</h4>
        </a>
      </Link>

      <style jsx>{`
        .thumbnail_image {
          width: ${small ? '100px' : '100%'};
        }

        .thumbnail_caption {
          text-align: center;
          padding: 10px;
        }
      `}</style>
    </div>
  );
};

export default Thumbnail;
