export function parseIndentedString(str: string): (string | (string | string[])[])[] {
  const lines = str.split('\n');
  const result: (string | (string | string[])[])[] = [];
  const stack: (string | (string | string[])[])[][] = [result];

  lines.forEach(line => {
    const trimmedLine = line.trim();
    if (trimmedLine === '') { return; }

    // per 2 spaces
    const indentLevel = Math.floor((line.length - trimmedLine.length) / 2);

    while (stack.length > indentLevel + 1) {
      stack.pop();
    }

    const currentLevel = stack[stack.length - 1];

    // add children or string
    if (stack.length === indentLevel + 1) {
      currentLevel.push(trimmedLine);
    } else {
      const newNestedArray: (string | string[])[] = [trimmedLine];
      currentLevel.push(newNestedArray);
      stack.push(newNestedArray);
    }
  });

  return result;
}

export function formatIndentedArray(
  arr: (string | (string | string[])[])[],
  indent: number = 0
): string {
  let result = '';

  arr.forEach(item => {
    if (typeof item === 'string') {
      // add indent and colon
      result += ' '.repeat(indent * 2) + item + ':\n';
    } else if (Array.isArray(item)) {
      result += formatIndentedArray(item, indent + 1);
    }
  });

  return result;
}
