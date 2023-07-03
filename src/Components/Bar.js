function Bar(props) {
  return (
    <button className="bar hidden m-md:block" id="bar" onClick={props.function}>
      <div className="small"></div>
      <div className="long"></div>
      <div className="small"></div>
    </button>
  );
}

export default Bar;
