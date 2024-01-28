import Nav from "../components/Nav";
import Footer from "../components/Footer";
import styles from "@/styles/BlogDetailPage.module.css"
import { Post, RootObjectBlogItem, RootObjectBlogs } from "@/types";
import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { Marked } from 'marked';


const marked = new Marked();


interface Paths extends ParsedUrlQuery {
    id: string
}

interface PostProps {
    post: Post
}
// fetch data forn id
export const getStaticPaths: GetStaticPaths<Paths> = async () => {
    const response = await fetch(`http://localhost:1337/api/blogs?populate=*`, {
        headers: {
            Authorization: `Bearer ${process.env.TOKEN}`
        }
    });
    const blogs: RootObjectBlogs = await response.json();

    const paths = blogs.data.map((blog) => ({
        params: { id: blog.id.toString() },
    }));


    return {
        paths: paths,
        fallback: false,
    };
};
// fetch data from props
export const getStaticProps: GetStaticProps<PostProps, Paths> = async (context) => {
    const response = await fetch(`http://localhost:1337/api/blogs/${context.params?.id}?populate=*`, {
        headers: {
            Authorization: `Bearer ${process.env.TOKEN}`
        }
    });
    const blog: RootObjectBlogItem = await response.json();

    const convertBlogItem: Post = {
        id: blog.data.id,
        category: blog.data.attributes.category,
        title: blog.data.attributes.title,
        description: blog.data.attributes.description,
        text: blog.data.attributes.text,
        date: blog.data.attributes.date,
        author: blog.data.attributes.author,
        img: blog.data.attributes.img.data.attributes.url,
        authorId: 1
    }
    return {
        props: {
            post: convertBlogItem
        }
    }
}



const BlogDetail = ({ post }: PostProps) => {

    return (
        <>
            <Nav />
            <Head>
                <title>{post.title}</title>
            </Head>
            <main className={styles.main}>
                <section className={styles.blogperson}>
                    <h1>{post.author}</h1>
                </section>
                <section className={styles.blog}>
                    <h1 className={styles.TitleSection}>{post.title}</h1>
                    <span className={styles.blogDate}>{post.date}</span>
                    <br />
                    <section className={styles.blogImgTextSection}>
                        <section className={styles.left}>
                            <img src={post.img} className={styles.blogImg} />
                        </section>
                        <section className={styles.right} dangerouslySetInnerHTML={{ __html: marked.parse(post.text) }}>
                        </section>
                    </section>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default BlogDetail;