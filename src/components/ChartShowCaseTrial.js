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
  VictoryTooltip,
  VictoryLine,
  VictoryGroup,
} from "victory";

console.log(studentData.students);
studentData.students.map((student) => console.log(student));
// All the students, select the subject I want
let studentInfo = studentData.students.map((student) => student);

const data = [
  console.log(studentInfo.difficulyRate),
  { subject: studentInfo.subject, rate: studentInfo.difficulyRate },
];

class ChartShowCaseTrial extends React.Component {
  render() {
    return (
      <VictoryChart
        theme={VictoryTheme.material}
        style={{ width: 500, height: 500 }}
        // domainPadding will add space to each side of VictoryBar to
        // prevent it from overlapping the axis
        domainPadding={100}
      >
        <VictoryAxis
          // tickValues specifies both the number of ticks and where
          // they are placed on the axis
          style={{ width: 100, height: 100 }}
          tickValues={[1, 2, 3, 4]}
          tickFormat={[studentInfo.subject]}
        />
        <VictoryAxis
          dependentAxis
          // tickFormat specifies how ticks should be displayed
        //   tickFormat={(x) => `$${x / 1000}k`}
        />
        <VictoryBar data={data} x={studentInfo.subject} y={studentInfo.difficulyRate} />
      </VictoryChart>
    );
  }
}
export default ChartShowCaseTrial;
