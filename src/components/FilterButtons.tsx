// components/FilterButtons.tsx
import type { Component } from "solid-js";
import type { Filter } from "../types"; // Or define here if needed
import "../styles/filterButton.scss";

interface FilterButtonsProps {
  current: Filter;
  setFilter: (filter: Filter) => void;
}

const FilterButtons: Component<FilterButtonsProps> = (props) => {
  const filters: Filter[] = ["all", "active", "completed"];

  return (
    <div class="filter-buttons">
      {filters.map((f) => (
        <button
          class={`filter-buttons__button ${
            props.current === f ? "filter-buttons__button--active" : ""
          }`}
          onClick={() => props.setFilter(f)}
        >
          {f.charAt(0).toUpperCase() + f.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;
