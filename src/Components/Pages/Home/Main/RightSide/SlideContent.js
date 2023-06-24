function SlideContent(props) {
  return (
    <>
      <div className="background">
        <img src={props.img} alt={props.title} />
      </div>
    </>
  );
}

export default SlideContent;
