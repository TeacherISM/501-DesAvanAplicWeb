// src/class1/es6/TemplateLiterals.tsx

// Variables for our examples
const name = 'Michael';
const id = 'A01781041';
const courses = ['Advanced Web Development', 'Data Structures', 'UI/UX Design'];
const gpa = 3.85;

// Traditional string concatenation
const traditionalGreeting = 'Hello ' + name + ', your ID is ' + id + '.';

// Basic template literals
const templateGreeting = `Hello ${name}, your ID is ${id}.`;

// Template literals with expressions
const templateWithExpression = `Student ${name} has a GPA of ${gpa.toFixed(2)}.`;

// Multiline strings with traditional approach (with escape characters)
const traditionalMultiline = 'This is line 1.\n' +
                           'This is line 2.\n' +
                           'This is line 3.';

// Multiline strings with template literals
const templateMultiline = `This is line 1.
This is line 2.
This is line 3.`;

// Nested template literals
const nestedTemplate = `
  ${name} is enrolled in:
  ${courses.map(course => `  - ${course}`).join('\n')}
  
  Current GPA: ${gpa >= 3.5 ? `${gpa} (Excellent)` : gpa}
`;

// Tagged template literals
function highlight(strings: TemplateStringsArray, ...values: (string | number)[]) {
  return strings.reduce((result, str, i) => {
    const value = i < values.length ? `<strong>${values[i]}</strong>` : '';
    return result + str + value;
  }, '');
}

const highlightedInfo = highlight`Student ${name} with ID ${id} has a GPA of ${gpa}.`;

// Example for the UI
const templateLiteralExample = {
  result: '',
  
  run: () => {
    const result = `
      Traditional vs Template Literals:
      - Traditional: ${traditionalGreeting}
      - Template: ${templateGreeting}
      
      With Expressions:
      ${templateWithExpression}
      
      Multiline Comparison:
      
      Traditional (with \\n):
      "${traditionalMultiline.replace(/\n/g, '\\n')}"
      
      Template Literal:
      \`${templateMultiline}\`
      
      Nested Templates:
      \`${nestedTemplate}\`
      
      Tagged Templates:
      "${highlightedInfo}" (HTML tags added around values)
    `;
    
    templateLiteralExample.result = result;
    
    // Force DOM update by directly manipulating closest result container
    const button = document.activeElement;
    if (button && button instanceof HTMLElement) {
      const resultContainer = button.closest('.example-result');
      if (resultContainer) {
        const resultDiv = resultContainer.querySelector('div');
        if (resultDiv) {
          resultDiv.textContent = result;
        }
      }
    }
    
    return result;
  }
};

export {
  templateGreeting,
  templateWithExpression,
  templateMultiline,
  nestedTemplate,
  highlight,
  highlightedInfo,
  templateLiteralExample
};