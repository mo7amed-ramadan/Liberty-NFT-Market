import TextHighlight from "../../../../TextHighlight";
import Heading from "../../Category Collection/Add-ons/Heading";
import FilterBtn from "./FilterBtn";
function MarketHeader(props) {
  const BtnClass =
    "px-5 py-2 me-2 rounded-full font-medium text-sm text-white cursor-pointer hover:bg-mainColor hover:text-white duration-200";

  return (
    <div className="Market-header mx-auto flex flex-row items-center justify-between">
      <Heading
        headingTitle={
          <>
            <TextHighlight highlight="Items" /> Currently In The Market.
          </>
        }
      />
      <div className="filters-btn">
        <FilterBtn
          title="All Items"
          value="All"
          class={`${BtnClass} activated`}
          function={props.functions}
          id="all"
        />
        <FilterBtn
          title="Music Art"
          value="Music Art"
          class={`${BtnClass}`}
          function={props.functions}
          id="music"
        />
        <FilterBtn
          title="Digital Art"
          value="Digital Art"
          class={`${BtnClass}`}
          function={props.functions}
          id="digital"
        />
        <FilterBtn
          title="Blockchain"
          value="Blockchain"
          class={`${BtnClass}`}
          function={props.functions}
          id="blockchain"
        />
        <FilterBtn
          title="virtual"
          value="Virtual"
          class={`${BtnClass}`}
          function={props.functions}
          id="virtual"
        />
      </div>
    </div>
  );
}

export default MarketHeader;
