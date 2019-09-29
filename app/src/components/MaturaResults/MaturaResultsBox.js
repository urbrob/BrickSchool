import React, { PureComponent } from 'react';
import {
    Radar, RadarChart, PolarGrid, Legend,
    PolarAngleAxis, PolarRadiusAxis,
} from 'recharts';



export default class MaturaResultsBox extends PureComponent {


    render() {
        const results = this.props.results;
        console.log(results);
        const data = [
            {
                name: results[0].subject + ' ' + results[0].dataType, A: results[0].avgRate, fullMark: 100,
            },
            {
                name: results[1].subject + ' ' + results[1].dataType, A: results[1].avgRate,  fullMark: 100,
            },
            {
                name: results[2].subject + ' ' + results[2].dataType, A: results[2].avgRate,  fullMark: 100,
            },
            {
                name: results[3].subject + ' ' + results[3].dataType, A: results[3].avgRate,  fullMark: 100,
            },
            {
                name: results[4].subject + ' ' + results[4].dataType, A: results[4].avgRate,  fullMark: 100,
            },
            {
                name: results[5].subject + ' ' + results[5].dataType, A: results[5].avgRate,  fullMark: 100,
            },
            {
                name: results[6].subject + ' ' + results[6].dataType, A: results[6].avgRate,  fullMark: 100,
            },
            {
                name: results[7].subject + ' ' + results[7].dataType, A: results[7].avgRate,  fullMark: 100,
            },
            {
                name: results[8].subject + ' ' + results[8].dataType, A: results[8].avgRate,  fullMark: 100,
            },
            {
                name: results[9].subject + ' ' + results[9].dataType, A: results[9].avgRate,  fullMark: 100,
            },
            {
                name: results[10].subject + ' ' + results[10].dataType, A: results[10].avgRate,  fullMark: 100,
            },
            {
                name: results[11].subject + ' ' + results[11].dataType, A: results[11].avgRate, fullMark: 100,
            },
            {
                name: results[12].subject + ' ' + results[12].dataType, A: results[12].avgRate,  fullMark: 100,
            },
            {
                name: results[13].subject + ' ' + results[13].dataType, A: results[13].avgRate,  fullMark: 100,
            }
        ];
        return (
            <RadarChart cx={300} cy={250} outerRadius={150} width={580} height={470} data={data}>
                <PolarGrid />
                <PolarAngleAxis dataKey="name" />
                <PolarRadiusAxis angle={30} domain={[0, 100]} />
                <Radar name="Wyniki" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                <Legend />
            </RadarChart>
        );
    }
}
