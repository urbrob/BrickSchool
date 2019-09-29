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
  },
  {
    value: "wsk_desc",
    name: "WSK (malejąco)",
    func: (a, b) =>
      a.statisticsSet[0].perspectiveBadge[0].wsk >
      b.statisticsSet[0].perspectiveBadge[0].wsk
        ? -1
        : 1
  },
  {
    value: "wsk_asc",
    name: "WSK (rosnąco)",
    func: (a, b) =>
      a.statisticsSet[0].perspectiveBadge[0].wsk <
      b.statisticsSet[0].perspectiveBadge[0].wsk
        ? -1
        : -1
  },
  {
    value: "rank_desc",
    name: "Ranking (malejąco)",
    func: (a, b) =>
      a.statisticsSet[0].perspectiveBadge[0].localRating >
      b.statisticsSet[0].perspectiveBadge[0].localRating
        ? 1
        : -1
  },
  {
    value: "rank_asc",
    name: "Ranking (rosnąco)",
    func: (a, b) =>
      a.statisticsSet[0].perspectiveBadge[0].localRating <
      b.statisticsSet[0].perspectiveBadge[0].localRating
        ? 1
        : -1
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
        style={{ width: 250 }}
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
