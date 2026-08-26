import React, { useCallback, useEffect, useState } from "react";

const Countdown = ({ targetDate }) => {
  const calculateTimeLeft = useCallback(() => {
    const difference =
      new Date(targetDate).getTime() - new Date().getTime();

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }, [targetDate]);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  return (
    <div className="countdown-txt">
      <span>{timeLeft.days} <p>days</p> </span>
      <span>{timeLeft.hours} <p>hours</p>  </span>
      <span>{timeLeft.minutes} <p>minutes</p> </span>
      <span>{timeLeft.seconds} <p>seconds</p> </span>
    </div>
  );
};

export default Countdown;
