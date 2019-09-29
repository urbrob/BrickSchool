import React from "react";
import { Select } from "antd";

const { Option } = Select;

const sortingOptions = [
  {
    value: "alphabetically_asc",
    name: "Nazwa (rosnąco)",
    func: (a, b) => (a.name > b.name ? 1 : -1)
  },
  {
    value: "alphabetically_desc",
    name: "Nazwa (malejąco)",
    func: (a, b) => (a.name < b.name ? 1 : -1)
  }
];

const SortMenu = ({ schools, trigger, refresh }) => {
  const handleChange = value => {
    const sortingFunc = sortingOptions.find(s => s.value === value).func;
    schools.sort(sortingFunc);
    trigger(true);
    refresh(schools);
  };

  return (
    <div>
      <Select
        placeholder="Sortuj"
        style={{ width: 120 }}
        onChange={handleChange}
      >
        {sortingOptions.map(s => (
          <Option value={s.value}>{s.name}</Option>
        ))}
      </Select>
    </div>
  );
};

export default SortMenu;
