import styles from "@/styles/Home.module.css";

export default function Intro() {
    return (
        <div className={styles.padding}>
            <div className={styles.intro}>
                <red style={{ color: '#E43332', fontWeight: 'bold' }}>Welcome</red> to the official website of <br />
                <h1 className={styles.intro}><b className={styles.intro}>MANGA & ANIME</b><br /> SOCIETY KHARAGPUR</h1>
                <p>
                    We are a community that is dedicated to anime and related content. We aim to spread our passion and love for anime, manga, and related media. We create content ranging from AMVs and reels to artwork and sketches, and hold crowd events like anime quizzes.
                </p>
                <div className={styles.introButtons}>
                    <div className={styles.introAbout}>
                        About Us
                    </div>
                    <div className={styles.news}>
                        Check out our latest Newsletter!
                        <img
                            src="arrow.png"
                            alt="arrow"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}