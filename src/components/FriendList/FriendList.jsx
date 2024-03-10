import PropTypes from "prop-types";
import FriendListItem from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  return (
    <ul className={css.container}>
      {friends.map(({ id, avatar, name, isOnline }) => {
        return (
          <li className={css.user__box} key={id}>
            {<FriendListItem avatar={avatar} name={name} isOnline={isOnline} />}
          </li>
        );
      })}
    </ul>
  );
};
export default FriendList;

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired })
  ).isRequired,
};
