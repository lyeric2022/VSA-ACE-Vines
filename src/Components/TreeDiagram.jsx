import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import './TreeDiagram.css';

const TreeDiagram = ({ numTrees, data }) => {
  let svgWidth = (1 * window.innerWidth) / numTrees;

  const svgRef = useRef(null);

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const width = +svg.attr('width');
    const height = +svg.attr('height');

    const tree = d3.tree().size([width, height / 2]);

    const rootNode = d3.hierarchy(data);
    const treeData = tree(rootNode);

    treeData.descendants().forEach((node) => {
      node.data.height = Math.random() * 100 - 50;
    });

    const g = svg.append('g').attr('transform', `translate(0,${height - 50})`);

    const link = g
      .selectAll('.link')
      .data(treeData.links())
      .enter()
      .append('path')
      .attr('class', 'link')
      .attr('d', d3.linkVertical().x((d) => d.x || 0).y((d) => -d.y || 0));

    const node = g
      .selectAll('.node')
      .data(treeData.descendants())
      .enter()
      .append('g')
      .attr('class', 'node')
      .attr('transform', (d) => `translate(${d.x},${-d.y + Math.random() * 5})`);

    node.append('circle').attr('r', 8);

    node
      .append('text')
      .attr('dy', '0.32em')
      .attr('class', 'text')
      .attr('x', 0)
      .attr('y', (d) => (d.data.children ? -20 : 20))
      .text((d) => d.data.name);
  }, []);

  useEffect(() => {
    const screenWidth = window.innerWidth;
    svgWidth = 0.96 * screenWidth / numTrees;

    if (svgRef.current) {
      svgRef.current.style.width = `${svgWidth}px`;
    }
  }, []);

  return <svg ref={svgRef} width={svgWidth} height={500}></svg>;
};

export default TreeDiagram;
