import { useState } from "react";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import styles from "@/styles/blogPage.module.css";
import { Post, RootObjectBlogs } from "@/types";
import { GetStaticProps } from "next";



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
            <main>

                <div className={styles.filters}>
                    <input type="text" className={styles.input} placeholder="Search post" onChange={(e) => setSearch(e.target.value)} />
                    <div>
                        <button className={styles.dateSortButton} onClick={() => setCollapse(toggle => !toggle)}><i className="fa-solid fa-filter"></i> Filters</button>
                        <div style={{ display: collapse ? "flex" : "none", flexDirection: "column", marginTop: 10, gap: 10 }}>
                            <button className={styles.dateSortButton} onClick={() => setCategory("Coding")}><i className="fa-solid fa-code"></i> Code</button>
                            <button className={styles.dateSortButton} onClick={() => setCategory("Meeting")}><i className="fa-solid fa-handshake"></i>Meeting</button>
                        </div>
                    </div>
                    <button className={styles.dateSortButton} onClick={() => handleReset()}><i className="fa-solid fa-filter-circle-xmark"></i> Reset</button>
                </div>

                {filterPosts.map((x) => <p key={x.id}>{x.text}</p>)}

            </main>
            <Footer />
        </>
    )
}


export default BlogsPage;