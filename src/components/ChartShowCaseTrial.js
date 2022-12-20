// import React from "react";
// import { VictoryPie } from "victory";

// const ChartShowCaseTrial = () => {
//   return <VictoryPie />;
// };

// export default ChartShowCaseTrial

import React from "react";
import studentData from "../students-database/student-database.json";

import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  //   VictoryTooltip,
  //   VictoryLine,
  //   VictoryGroup,
} from "victory";

const studentInfo = studentData.students.map((student) => {
  console.log(student);
  return student;
});

// All the students, select the subject I want
// let data = studentData.students.map(student => student)

// Map over de namen
// const filteredNames = student.name
// console.log(filteredNames)
// Daarna; als naam === Evelyn, dan filter

const data = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 },
];

class ChartShowCaseTrial extends React.Component {
  render() {
    return (
      <VictoryChart
        theme={VictoryTheme.material}
        style={{ width: 5, height: 5, padding: 2 }}
        // domainPadding will add space to each side of VictoryBar to
        // prevent it from overlapping the axis
        domainPadding={30}
      >
        <VictoryAxis
          // tickValues specifies both the number of ticks and where
          // they are placed on the axis
          style={{ width: 5, height: 5, padding: 2 }}
          tickValues={[1, 2, 3, 4]}
          tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
        />
        <VictoryAxis
          style={{ width: 5, height: 5, padding: 2 }}
          dependentAxis
          // tickFormat specifies how ticks should be displayed
          tickFormat={(x) => `$${x / 1000}k`}
        />
        <VictoryBar data={data} x="quarter" y="earnings" />
      </VictoryChart>
    );
  }
}
export default ChartShowCaseTrial;
