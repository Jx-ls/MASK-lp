import styles from "@/styles/Home.module.css";

export default function Navbar() {
    return (
        <>
            <navbar className={styles.navbar}>
                <div>
                    <img
                        src='logo.jpeg'
                        alt="logo"
                        className={styles.logo}
                    />
                </div>
                <div className={styles.containerNavbar}>
                    <div>Home <hr className={styles.nav} /></div>
                    <div>Art</div>
                    <div>Newsletters</div>
                    <div>Videos</div>
                    <div>Events</div>
                    <div>Members</div>
                </div>
                <div className={styles.about}>
                    About Us
                </div>
            </navbar>
            <navbar className={styles.navbarPhone}>
                <div>
                    <img
                        src='logo.jpeg'
                        alt="logo"
                        className={styles.logo}
                    />
                </div>
                <div className={styles.containerNavbar}>
                    <div>Home <hr className={styles.nav} /></div>
                </div>
                <div className={styles.about}>
                    <hr className={styles.about} />
                    <hr className={styles.about} />
                    <hr className={styles.about} />
                </div>
            </navbar>
        </>
    );
}