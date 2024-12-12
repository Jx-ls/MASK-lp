import styles from "@/styles/Home.module.css";

function Handle({ src, alt }) {
    return (
        <div className={styles.handle}>
            <img
                src={src}
                alt={alt}
            />
        </div>
    );
}
export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.info}>
                <div>Privacy Policy</div>
                <div>Terms of Use</div>
            </div>
            <div>
                © 2024 Manga and Anime Society Kharagpur. All Rights Reserved.
            </div>
            <div className={styles.handles}>
                <Handle src='handles/instagram.png' alt='insta' />
                <Handle src='handles/youtube.png' alt='yt' />
                <Handle src='handles/facebook.png' alt='fb' />
                <Handle src='handles/email.png' alt='mail' />
                <Handle src='handles/github.png' alt='github' />
            </div>
        </footer>
    );
}