import styles from "@/styles/Home.module.css";
import Head from "next/head";
import Link from "next/link";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";
import { GetStaticProps } from "next";
import { Post, RootObjectBlogs } from "@/types";
import { useState } from "react";


interface PostProps {
  posts: Post[]
}

// fetch data from props
export const getStaticProps: GetStaticProps<PostProps> = async () => {
  const response = await fetch("http://localhost:1337/api/blogs?populate=*", {
    headers: {
      Authorization: `Bearer ${process.env.TOKEN}`
    }
  });
  const blogs: RootObjectBlogs = await response.json();


  const converterBlogs: Post[] = blogs.data.map((blogData) => {
    return {
      id: blogData.id,
      category: blogData.attributes.category,
      title: blogData.attributes.title,
      description: blogData.attributes.description,
      text: blogData.attributes.text,
      author: blogData.attributes.author,
      date: blogData.attributes.date,
      img: blogData.attributes.img.data.attributes.url,
      authorId: 1
    } as Post;
  })
  return {
    props: {
      posts: converterBlogs
    }
  }
}


export default function Home({ posts }: PostProps) {
  let filterPosts = posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 4);

  return (
    <>
      <Nav />
      <Header />
      <Head>
        <title>Home</title>
      </Head>
      <main className={styles.main}>

        <section className={styles.blogSectionMain}>
          {filterPosts.map((post) => (
            <section className={styles.blogSection} key={post.id}>
              <section className={styles.imgSection}>
                <img src={post.img} alt="foto" className={styles.imgBlog} />
              </section>
              <span className={styles.category}>{post.category}</span>
              <section className={styles.textSection}>
                <h1>{post.title}</h1>
                <p>{post.description}</p>
              </section>
              <section className={styles.nameTimeSection}>
                <h5 className={styles.author}>{post.author}</h5>
                <span className={styles.time}>{post.date}</span>
                <Link href={{ pathname: `blogs/${post.id}`, query: { id: post.id } }} key={post.id} className={styles.readMoreLink}><button className={styles.readMoreButton}>Read More</button></Link>
              </section>
            </section>
          ))}
        </section>
        <Link href={`/blogsPage`}>
          <button className={styles.ReadMoreBlogsButton}>
            <span>More blogs</span>
            <i className="fa-solid fa-arrow-down fa-bounce"></i>
          </button>
        </Link>

      </main >
      <Footer />
    </>
  )
}
