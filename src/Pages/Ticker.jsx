import styles from './Ticker.module.css';


function Ticker(){
  const messages = [
    "⚡ New recipies available",
    "🔥 Weekend Sale 50% Off",
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.ticker}>
        <div className={styles.content}>
          {[...messages, ...messages].map((msg, index) => (
            <span key={index} className="ticker-item">
              {msg} &nbsp;&nbsp;|&nbsp;&nbsp;
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Ticker