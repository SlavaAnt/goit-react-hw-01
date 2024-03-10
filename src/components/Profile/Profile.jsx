import PropTypes from "prop-types";
import css from "./Profile.module.css";

const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={css.container}>
      <div className={css.user__box}>
        <img className={css.user__img} src={image} alt="{username} avatar" />
        <p className={css.user__name}>{name}</p>
        <p className={css.user__info}>{tag}</p>
        <p className={css.user__info}>{location}</p>
      </div>

      <ul className={css.user__list}>
        <li className={css.user__item}>
          <span>Followers: </span>
          <span className={css.user__stats__value}>{followers}</span>
        </li>
        <li className={css.user__item}>
          <span>Views: </span>
          <span className={css.user__stats__value}>{views}</span>
        </li>
        <li className={css.user__item}>
          <span>Likes: </span>
          <span className={css.user__stats__value}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
