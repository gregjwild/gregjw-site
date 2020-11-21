import styles from "./HeroBanner.module.css";

export default function HeroBanner({strapline}) {
    return (
        <div className={styles.HeroBanner}>
            <h2>{strapline}</h2>
        </div>
    )
}