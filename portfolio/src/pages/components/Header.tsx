import styles from "@/styles/Header.module.css"


const Header = () => {
    return (
        <>
            <header className={styles.header}>
                <section className={styles.textSection}>
                    <p>Welkom op mijn blogwebsite! Hier deel ik mijn dagelijkse ervaringen en inzichten tijdens mijn stage. Als stagiair ben ik constant bezig met het verkennen van nieuwe taken, het opdoen van kennis en het uitbreiden van mijn vaardigheden. Deze blogs bieden een kijkje achter de schermen van mijn stage-avontuur, waarbij ik mijn uitdagingen, successen en leermomenten deel. Of het nu gaat om het assisteren van collega's, het bijwonen van vergaderingen of het werken aan projecten, ik neem je graag mee op mijn reis. Dus stap binnen, lees mee en laat je inspireren door mijn stage-avonturen!</p>
                </section>
            </header>
        </>
    )
}

export default Header;