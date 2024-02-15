import style from "./Header.module.scss";
import wishlistIcon from "../../assets/img/wishlist.png";
import cartIcon from "../../assets/img/cart2.png";
import login from "../../assets/img/login2.png";

export const Header = () => {
  return (
    <header className={style.header}>
      <h1>Alakazam</h1>
      <select className={style.select}>
        <option value="english">English</option>
        <option value="russian">Russian</option>
      </select>

      <div className={style.btns_container}>
        <button className={style.button}>
          <img className={style.img} src={wishlistIcon} alt="wishlist_icon" />
          <p>Wishlist</p>
        </button>
        <button className={style.button}>
          <img className={style.img} src={cartIcon} alt="cart_icon" />
          <p>Cart</p>
        </button>
      </div>

      <button className={style.button}>
        <img className={style.img} src={login} alt="login_icon" />
        <p>Login</p>
      </button>
    </header>
  );
};
