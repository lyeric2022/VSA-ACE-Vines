import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import './TreeDiagram.css';

import { getRandomNumber } from './RandomNumber';

let currentNum = 1;

// A magical component that brings trees to life
const TreeDiagram = ({ numTrees, depth, data }) => {
  let svgWidth = (1 * window.innerWidth) * 0.984; // Measuring the width of the window to accommodate the grandness of the trees

  // if (svgWidth <= 1000) {
  //   svgWidth = 1511.424;
  // }


  let svgHeight;

  const svgRef = useRef(null);

  const [selectedNode, setSelectedNode] = useState(null); // The chosen one, the node that captures our hearts

  // The ancient ritual of rendering the tree diagram
  useEffect(() => {
    const svg = d3.select(svgRef.current); // Entering the mystical realm of SVG
    const width = +svg.attr('width'); // Unlocking the width attribute, a secret dimension
    const height = +svg.attr('height'); // Embracing the height attribute, a hidden world

    const tree = d3.tree().size([width, height - 100]); // The magic formula to create the perfect tree

    const rootNode = d3.hierarchy(data); // The birth of the tree, a glorious moment
    const treeData = tree(rootNode); // The tree takes shape, its branches reaching for the sky

    treeData.descendants().forEach((node) => {
      node.data.height = (Math.random() * 100) - 50; // Each tree is unique, some reaching higher than others
    });

    const g = svg.append('g').attr('transform', `translate(0,${height - 50})`); // The secret meeting place of the tree society

    const link = g
    .selectAll('.link')
    .data(treeData.links())
    .enter()
    .append('path')
    .attr('class', 'link')
    .attr('d', d3.linkVertical().x((d) => d.x || 0).y((d) => -d.y || 0)) // The interconnected paths of the tree, like a web of life
    .style('visibility', (d) => (d.target.data.lineName === '' ? 'hidden' : 'visible'));
  
    const node = g
      .selectAll('.node')
      .data(treeData.descendants())
      .enter()
      .append('g')
      .attr('class', 'node')
      .attr('transform', (d) => {
        return `translate(${d.x},${-d.y})`; // Each tree finds its place in the world, moving with grace
      });

    node
      .filter((d) => d.data.name !== "") // Filter out nodes with an empty name
      .append('circle')
      .attr('r', 8);

    node
      .append('text')
      .attr('dy', '0.32em')
      .attr('class', 'text')
      .attr('x', 0)
      .attr('y', (d) => -25)
      .style('font-size', (d) => (d.data.children ? '16px' : '11px'))
      .text((d) => {
        return `${d.data.name}`;
      });


    currentNum = getRandomNumber(currentNum);





    node
      .append('text')
      .attr('dy', '1.2em') // Adjust the vertical offset as per your requirement
      .attr('class', 'subtext')
      .attr('x', 0)
      .attr('y', (d) => (d.data.children ? -90 : 0)) // Adjust the vertical position as per your requirement
      .text((d) => {
        if (d.data.hasOwnProperty('lineName')) {
          return d.data.lineName;
        }
      });

    node
      .append('text')
      .attr('dy', '1.2em') // Adjust the vertical offset as per your requirement
      .attr('class', 'titleText')
      .attr('x', 0)
      .attr('y', (d) => (d.data.children ? -5 : 0)) // Adjust the vertical position as per your requirement
      .text((d) => {
        if (d.data.hasOwnProperty('titleName')) {
          return d.data.titleName;
        }
      });

  }, [selectedNode]);



  // A mystical ceremony to adjust the size of the trees based on the window's dimensions
  useEffect(() => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    svgWidth *= 1.0; // Shrinking the trees just a little, to fit within the mortal realm

    if (svgRef.current) {
      svgRef.current.style.width = `${svgWidth}px`; // Modifying the width of the sacred SVG container
    }

    if (svgRef.current) {

      svgRef.current.style.height = `${svgHeight}px`; // Adjusting the height of the holy SVG container
    }
  }, []);

  return (
    <svg
      ref={svgRef}
      width={svgWidth}
      height={120 * depth * 1.25}
      style={{
        // background: 'url(path/to/your/image.jpg)', // Set the background image path
        background: 'linear-gradient(0deg, rgb(65, 13, 40), rgb(99, 67, 24)) no-repeat',
        // zIndex: -1,

        // backgroundSize: 'cover', // Adjust the background image size
      }}
    ></svg>
  );
};

export default TreeDiagram;
