export const calculateJsonDepth = (json, depth = 1) => {
  let maxDepth = depth;
  if (json.children && json.children.length > 0) {
    for (const child of json.children) {
      const currentDepth = calculateJsonDepth(child, depth + 1);
      maxDepth = Math.max(maxDepth, currentDepth);
    }
  }
  return maxDepth;
};
