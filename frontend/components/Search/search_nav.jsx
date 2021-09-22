import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { updateFilter, removeAllFilter } from "../../actions/filter_action";

const SearchNav = (props) => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const [pricetxt, setPriceTxt] = useState("Price");
  const [bdText, setBdText] = useState("Bedrooms");
  const [baText, setBaText] = useState("Bathrooms");
  const useToggle = (initialState = false) => {
    const [state, setState] = useState(initialState);
    const toggle = useCallback(() => setState((state) => !state), []);
    return [state, toggle];
  };

  const [isPriceOpen, setIsPriceOpen] = useToggle();
  const [isBedsOpen, setIsBedsOpen] = useToggle();
  const [isBathsOpen, setIsBathsOpen] = useToggle();
  const handleQuery = (e) => {
    setQuery(e.currentTarget.value);
  };

  const handleQuerySubmit = (e) => {
    e.preventDefault();
    //update filter with state
    dispatch(updateFilter("query", query));
  };

  const handleDropDownSelection = (field) => {
    return (e) => {
      e.stopPropagation();
      e.preventDefault();
      console.log(e.currentTarget.value);
      if (field == "min_price" || field == "max_price") {
        setPriceTxt(e.currentTarget.value);
      }
      if (field == "min_beds") {
        setBdText(e.currentTarget.value);
      }
      if (field == "min_baths") {
        setBaText(e.currentTarget.value);
      }
      dispatch(updateFilter([field], e.currentTarget.value));
    };
  };

  const clearFilters = () => {
    dispatch(removeAllFilter());
  };

  const handleClearFilter = () => {
    clearFilters();
    setPriceTxt("Price");
    setBaText("Bathrooms");
    setBdText("Bedrooms");
  };
  return (
    <div className="search-nav-area">
      {/* TODO: Query Input Area */}
      <form onSubmit={handleQuerySubmit} className="search-form">
        <div className="search-box">
          <input
            type="text"
            placeholder="Address, neighborhood, or ZIP"
            value={query}
            onChange={handleQuery}
          />
          <button type="submit">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </form>

      {/* TODO: Price Dropdown */}
      <div className="filter-drop-down-wrapper">
        <button onFocus={setIsPriceOpen} onBlur={setIsPriceOpen}>
          {pricetxt}
        </button>
        <div className={isPriceOpen ? "show price" : "hidden"}>
          <div className="price-options">
            <h3> Min</h3>
            <button
              value="$0+"
              onMouseDown={handleDropDownSelection("min_price")}>
              $0+
            </button>
            <button
              value="$500+"
              onMouseDown={handleDropDownSelection("min_price")}>
              $500+
            </button>
            <button
              value="$1000+"
              onMouseDown={handleDropDownSelection("min_price")}>
              $1000+
            </button>
            <button
              value="$1500+"
              onMouseDown={handleDropDownSelection("min_price")}>
              $1500+
            </button>
            <button
              value="$2000+"
              onMouseDown={handleDropDownSelection("min_price")}>
              $2000+
            </button>
            <button
              value="$3000+"
              onMouseDown={handleDropDownSelection("min_price")}>
              $3000+
            </button>
          </div>
          <h3> - </h3>
          <div className="price-options">
            <h3> Max </h3>
            <button
              value="~$1000"
              onMouseDown={handleDropDownSelection("max_price")}>
              ~$1000
            </button>
            <button
              value="~$2000"
              onMouseDown={handleDropDownSelection("max_price")}>
              ~$2000
            </button>
            <button
              value="~$3000"
              onMouseDown={handleDropDownSelection("max_price")}>
              ~$3000
            </button>
            <button
              value="~$4000"
              onMouseDown={handleDropDownSelection("max_price")}>
              ~$4000
            </button>
            <button
              value="~$5000"
              onMouseDown={handleDropDownSelection("max_price")}>
              ~$5000
            </button>
            <button
              value="~$6000"
              onMouseDown={handleDropDownSelection("max_price")}>
              ~$6000
            </button>
          </div>
        </div>

        {/* TODO: Bedroom Dropdown */}
        <div className="filter-drop-down-wrapper">
          <button onFocus={setIsBedsOpen} onBlur={setIsBedsOpen}>
            {bdText}
          </button>
          <div
            id="filter-drop-down-bb"
            className={isBedsOpen ? "show" : "hidden"}>
            <div className="bed-and-bath">
              <button
                value="1+ bd"
                onMouseDown={handleDropDownSelection("min_beds")}>
                1+
              </button>
              <button
                value="2+ bd"
                onMouseDown={handleDropDownSelection("min_beds")}>
                2+
              </button>
              <button
                value="3+ bd"
                onMouseDown={handleDropDownSelection("min_beds")}>
                3+
              </button>
              <button
                value="4+ bd"
                onMouseDown={handleDropDownSelection("min_beds")}>
                4+
              </button>
            </div>
          </div>
        </div>

        {/* TODO : Bathroom Dropdown */}
        <div className="filter-drop-down-wrapper">
          <button onFocus={setIsBathsOpen} onBlur={setIsBathsOpen}>
            {baText}
          </button>
          <div
            id="filter-drop-down-bb"
            className={isBathsOpen ? "show" : "hidden"}>
            <div className="bed-and-bath">
              <button
                value="1+ ba"
                onMouseDown={handleDropDownSelection("min_baths")}>
                1+
              </button>
              <button
                value="2+ ba"
                onMouseDown={handleDropDownSelection("min_baths")}>
                2+
              </button>
              <button
                value="3+ ba"
                onMouseDown={handleDropDownSelection("min_baths")}>
                3+
              </button>
              <button
                value="4+ ba"
                onMouseDown={handleDropDownSelection("min_baths")}>
                4+
              </button>

              {/* TODO : clear filter */}
            </div>
          </div>
          <div className="filter-drop-down-wrapper">
            <button onClick={handleClearFilter}> Clear</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchNav;
