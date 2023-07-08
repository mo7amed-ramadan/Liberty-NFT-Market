function SlideContent(props) {
  return (
    <>
      <div className="background">
        <img src={props.img} alt={props.title} loading="lazy" />
      </div>
    </>
  );
}

export default SlideContent;
