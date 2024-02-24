import { useState } from "react";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import styles from "@/styles/blogPage.module.css";
import { Post, RootObjectBlogs } from "@/types";
import { GetStaticProps } from "next";
import Link from "next/link";
import Head from "next/head";


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


const BlogsPage = ({ posts }: PostProps) => {
    const [search, setSearch] = useState<string>("");
    const [category, setCategory] = useState<string>("")
    const [collapse, setCollapse] = useState<boolean>(false);

    let filterPosts = posts.filter((x) => {
        if (category == "Learning") {
            return x.category === category;
        } else if (category == "Meeting") {
            return x.category === category;
        }
        else if (category === "Coding") {
            return x.category === category;
        }
        return x.title.toLocaleLowerCase().includes(search.toLocaleLowerCase());
    }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    const handleReset = () => {
        setCategory("");
        setCollapse(false);
    }

    if (filterPosts.length === 0) {
        return (
            <>
                <Nav />
                <main style={{ height: "100vh", margin: "1rem" }}>
                    <div className={styles.filters}>
                        <input type="text" className={styles.input} placeholder="Search post" onChange={(e) => setSearch(e.target.value)} />
                        <div>
                            <button className={styles.filterbutton} onClick={() => setCollapse(toggle => !toggle)}><i className="fa-solid fa-filter"></i> Filters</button>
                            <div style={{ display: collapse ? "flex" : "none", flexDirection: "column" }}>
                                <button className={styles.filterbutton} onClick={() => setCategory("Learning")}>Learning</button>
                                <button className={styles.filterbutton} onClick={() => setCategory("Meeting")}>Meeting</button>
                                <button className={styles.filterbutton} onClick={() => setCategory("Coding")}>Coding</button>
                            </div>
                        </div>
                        <button className={styles.filterbutton} onClick={() => handleReset()}>Reset</button>
                    </div>

                    <h1 style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>No Posts yet</h1>
                </main>
                <Footer />
            </>
        )
    }

    return (
        <>
            <Nav />
            <Head>
                <title>Blog Page</title>
            </Head>

            <main className={styles.main}>

                <div className={styles.filters}>
                    <input type="text" className={styles.input} placeholder="Search post" onChange={(e) => setSearch(e.target.value)} />
                    <div>
                        <button className={styles.filterbutton} onClick={() => setCollapse(toggle => !toggle)}><i className="fa-solid fa-filter"></i> Filters</button>
                        <div style={{ display: collapse ? "flex" : "none", flexDirection: "column" }}>
                            <button className={styles.filterbutton} onClick={() => setCategory("Learning")}>Learning</button>
                            <button className={styles.filterbutton} onClick={() => setCategory("Meeting")}>Meeting</button>
                            <button className={styles.filterbutton} onClick={() => setCategory("Coding")}>Coding</button>
                        </div>
                    </div>
                    <button className={styles.filterbutton} onClick={() => handleReset()}>Reset</button>
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

            </main>
            <Footer />
        </>
    )
}


export default BlogsPage;