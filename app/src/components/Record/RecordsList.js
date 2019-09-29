import React from "react";
import { Virtuoso } from "react-virtuoso";

import school_placeholder1 from "../../images/school_placeholder1.jpg";
import school_placeholder2 from "../../images/school_placeholder2.jpg";
import school_placeholder3 from "../../images/school_placeholder3.jpg";
import Record from ".";

const RecordsList = ({ schools }) => {
  const getRecord = index => {
    const formattedLocation = `${schools[index].location} ${schools[index].city}, ${schools[index].voivodship}`;
    return (
      <Record
        name={schools[index].name}
        pk={schools[index].pk}
        location={formattedLocation}
        thumbnail={school_placeholder1}
        schoolType={schools[index].typeSchool}
        perspektywyBadge={
          schools[index].statisticsSet[0].perspectiveBadge[0] != null
            ? schools[index].statisticsSet[0].perspectiveBadge[0].badge
            : "bronze"
        }
        wsk={
          schools[index].statisticsSet[0].perspectiveBadge[0] != null
            ? schools[index].statisticsSet[0].perspectiveBadge[0].wsk
            : 0
        }
        ranking={
          schools[index].statisticsSet[0].perspectiveBadge[0] != null
            ? schools[index].statisticsSet[0].perspectiveBadge[0].localRating
            : 0
        }
      />
    );
  };

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
