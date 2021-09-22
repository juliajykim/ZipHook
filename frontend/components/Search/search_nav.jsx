import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { updateFilter } from "../../actions/filter_action";

const SearchNav = (props) => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState({});

  const useToggle = (initialState = false) => {
    const [state, setState] = useState(initialState);
    const toggle = useCallback(() => setState((state) => !state), []);
    return [state, toggle];
  };

  const [isPriceOpen, setIsPriceOpen] = useToggle();
  const handleQuery = (e) => {
    setQuery(e.currentTarget.value);
  };

  const handleQuerySubmit = (e) => {
    debugger;
    e.preventDefault();
    //update filter with state
    dispatch(updateFilter("query", query));
  };

  const handleDropDownSelection = (field) => {
    debugger;
    return (e) => {
      e.stopPropagation();
      e.preventDefault();
      console.log(e.currentTarget.value);
      dispatch(updateFilter([field], e.currentTarget.value));
    };
  };

  return (
    <div className="search-nav-area">
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
      <div className="filter-drop-down-wrapper">
        <button onFocus={setIsPriceOpen} onBlur={setIsPriceOpen}>
          Price
        </button>
        <div className={isPriceOpen ? "show price" : "hidden"}>
          <div className="price-options">
            <h3> Min</h3>
            <button
              value="0"
              onMouseDown={handleDropDownSelection("min_price")}>
              $0+
            </button>
            <button
              value="500"
              onMouseDown={handleDropDownSelection("min_price")}>
              $500+
            </button>
            <button
              value="1000"
              onMouseDown={handleDropDownSelection("min_price")}>
              $1000+
            </button>
            <button
              value="1500"
              onMouseDown={handleDropDownSelection("min_price")}>
              $1500+
            </button>
            <button
              value="2000"
              onMouseDown={handleDropDownSelection("min_price")}>
              $2000+
            </button>
            <button
              value="3000"
              onMouseDown={handleDropDownSelection("min_price")}>
              $3000+
            </button>
          </div>
          <h3> - </h3>
          <div className="price-options">
            <h3> Max </h3>
            <button
              value="1000"
              onMouseDown={handleDropDownSelection("max_price")}>
              $1000
            </button>
            <button
              value="2000"
              onMouseDown={handleDropDownSelection("max_price")}>
              $2000
            </button>
            <button
              value="3000"
              onMouseDown={handleDropDownSelection("max_price")}>
              $3000
            </button>
            <button
              value="4000"
              onMouseDown={handleDropDownSelection("max_price")}>
              $4000
            </button>
            <button
              value="5000"
              onMouseDown={handleDropDownSelection("max_price")}>
              $5000
            </button>
            <button
              value="6000"
              onMouseDown={handleDropDownSelection("max_price")}>
              $6000
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchNav;
