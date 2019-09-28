import React from "react";
import { Virtuoso } from "react-virtuoso";

import school_placeholder1 from "../../images/school_placeholder1.jpg";
import school_placeholder2 from "../../images/school_placeholder2.jpg";
import school_placeholder3 from "../../images/school_placeholder3.jpg";
import Record from ".";

const items = [
  {
    name: "Liceum Ogólnozniekształcające nr 5 w Pcimiu Dolnym",
    location: "Pcim Dolny, dolnośląskie",
    wsk: 50,
    ranking: 4,
    perspektywyBadge: "silver",
    schoolType: "Liceum ogólnokształcące",
    thumbnail: school_placeholder1
  },
  {
    name: "Technikum nr 2 na Ślunsku",
    location: "Wrocław, dolnośląskie",
    wsk: 23,
    ranking: 12,
    perspektywyBadge: "bronze",
    schoolType: "Technikum",
    thumbnail: school_placeholder2
  },
  {
    name: "Liceum Ogólnozniekształcające nr 12 w Łodzi",
    location: "Uć, łódzkie",
    wsk: 90,
    ranking: 2,
    perspektywyBadge: "gold",
    schoolType: "Liceum ogólnokształcące",
    thumbnail: school_placeholder3
  },
  {
    name: "Liceum Ogólnozniekształcające nr 5 w Pcimiu Dolnym",
    location: "Pcim Dolny, dolnośląskie",
    wsk: 50,
    ranking: 4,
    perspektywyBadge: "silver",
    schoolType: "Liceum ogólnokształcące",
    thumbnail: school_placeholder1
  },
  {
    name: "Technikum nr 2 na Ślunsku",
    location: "Wrocław, dolnośląskie",
    wsk: 23,
    ranking: 12,
    perspektywyBadge: "bronze",
    schoolType: "Technikum",
    thumbnail: school_placeholder2
  },
  {
    name: "Liceum Ogólnozniekształcające nr 12 w Łodzi",
    location: "Uć, łódzkie",
    wsk: 90,
    ranking: 2,
    perspektywyBadge: "gold",
    schoolType: "Liceum ogólnokształcące",
    thumbnail: school_placeholder3
  }
];

const getRecord = index => {
  return (
    <Record
      name={items[index].name}
      location={items[index].location}
      thumbnail={items[index].thumbnail}
      schoolType={items[index].schoolType}
      perspektywyBadge={items[index].perspektywyBadge}
      wsk={items[index].wsk}
      ranking={items[index].ranking}
    />
  );
};

const RecordsList = () => (
  <Virtuoso
    totalCount={items.length}
    overscan={10}
    item={getRecord}
    style={{ height: "100%", width: "100%" }}
  />
);

export default RecordsList;
