import styles from "./SobreMim.module.css";
import PostModelo from "../../componentes/PostModelo";
import fotoCapa from "../../assets/sobre_mim_capa.png";
import fotoSobreMim from "../../assets/sobre_mim_foto.jpg";

export default function SobreMim() {
    return (
        <PostModelo fotoCapa={fotoCapa} titulo="Sobre mim" >
            <h3 className={styles.subtitulo}>Olá, eu sou a Ju!</h3>
            <img src={fotoSobreMim} alt="foto da Ju" className={styles.fotoSobreMim}/>
            <p className={styles.paragrafo}>hcbjhvfvfvnnvngbgbb</p>
            <p className={styles.paragrafo}>hdycdcbdcbhdcccchvdvv</p>
            <p className={styles.paragrafo}>hdycdcbdcbhdcccchvdvv</p>
            <p className={styles.paragrafo}>hdycdcbdcbhdcccchvdvv</p>
            <p className={styles.paragrafo}>hdycdcbdcbhdcccchvdvv</p>
        </PostModelo>
    )
}