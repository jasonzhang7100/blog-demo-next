import styles from '../public/styles/Spread.module.css';

const Spread = () => {
  return (
    <div className={styles.wrapper}>
      <a href="https://github.com/" rel="noopener noreferrer" target="_blank">
        <img src="https://miro.medium.com/max/4800/1*CmjmgiI3Sr6oByNZ81pkhQ.jpeg" width="100%" />
      </a>
      <a href="https://about.gitlab.com/" rel="noopener noreferrer" target="_blank">
        <img src="https://amazicworld.com/wp-content/uploads/2021/03/How-to-set-up-and-optimize-your-CI_CD-pipeline-on-demand-webinar-696x385.png" width="100%" />
      </a>
      <a href="https://reactjs.org/" rel="noopener noreferrer" target="_blank">
        <img src="https://pixyzen.com/blog/wp-content/uploads/2021/03/rj3.jpg" width="100%" />
      </a>
    </div>
  )
};

export default Spread;
