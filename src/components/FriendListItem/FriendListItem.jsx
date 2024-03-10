import PropTypes from "prop-types";
import clsx from "clsx";
import css from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <img className={css.user__img} src={avatar} alt={name} width="48" />
      <p className={css.user__name}>{name}</p>
      <p className={clsx(isOnline ? css.user__online : css.user__offline)}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </>
  );
};

export default FriendListItem;

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
