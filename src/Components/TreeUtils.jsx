const calculateMaxChildrenAtDepth = (data) => {
    let maxChildrenAtDepth = [1]; // Maximum number of children at depth 0 is 1 (root node)
    let queue = [data];
  
    while (queue.length > 0) {
      const node = queue.shift();
      const depth = node.depth + 1;
  
      if (!maxChildrenAtDepth[depth]) {
        maxChildrenAtDepth[depth] = 0;
      }
  
      if (node.children && node.children.length > maxChildrenAtDepth[depth]) {
        maxChildrenAtDepth[depth] = node.children.length;
      }
  
      if (node.children) {
        queue = [...queue, ...node.children];
      }
    }
  
    return maxChildrenAtDepth;
  };
  
  export default calculateMaxChildrenAtDepth;
  
  