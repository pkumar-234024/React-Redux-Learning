function DateTimeClock() {
  const date = new Date();
  let name = "praveen";
  return (
    <div>
      <p className="text-body-primary">
        This is the Time :{date.toLocaleDateString()} -{" "}
        {date.toLocaleTimeString()}
      </p>
    </div>
  );
}
export default DateTimeClock;
