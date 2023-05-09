

  /**
   * 
   * args: 
   * 
   * return .....
   * 
   * This function .......
   */ 
export function printObjectProperties(obj) {
  let props = {};
  for (const prop in obj) {
    props[prop] = typeof obj[prop];
  }

  return props;
}
  