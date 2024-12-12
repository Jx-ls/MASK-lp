import styles from "@/styles/Home.module.css";

function ArtOverlay() {
    return (
        <div className={styles.artOverlay}>
            <div className={styles.artOverlayText}>
                <h1>Fanart Submissions</h1><br />
                <p>Submitted by: Ankan Chakroborty</p>
            </div>
            <div className={styles.artOverlayBtn}>
                Submit your own Fanart!
            </div>
        </div >
    );
}
function CarouselComponent({ src, alt, width, isArt }) {
    return (
        <div className={styles.carouselComplete}>
            <div className={styles.carousel}>
                <div className={styles.btnLeft}>&lt;</div>
                <div>
                    {isArt ? <ArtOverlay /> : <></>}
                    <img
                        src={src}
                        alt={alt}
                        className={styles.carousel}
                        width={width}
                    />
                </div>
                <div className={styles.btnRight}>&gt;</div>
            </div>
            <div className={styles.carouselBtns}>
                <div className={styles.carouselBtn}>&nbsp;</div>
                <div className={styles.carouselBtn}>&nbsp;</div>
                <div className={styles.carouselBtn}>&nbsp;</div>
                <div className={styles.carouselBtn}>&nbsp;</div>
                <div className={styles.carouselBtn}>&nbsp;</div>
            </div>
        </div>
    );
}
export default function Carousel({ src, alt, width, isArt, isEvent, eventName, eventInfo, isAmv }) {
    if (isArt) {
        return (
            <div className={styles.artCarousel}>
                <div className={styles.carouselTextArt}>
                    <h1>Fanart Submissions</h1>
                    <p>
                        Lorem ipsum odor amet, consectetuer adipiscing elit. Dui volutpat torquent netus est augue. Commodo risus vel adipiscing, est convallis nostra. Class fringilla etiam dis tellus suscipit adipiscing fusce curabitur. Proin pellentesque nascetur consectetur convallis,
                    </p>
                    <div className={styles.carouselArtBtn}>
                        Read more
                        <img
                            src='arrow.png'
                            alt='arrow'
                        />
                    </div>
                </div>
                <CarouselComponent
                    src={src}
                    alt={alt}
                    isArt={isArt}
                />
            </div>
        );
    } else if (isEvent) {
        return (
            <div className={styles.padding}>
                <div className={styles.eventCarousel}>
                    <div className={styles.btnLeft}>&lt;</div>
                    <div className={styles.carouselContentEvent}>
                        <img
                            src={src}
                            alt={alt}
                            className={styles.carouselContentEvent}
                        />
                        <div className={styles.carouselTextEvent}>
                            <h1>{eventName}</h1>
                            {eventInfo}
                            <div className={styles.introAbout}>
                                Read more
                                <img
                                    src='arrow.png'
                                    alt='arrow'
                                />
                            </div>
                        </div>
                    </div>
                    <div className={styles.btnRight}>&gt;</div>
                </div>
            </div>
        );
    } else if (isAmv) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: '850px' }}>
                    <CarouselComponent
                        src={src}
                        alt={alt}
                        width={width}
                    />
                </div>
            </div>
        );
    }
}