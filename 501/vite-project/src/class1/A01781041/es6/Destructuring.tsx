// src/class1/A01781041/es6/Destructuring.tsx

// Object destructuring examples
const person = {
  name: 'Michael',
  id: 'A01781041',
  role: 'Student',
  contact: {
    email: 'michael@example.com',
    phone: '123-456-7890'
  },
  skills: ['JavaScript', 'React', 'TypeScript'],
  gpa: 3.9
};

// Basic object destructuring
const { name, id } = person;

// Destructuring with renamed variables
const { name: studentName, id: studentId } = person;

// Destructuring with default values
const { gpa = 4.0 } = person;

// Nested object destructuring
const { contact: { email, phone } } = person;

// Array destructuring
const colors = ['red', 'green', 'blue', 'yellow', 'purple'];

// Basic array destructuring
const [primary, secondary, tertiary] = colors;

// Skip elements with commas
const [firstColor, , thirdColor] = colors;

// Rest operator in array destructuring
const [mainColor, ...otherColors] = colors;

// Destructuring function parameters
function displayStudent({ name, id, role }: typeof person) {
  return `${name} (${id}) - ${role}`;
}

// Example for the UI
const destructuringExample = {
  result: '',
  
  run: () => {
    const resultObject = `
      Basic object destructuring:
      name = "${name}"
      id = "${id}"
      
      Renamed variables:
      studentName = "${studentName}"
      studentId = "${studentId}"
      
      With default values:
      gpa = ${gpa} (default value since it doesn't exist)
      
      Nested destructuring:
      email = "${email}"
      phone = "${phone}"
    `;
    
    const resultArray = `
      Array destructuring:
      primary = "${primary}"
      secondary = "${secondary}"
      tertiary = "${tertiary}"
      
      Skipping elements:
      firstColor = "${firstColor}"
      thirdColor = "${thirdColor}"
      
      Rest operator:
      mainColor = "${mainColor}"
      otherColors = [${otherColors.map(c => `"${c}"`).join(', ')}]
      
      Function parameter:
      ${displayStudent(person)}
    `;
    
    const result = resultObject + '\n' + resultArray;
    destructuringExample.result = result;
    
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

export { person, colors, displayStudent, destructuringExample };