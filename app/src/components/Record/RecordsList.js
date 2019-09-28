import React from "react";
import { Virtuoso } from "react-virtuoso";

import school_placeholder1 from "../../images/school_placeholder1.jpg";
import school_placeholder2 from "../../images/school_placeholder2.jpg";
import school_placeholder3 from "../../images/school_placeholder3.jpg";
import Record from ".";
import useSchoolsList from "../../hooks/useSchoolsList";

const RecordsList = () => {
  const [schools, loading] = useSchoolsList(20);

  const getRecord = index => {
    const formattedLocation = `${schools[index].location} ${schools[index].city}, ${schools[index].voivodship}`;

    return (
      <Record
        name={schools[index].name}
        schoolId={schools[index].id}
        location={formattedLocation}
        thumbnail={school_placeholder1}
        schoolType={schools[index].typeSchool}
        perspektywyBadge="bronze"
        wsk={66}
        ranking={1}
      />
    );
  };

  console.log("schools, loading: ", schools, loading);
  return (
    <Virtuoso
      totalCount={schools.length}
      overscan={10}
      item={getRecord}
      style={{ height: "100%", width: "100%" }}
    />
  );
};

export default RecordsList;
