// src/components/MarketPotential.js
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

function MarketPotential() {
    const chartRef = useRef();

    useEffect(() => {
        document.title = 'Potentiel du Marché';
        drawChart();
    }, []);

    const data = [
        { year: 2020, demand: 50 },
        { year: 2021, demand: 75 },
        { year: 2022, demand: 120 },
        { year: 2023, demand: 180 },
        { year: 2024, demand: 250 },
        { year: 2025, demand: 330 },
    ];

    const drawChart = () => {
        const svg = d3.select(chartRef.current)
            .attr('width', 800)
            .attr('height', 500);

        const xScale = d3.scaleBand()
            .domain(data.map(d => d.year))
            .range([50, 750])
            .padding(0.4);

        const yScale = d3.scaleLinear()
            .domain([0, 350])
            .range([450, 50]);

        svg.append('g')
            .attr('transform', 'translate(0,450)')
            .call(d3.axisBottom(xScale).tickFormat(d => d));

        svg.append('g')
            .attr('transform', 'translate(50,0)')
            .call(d3.axisLeft(yScale));

        svg.selectAll('.bar')
            .data(data)
            .enter().append('rect')
            .attr('x', d => xScale(d.year))
            .attr('y', d => yScale(d.demand))
            .attr('width', xScale.bandwidth())
            .attr('height', d => 450 - yScale(d.demand))
            .attr('fill', '#3498db')
            .on('mouseover', function (d, i) {
                d3.select(this).attr('fill', '#2980b9');
            })
            .on('mouseout', function (d, i) {
                d3.select(this).attr('fill', '#3498db');
            });
    };

    return (
        <div>
            <h2 style={{ textAlign: 'center', marginTop: '20px' }}>
                Potentiel du Marché
            </h2>
            <svg ref={chartRef}></svg>
        </div>
    );
}

export default MarketPotential;
