import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import './TreeDiagram.css';

let firstNodeChecked = false;
let isTop = true;

// A magical component that brings trees to life
const TreeDiagram = ({ numTrees, depth, data, lineName }) => {

  if (lineName === "Doan Dynasty") {
    data = data.children.find((child) => child.lineName === "Doan Dynasty");
  }
  else if (lineName === "Cactus Fam") {
    data = data.children.find((child) => child.lineName === "Cactus Fam");
  }
  else if (lineName === "Original Oldies") {
    data = data.children.find((child) => child.lineName === "Original Oldies");
  }

  console.log(lineName);

  let svgWidth = (1 * window.innerWidth) * 0.984;;

  if (window.innerWidth < 1000) {
    svgWidth = 1500;
  }

  let svgHeight;

  const svgRef = useRef(null);

  // The ancient ritual of rendering the tree diagram
  useEffect(() => {
    const svg = d3.select(svgRef.current); // Entering the mystical realm of SVG

    svg.selectAll('*').remove(); // Clear the SVG element before redrawing

    const width = +svg.attr('width'); // Unlocking the width attribute, a secret dimension
    const height = +svg.attr('height'); // Embracing the height attribute, a hidden world

    const tree = d3.tree().size([width, height - 100]); // The magic formula to create the perfect tree

    const rootNode = d3.hierarchy(data); // The birth of the tree, a glorious moment

    const treeData = tree(rootNode); // The tree takes shape, its branches reaching for the sky

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
      .attr('r', 8)
      .attr('cy', (d) => {
        isTop = !isTop;
        console.log(isTop);
        return isTop ? 0 : 0;
      }); // Adjust the value according to your desired shift

    node
      .append('text')
      .attr('dy', '0.32em')
      .attr('class', 'text')
      .attr('x', 0)
      .attr('y', (d) => {
        isTop = !isTop;
        console.log(isTop);

        return d.data.children ? -25 : (
          isTop ? -20 : -29
        )
      })
      .style('font-size', (d) => (d.data.children ? '16px' : '10px'))
      .text((d) => {
        return `${d.data.name}`;
      });

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
    svgWidth *= 1.0; // Shrinking the trees just a little, to fit within the mortal realm

    if (svgRef.current) {
      svgRef.current.style.width = `${svgWidth}px`; // Modifying the width of the sacred SVG container
      svgRef.current.style.height = `${svgHeight}px`; // Adjusting the height of the holy SVG container
    }
  });

  return (
    <svg
      ref={svgRef}
      width={svgWidth}
      height={120 * depth * 1.25}
      style={{
        background: 'linear-gradient(0deg, rgb(65, 13, 40), rgb(109, 57, 24)) no-repeat',
        //                                                  rgb(143, 95, 32)
      }}
    ></svg>
  );
};

export default TreeDiagram;
