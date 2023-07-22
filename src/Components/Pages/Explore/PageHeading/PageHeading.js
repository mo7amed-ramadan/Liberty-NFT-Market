import Navbar from "../../Home/Navbar/Navbar";
import PageContent from "./PageContent";

function PageHeading() {
  return (
    <>
      <div className="container mx-auto">
        <div className="pageHeading bg-exploreBg w-full h-full bg-cover bg-no-repeat">
          <Navbar />
          <PageContent />
        </div>
      </div>
    </>
  );
}

export default PageHeading;
