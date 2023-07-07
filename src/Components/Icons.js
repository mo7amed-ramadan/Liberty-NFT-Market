function Icons(props) {
  return (
    <>
      <div className="bg-white flex items-center justify-center w-16 h-16 text-center rounded-full">
        <img src={props.img} alt={props.icon} className="max-w-[31px]" />
      </div>
    </>
  );
}

export default Icons;
