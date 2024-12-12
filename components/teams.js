import styles from "@/styles/Home.module.css";

function TeamCard({ src, name, info, isSelected }) {
    if (isSelected) {
        return (
            <div className={styles.teamCardSelected}>
                <img
                    src={src}
                    alt={name}
                />
                <h1>{name}</h1>
                <p>{info}</p>
            </div>
        );
    }
    return (
        <div className={styles.teamCard}>
            <img
                src={src}
                alt={name}
            />
            <h1>{name}</h1>
            <p>{info}</p>
        </div>
    );
}
export default function Team() {
    return (
        <div className={styles.padding}>
            <div className={styles.team}>
                <div className={styles.teamContentText}>
                    <div>
                        <h1>About Us</h1>
                        <hr style={{ border: '0px', height: '10px' }} />
                        <h2 style={{ fontWeight: 'normal', width: '300px' }}>OUR SOCIETY CONSISTS OF FIVE TEAMS.</h2>
                    </div>
                    <p>
                        Lorem ipsum odor amet, consectetuer adipiscing elit. Dui volutpat torquent netus est augue. Commodo risus vel adipiscing, est convallis nostra. Class fringilla etiam dis tellus suscipit adipiscing fusce curabitur. Proin pellentesque nascetur consectetur convallis, varius quisque. Fermentum ac libero et maximus primis litora massa orci. Fames auctor maecenas .Sagittis himenaeos magna parturient himenaeos dictumst ligula. Amet maximus per diam tempor, egestas ullamcorper. Etiam penatibus urna nulla praesent volutpat hac. Morbi
                    </p>
                    <div className={styles.news}>
                        Meet the Teams
                        <img
                            src='arrow.png'
                            alt='arrow'
                        />
                    </div>
                </div>
                <div className={styles.teamContentCards}>
                    <TeamCard name='AMV Team' src='teams/amv.png' info='Lorem ipsum odor amet, consectetuer adipiscing elit. Odio iaculis primis nisi imperd' />
                    <TeamCard name='Quiz Team' src='teams/quiz.png' isSelected={true} info='Lorem ipsum odor amet, consectetuer adipiscing elit. Odio iaculis primis nisi imperd' />
                </div>
                <div className={styles.teamContentCards}>
                    <TeamCard name='WebD Team' src='teams/webd.png' info='Lorem ipsum odor amet, consectetuer adipiscing elit. Odio iaculis primis nisi imperd' />
                    <TeamCard name='DNA Team' src='teams/dna.png' info='Lorem ipsum odor amet, consectetuer adipiscing elit. Odio iaculis primis nisi imperd' />
                    <TeamCard name='MN Team' src='teams/mn.png' info='Lorem ipsum odor amet, consectetuer adipiscing elit. Odio iaculis primis nisi imperd' />
                </div>
            </div>
        </div>
    );
}