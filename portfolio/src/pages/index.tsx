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
  const [search, setSearch] = useState<string>("");
  const [category, setCategory] = useState<string>("")
  const [collapse, setCollapse] = useState<boolean>(false);


  let filterPosts = posts.filter((x) => {
    if (category == "Coding") {
      return x.category === category;
    } else if (category == "Meeting") {
      return x.category === category;
    }
    return x.title.toLocaleLowerCase().includes(search.toLocaleLowerCase());
  }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const handleReset = () => {
    setCategory("");
    setCollapse(false);
  }

  return (
    <>
      <Nav />
      <Header />
      <Head>
        <title>Home</title>
      </Head>
      <main className={styles.main}>

        <div className={styles.filters}>
          <input type="text" className={styles.input} placeholder="Search post" onChange={(e) => setSearch(e.target.value)} />
          <div style={{ flexDirection: "column" }}>
            <button className={styles.dateSortButton} onClick={() => setCollapse(toggle => !toggle)}><i className="fa-solid fa-filter"></i> Filters</button>
            <div style={{ display: collapse ? "flex" : "none", flexDirection: "column", marginTop: 10, gap: 10 }}>
              <button className={styles.dateSortButton} onClick={() => setCategory("Coding")}><i className="fa-solid fa-code"></i> Code</button>
              <button className={styles.dateSortButton} onClick={() => setCategory("Meeting")}><i className="fa-solid fa-handshake"></i>Meeting</button>
            </div>
          </div>
          <button className={styles.dateSortButton} onClick={() => handleReset()}><i className="fa-solid fa-filter-circle-xmark"></i> Reset</button>
        </div>

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

        <button className={styles.ReadMoreBlogsButton}>
          <span>More blogs</span>
          <i className="fa-solid fa-arrow-down fa-bounce"></i>
        </button>

      </main >
      <Footer />
    </>
  )
}
