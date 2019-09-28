import React from "react";
import { Virtuoso } from "react-virtuoso";

import school_placeholder1 from "../../images/school_placeholder1.jpg";
import school_placeholder2 from "../../images/school_placeholder2.jpg";
import school_placeholder3 from "../../images/school_placeholder3.jpg";
import Record from ".";

const items = [
  {
    name: "Liceum Ogólnozniekształcające nr 5 w Pcimiu Dolnym",
    distance: 2,
    perspektywyBadge: true,
    schoolType: "Liceum ogólnokształcące",
    thumbnail: school_placeholder1
  },
  {
    name: "Technikum nr 2 na Ślunsku",
    distance: 666,
    perspektywyBadge: false,
    schoolType: "Technikum",
    thumbnail: school_placeholder2
  },
  {
    name: "Liceum Ogólnozniekształcające nr 12 w Łodzi",
    distance: 1,
    perspektywyBadge: true,
    schoolType: "Liceum ogólnokształcące",
    thumbnail: school_placeholder3
  },
  {
    name: "Liceum Ogólnozniekształcające nr 5 w Pcimiu Dolnym",
    distance: 2,
    perspektywyBadge: true,
    schoolType: "Liceum ogólnokształcące",
    thumbnail: school_placeholder1
  },
  {
    name: "Technikum nr 2 na Ślunsku",
    distance: 666,
    perspektywyBadge: false,
    schoolType: "Technikum",
    thumbnail: school_placeholder2
  },
  {
    name: "Liceum Ogólnozniekształcające nr 12 w Łodzi",
    distance: 1,
    perspektywyBadge: true,
    schoolType: "Liceum ogólnokształcące",
    thumbnail: school_placeholder3
  }
];

const Row = ({ index }) => (
  <div
    style={{
      height: "100%",
      width: "100%",
      backgroundColor: "red"
    }}
  >
    <Record
      name={items[index].name}
      distance={items[index].distance}
      thumbnail={items[index].thumbnail}
      schoolType={items[index].schoolType}
      perspektywyBadge={items[index].perspektywyBadge}
    />
  </div>
);

const getRecord = index => {
  return (
    <Record
      name={items[index].name}
      distance={items[index].distance}
      thumbnail={items[index].thumbnail}
      schoolType={items[index].schoolType}
      perspektywyBadge={items[index].perspektywyBadge}
    />
  );
};

const RecordsList = () => (
  <Virtuoso
    totalCount={items.length}
    overscan={200}
    item={getRecord}
    style={{ height: "100%", width: "90%" }}
  />
);

export default RecordsList;
