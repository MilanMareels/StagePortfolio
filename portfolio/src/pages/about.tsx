import Head from "next/head";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import styles from "@/styles/AboutPage.module.css";



const AboutPage = () => {
    return (
        <>
            <Nav />
            <Head>
                <title>About</title>
            </Head>
            <main className={styles.main}>
                <section className={styles.left}>
                    <section className={styles.textImg}>
                        <img src="https://th.bing.com/th/id/R.95f39dc6307eb8b84c685e9f63771ae4?rik=SNXpHffz47U2hA&pid=ImgRaw&r=0" className={styles.img} />
                        <h1 className={styles.title}>Stage <br /> Bij <br /> B.ignited</h1>
                    </section>
                    <section className={styles.textSection}>
                        <h1>Algemeen</h1>
                        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus iste illum omnis sint enim quo officiis itaque aliquam nesciunt deleniti, nostrum ducimus nam expedita, sapiente similique modi sit pariatur quisquam? Expedita rerum ducimus officiis explicabo placeat deleniti molestiae perferendis esse excepturi tempora, quibusdam ex reprehenderit vero odio at nesciunt voluptatem rem illum. Recusandae cum architecto doloribus qui animi explicabo alias ex fuga nihil sequi, eos natus omnis accusamus nesciunt at corporis. Veniam dolorem quos repudiandae facere, non laudantium, pariatur quod vitae, deserunt nisi et molestiae voluptatibus magnam nostrum accusamus! Deleniti quas praesentium, facilis omnis pariatur iusto, blanditiis ipsum molestias dicta odio vero quasi temporibus! Velit id cumque accusantium dolorem alias dignissimos, magnam, labore porro, iure ipsum repellendus saepe molestiae non quia quos unde. Accusantium ducimus blanditiis dolor animi accusamus.</p>

                        <h1>Wie volgt de stage</h1>
                        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus iste illum omnis sint enim quo officiis itaque aliquam nesciunt deleniti, nostrum ducimus nam expedita, sapiente similique modi sit pariatur quisquam? Expedita rerum ducimus officiis explicabo placeat deleniti molestiae perferendis esse excepturi tempora, quibusdam ex reprehenderit vero odio at nesciunt voluptatem rem illum. Recusandae cum architecto doloribus qui animi explicabo alias ex fuga nihil sequi, eos natus omnis accusamus nesciunt at corporis. Veniam dolorem quos repudiandae facere, non laudantium, pariatur quod vitae, deserunt nisi et molestiae voluptatibus magnam nostrum accusamus! Deleniti quas praesentium, facilis omnis pariatur iusto, blanditiis ipsum molestias dicta odio vero quasi temporibus! Velit id cumque accusantium dolorem alias dignissimos, magnam, labore porro, iure ipsum repellendus saepe molestiae non quia quos unde. Accusantium ducimus blanditiis dolor animi accusamus.</p>

                        <h1>B.ignited</h1>
                        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus iste illum omnis sint enim quo officiis itaque aliquam nesciunt deleniti, nostrum ducimus nam expedita, sapiente similique modi sit pariatur quisquam? Expedita rerum ducimus officiis explicabo placeat deleniti molestiae perferendis esse excepturi tempora, quibusdam ex reprehenderit vero odio at nesciunt voluptatem rem illum. Recusandae cum architecto doloribus qui animi explicabo alias ex fuga nihil sequi, eos natus omnis accusamus nesciunt at corporis. Veniam dolorem quos repudiandae facere, non laudantium, pariatur quod vitae, deserunt nisi et molestiae voluptatibus magnam nostrum accusamus! Deleniti quas praesentium, facilis omnis pariatur iusto, blanditiis ipsum molestias dicta odio vero quasi temporibus! Velit id cumque accusantium dolorem alias dignissimos, magnam, labore porro, iure ipsum repellendus saepe molestiae non quia quos unde. Accusantium ducimus blanditiis dolor animi accusamus.</p>

                        <h1>Plaats</h1>
                        <div>
                            <p className={styles.text}>Veldkant 33B, 2550 Kontich</p>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2503.1671504847354!2d4.4406698772753534!3d51.14226867173255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3f0860777782b%3A0xc6c9af543471448c!2sVeldkant%2033b%2C%202550%20Kontich!5e0!3m2!1snl!2sbe!4v1706449244740!5m2!1snl!2sbe" width="100%" height="300" loading="lazy"></iframe>
                        </div>


                        <h1>Wat is mijn functie</h1>
                        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus iste illum omnis sint enim quo officiis itaque aliquam nesciunt deleniti, nostrum ducimus nam expedita, sapiente similique modi sit pariatur quisquam? Expedita rerum ducimus officiis explicabo placeat deleniti molestiae perferendis esse excepturi tempora, quibusdam ex reprehenderit vero odio at nesciunt voluptatem rem illum. Recusandae cum architecto doloribus qui animi explicabo alias ex fuga nihil sequi, eos natus omnis accusamus nesciunt at corporis. Veniam dolorem quos repudiandae facere, non laudantium, pariatur quod vitae, deserunt nisi et molestiae voluptatibus magnam nostrum accusamus! Deleniti quas praesentium, facilis omnis pariatur iusto, blanditiis ipsum molestias dicta odio vero quasi temporibus! Velit id cumque accusantium dolorem alias dignissimos, magnam, labore porro, iure ipsum repellendus saepe molestiae non quia quos unde. Accusantium ducimus blanditiis dolor animi accusamus.</p>

                        <h1>Wat zijn mijn verantwoordelijkheden</h1>
                        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus iste illum omnis sint enim quo officiis itaque aliquam nesciunt deleniti, nostrum ducimus nam expedita, sapiente similique modi sit pariatur quisquam? Expedita rerum ducimus officiis explicabo placeat deleniti molestiae perferendis esse excepturi tempora, quibusdam ex reprehenderit vero odio at nesciunt voluptatem rem illum. Recusandae cum architecto doloribus qui animi explicabo alias ex fuga nihil sequi, eos natus omnis accusamus nesciunt at corporis. Veniam dolorem quos repudiandae facere, non laudantium, pariatur quod vitae, deserunt nisi et molestiae voluptatibus magnam nostrum accusamus! Deleniti quas praesentium, facilis omnis pariatur iusto, blanditiis ipsum molestias dicta odio vero quasi temporibus! Velit id cumque accusantium dolorem alias dignissimos, magnam, labore porro, iure ipsum repellendus saepe molestiae non quia quos unde. Accusantium ducimus blanditiis dolor animi accusamus.</p>
                    </section>
                </section>
                <section className={styles.right}></section>
            </main >
            <Footer />
        </>
    )
}

export default AboutPage;