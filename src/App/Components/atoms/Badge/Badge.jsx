import React from "react";
import NotificationBadge from "react-notification-badge";
import { Effect } from "react-notification-badge";
import PropTypes from "prop-types";

function Badge({ count, children }) {
  return (
    <div>
     {children}
     <NotificationBadge count={count} effect={Effect.SCALE} />
    </div>
  );
}

Badge.propTypes = {
  count: PropTypes.number.isRequired,
  label: PropTypes.string,
  containerStyle: PropTypes.object,
  style: PropTypes.object,
  className: PropTypes.string,
  effect: PropTypes.array,
  duration: PropTypes.number,
  children: PropTypes.node,
};
export default Badge;
