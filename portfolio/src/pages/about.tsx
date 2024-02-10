import Head from "next/head";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import styles from "@/styles/AboutPage.module.css";
import img from "../../public/img/profile-foto.jpg"
import Link from "next/link";


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
                        <img src={img.src} className={styles.img} />
                        <h1 className={styles.title}>Stage <br /> Bij <br /> B.ignited</h1>
                    </section>
                    <section className={styles.textSection}>
                        <h1>Wie ben ik</h1>
                        <p className={styles.text}>Mijn naam is Milan Mareels, een enthousiaste 22-jarige student aan de Artesis Plantijn Hogeschool, waar ik de opleiding Graduaat Programmeren volg. Mijn interesse in technologie begon al vroeg, en voordat ik aan deze opleiding begon, voltooide ik de opleiding Grafische Opmaaksystemen. Daarnaast ben ik gedreven en heb ik mijn vaardigheden verder ontwikkeld door in de avonduren de opleiding Webdesigner HTML5 en CSS3 te volgen, die ik met succes heb afgerond. Tijdens mijn studie ben ik steeds meer gaan genieten van het ontwerpen en ontwikkelen van websites, evenals het creëren van systemen en applicaties. Het is geweldig om te zien hoe mijn passie voor technologie en design samenkomen in mijn werk. Als je meer over mijn wilt weten, nodig ik je uit om mijn profiel te bekijken op <Link href={`https://www.linkedin.com/in/milan-mareels-58b472265/`} target="_blank">Linkedin</Link>. Daar kun je meer te weten komen over mijn werk en mijn professionele ontwikkeling volgen.</p>

                        <h1>Wat houd mijn stage in</h1>
                        <p className={styles.text}>Tijdens mijn stage bij B.ignited ben ik betrokken bij een uitdagend project waarbij ik een tweedehands website moet ontwikkelen. Deze opdracht omvat             verschillende aspecten die zorgen voor een boeiende en leerzame ervaring.Een van de belangrijkste uitdagingen van dit project is het implementeren van een effectief filtersysteem waarmee gebruikers producten kunnen vinden op basis van verschillende criteria. Hierbij moet ik een api ontwikkelen om ervoor te zorgen dat gebruikers snel en gemakkelijk kunnen vinden wat ze zoeken. Een ander interessant aspect van mijn stageopdracht is het opzetten van een chatfunctionaliteit waarmee gebruikers met elkaar kunnen communiceren. Dit omvat het implementeren van realtime communicatie tussen gebruikers, het beheren van berichten en het waarborgen van de privacy en veiligheid van de gebruikersgegevens. Daarnaast moet ik ook een systeem ontwikkelen waarmee gebruikers verschillende soorten producten kunnen toevoegen aan de website. Hierbij moet ik rekening houden met verschillende productcategorieën, prijsstellingen en details. Bovendien zal ik functionaliteit integreren waarmee kopers biedingen kunnen plaatsen op producten, wat een dynamisch element toevoegt aan het platform.
                            Deze stage biedt mij een unieke kans om mijn programmeer- en ontwikkelvaardigheden in de praktijk toe te passen en te verbeteren.</p>

                        <h1>B.ignited</h1>
                        <p className={styles.text}>Bignited is gespecialiseerd in TestOps en automatisering, waarbij ze focussen op het optimaliseren van softwaretestprocessen. Hun expertise omvat Test Automation, waarmee ze softwaretests automatiseren, inclusief taken als testdata genereren, planning, het opzetten van testpipelines en het genereren van rapportages over testresultaten. Daarnaast bieden ze op maat gemaakte Test Data-oplossingen aan, waardoor ze nauwkeurige en specifieke gegevens kunnen produceren om elke applicatie grondig te testen. Dit omvat het genereren van diverse combinaties van gegevens, variërend van BIS-nummers tot KBO nummers en zelfs unieke identificatiecodes zoals UUID's, om de volledige functionaliteit en betrouwbaarheid van software te verifiëren</p>

                        <h1>Plaats</h1>
                        <div>
                            <p className={styles.text}>Het bedrijf B.ignited is gevestigd te Veldkant 33B, 2550 Kontich</p>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2503.1671504847354!2d4.4406698772753534!3d51.14226867173255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3f0860777782b%3A0xc6c9af543471448c!2sVeldkant%2033b%2C%202550%20Kontich!5e0!3m2!1snl!2sbe!4v1706449244740!5m2!1snl!2sbe" width="100%" height="300" loading="lazy"></iframe>
                        </div>


                        <h1>Wat doe ik</h1>
                        <p className={styles.text}>Tijdens mijn stage bij B.ignited werk ik aan het ontwikkelen van een REST API in Serverless AWS Lambda. AWS Lambda is een serverloze computing-service die het mogelijk maakt om code uit te voeren zonder dat je je zorgen hoeft te maken over de infrastructuur. In plaats daarvan worden de functies automatisch geschaald en uitgevoerd in reactie op gebeurtenissen. Dit biedt flexibiliteit en schaalbaarheid, terwijl de operationele complexiteit wordt verminderd. Mijn huidige taak is het creëren van een REST API die fungeert als het communicatiekanaal tussen de frontend van de website en de database. Deze API, ontwikkeld in de programmeertaal Node.js, het zal endpoints bevatten waarmee de frontend gegevens kan opvragen, toevoegen, bewerken en verwijderen van de database. Concreet betekent dit dat ik bezig ben met het schrijven van Node.js-code om de verschillende functies van de API te implementeren. Ik configureer AWS Lambda-functies om deze code uit te voeren in reactie op HTTP-verzoeken. Daarnaast werk ik aan het opzetten van de bijbehorende AWS-services, zoals API Gateway, om de routing van HTTP-verzoeken naar de Lambda-functies mogelijk te maken. Naast het ontwikkelen van de REST API in Serverless AWS Lambda, ben ik ook verantwoordelijk voor het schrijven van tests voor deze functies. Dit betekent dat ik ervoor zorg dat alle functionaliteiten die ik implementeer grondig worden getest om ervoor te zorgen dat ze correct werken en voldoen aan de vereisten van het project.</p>

                        <h1>Wat is mijn rol</h1>
                        <p className={styles.text}>Als onderdeel van mijn stage bij B.ignited heb ik de rol op me genomen om de backend op te bouwen voor de tweedehands website. Mijn verantwoordelijkheden omvatten het ontwikkelen van een serverless REST API in AWS Lambda, die fungeert als het communicatiekanaal tussen de frontend van de website en de database. In deze rol ben ik verantwoordelijk voor het ontwerpen, implementeren en testen van verschillende backend-functionaliteiten, zoals het toevoegen, bewerken, verwijderen en opvragen van producten. Dit vereist een grondig begrip van de functionele vereisten van de website, evenals een goede kennis van programmeertalen zoals Node.js voor de backend-ontwikkeling.</p>
                    </section>
                </section>
                <section className={styles.right}></section>
            </main >
            <Footer />
        </>
    )
}

export default AboutPage;