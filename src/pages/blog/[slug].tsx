import { dateFormatter } from "@src/lib/helper";
import fs from "fs";
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";
import Head from "next/head";
import path from "path";
import { FC } from "react";

export const getStaticPaths = async () => {
  // Get files from the posts directory
  const files = fs.readdirSync(path.join("data", "posts"));

  return {
    paths: files.map((filename) => {
      return {
        params: {
          slug: filename.split(".")[0],
        },
      };
    }),
    fallback: false, // can also be true or 'blocking'
  };
};

export const getStaticProps = async (context: any) => {
  const filename = context.params.slug + ".md";
  const content = fs.readFileSync(
    path.join("data", "posts", filename),
    "utf-8"
  );
  const matterResult = matter(content);

  return {
    props: {
      post: {
        title: matterResult.data.title,
        subtitle: matterResult.data.subtitle,
        date: matterResult.data.date,
        category: matterResult.data.category,
        content: matterResult.content,
      },
    },
  };
};

type PostProps = {
  post: {
    title: string;
    subtitle: string;
    date: string;
    category: string[];
    content: string;
  };
};

const Post: FC<PostProps> = ({ post }) => {
  const { day, date, month, year } = dateFormatter(post.date);

  return (
    <>
      <Head>
        <title>{`${post.title}  - Tri Denda`}</title>
      </Head>
      <div className="text-center max-w-[550px] mx-auto my-10 text-gray-800">
        <span>{`${day}, ${month} ${date}, ${year}`}</span>
        <h3 className="text-3xl font-bold leading-8 my-5">{post.title}</h3>
      </div>
      <article className="prose">
        <Markdown>{post.content}</Markdown>
      </article>
    </>
  );
};

export default Post;
