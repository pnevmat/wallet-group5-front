import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authSelectors } from "../../redux/selectors";
import { authOperations } from "../../redux/operations/loginOperation";
import s from "./UserMenu.module.css";
import defaultAvatar from "./default-avatar.png";

export default function UserMenu() {
  const dispatch = useDispatch();
  //!!!
  const name = useSelector(authSelectors.getUserName);

  const onLogout = useCallback(() => {
    dispatch(authOperations.logoutUser());
  }, [dispatch]);

  return (
    <div className={s.container}>
      {/* <img src={avatar} alt="" width="32" className={s.avatar} /> */}
      <span className={s.name}>Welcome, {name}</span>
      <button type="button" onClick={onLogout} className={s.btn_logout} >
        Logout
      </button>
    </div>
  );
}

// const mapStateToProps = (state) => ({
//   name: authSelectors.getUserName(state),
//   avatar: defaultAvatar,
// });

// const mapDispatchToProps = {
//   onLogout: authOperations.logoutUser,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
