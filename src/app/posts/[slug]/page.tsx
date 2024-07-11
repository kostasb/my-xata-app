import { getXataClient } from '@/xata';

const xata = getXataClient();

export default async function Post({ params }: { params: { slug: string } }) {
  const post = await xata.db.Posts.filter({ slug: params.slug }).getFirst();

  return (
    <div className="w-full max-w-5xl mt-16">
      <p className="mb-2">
        <a href="/" className="text-purple-600">
          &larr; Back to blog
        </a>
      </p>
      <h1 className="mb-2 text-3xl">{post?.title}</h1>
      <p className="text-xl">{post?.description}</p>
    </div>
  );
}
