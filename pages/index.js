import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer"
import Intro from "@/components/intro"
import Events from "@/components/events"
import Carousel from "@/components/carousel"
import Team from "@/components/teams"

export default function Home() {
  return (
    <>
      <Head>
        <title>hue hue hue</title>
        <meta name="description" content="i am making this hehehe" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Cabin:ital,wght@0,400..700;1,400..700&display=swap" rel="stylesheet" />
      </Head>
      <page className={`${styles.page}`}>
        <Navbar />
        <main className={styles.main}>
          <Intro />
          <Events />
          <Carousel
            isEvent={true}
            src='treasureHunt.png'
            eventName='Treasure Hunt'
            eventInfo={[
              <>
                <p>
                  Lorem ipsum odor amet, consectetuer adipiscing elit. Dui volutpat torquent netus est augue. Commodo risus vel adipiscing, est convallis nostra. Class fringilla etiam dis tellus suscipit adipiscing fusce curabitur. Proin pellentesque nascetur consectetur convallis, varius quisque. Fermentum ac libero et maximus primis litora massa orci. Fames auctor maecenas .
                </p>
                <p>
                  Sagittis himenaeos magna parturient himenaeos dictumst ligula. Amet maximus per diam tempor, egestas ullamcorper. Etiam penatibus urna nulla praesent volutpat hac. Morbi
                </p>
              </>
            ]}
          />
          <Carousel
            isArt={true}
            src='art.png'
          />
          <Carousel
            isAmv={true}
            src='amv.png'
            alt='amv'
            width={700}
          />
          <Team />
        </main>
        <Footer />
      </page>
    </>
  );
}
