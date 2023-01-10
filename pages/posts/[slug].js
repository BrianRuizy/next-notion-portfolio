import { getAllPublished, getSingleBlogPostBySlug } from "../../lib/notion"
import PostDetail from "../../components/postDetail";

const Post = ({ post }) => {
  return (
   <PostDetail post={post} />
  );
};

export const getStaticProps = async ({ params }) => {
  const post = await getSingleBlogPostBySlug(params.slug);

  return {
    props: {
      post,
    },
    revalidate: 60,
  };
};

export const getStaticPaths = async () => {
  const posts = await getAllPublished();
  const paths = posts.map(({ slug }) => ({ params: { slug } }));

  return {
    paths,
    fallback: "blocking",
  };
};

export default Post;