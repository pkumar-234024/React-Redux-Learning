const Component = ({ children }) => {
  return (
    <div className="card" style={{ width: "70%" }}>
      <div className="card-body">{children}</div>
    </div>
  );
};

export default Component;
