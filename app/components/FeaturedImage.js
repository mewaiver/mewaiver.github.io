import Image from 'next/image';

export default function FeaturedImage({ post }) {
  if (!post.featuredImage) return null;

  return <figure className={`featured-image${post.type === 'profile' ? ' featured-image--profile' : ''}`}>
    <div className="featured-image__frame">
      <Image
        src={post.featuredImage}
        alt={post.imageAlt || ''}
        fill
        sizes="(max-width: 780px) calc(100vw - 36px), 920px"
        unoptimized
      />
    </div>
    {(post.imageCaption || post.imageCredit) && <figcaption className="featured-image__caption">
      {post.imageCaption && <span>{post.imageCaption}</span>}
      {post.imageCredit && <span className="featured-image__credit">Crédito: {post.imageCredit}</span>}
    </figcaption>}
  </figure>;
}
