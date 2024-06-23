import { useEffect, useState } from "react";

function DateTimeClock() {
  const [getDateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <p className="text-body-primary">
        This is the Time :{getDateTime.toLocaleDateString()} -{" "}
        {getDateTime.toLocaleTimeString()}
      </p>
    </div>
  );
}
export default DateTimeClock;
