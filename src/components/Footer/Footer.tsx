import style from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={style.container}>
      <p>2024</p>
      <a className={style.link} href="https://github.com/DragonRomeo">
        github
      </a>
    </footer>
  );
};
