import styles from "@/styles/Home.module.css";

function EventCard({ name, info, }) {
    return (
        <div className={styles.eventCard}>
            <img
                src='event.png'
                alt='Event'
                height={37}
                width={37}
            />
            <h2>{name}</h2>
            <p className={styles.event}>{info}</p>
        </div>
    );
}
function EventCardSelected({ name, info, selected }) {
    if (selected === true) {
        return (
            <div className={styles.eventCardSelected}>
                <img
                    src='event.png'
                    alt='Event'
                    height={37}
                    width={37}
                />
                <h2>{name}</h2>
                <p className={styles.event}>{info}</p>
            </div>
        )
    } else {
        return (
            <EventCard name={name} info={info} />
        );
    }
}
export default function Events() {
    return (
        <div className={styles.padding}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div className={styles.events}>
                    <div className={styles.recentEvents}>
                        <h2>Recent Events</h2>
                        <p className={styles.event}>Lorem ipsum odor amet, consectetuer adipiscing elit. Odio iaculis primis nisi imperdiet adipiscing facilisis enim sociosqu. </p>
                    </div>
                    <div>&nbsp;</div>
                    <div className={styles.eventLine}>&nbsp;</div>
                    <hr className={styles.eventhr} />
                    <div>&nbsp;</div>
                    <EventCardSelected name='OQAC' info='Lorem ipsum odor amet, consectetuer adipiscing elit. Odio iaculis primis ' />
                    <EventCardSelected name='Treasure Hunt' info='Lorem ipsum odor amet, consectetuer adipiscing elit. Odio iaculis primis ' selected={true} />
                    <EventCardSelected name='Art Competition' info='Lorem ipsum odor amet, consectetuer adipiscing elit. Odio iaculis primis ' />
                </div>
            </div>
        </div>
    );
}