// src/class1/A01781041/api/userApi.ts

// Define the user interface based on the API response
export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      geo: {
        lat: string;
        lng: string;
      }
    };
    phone: string;
    website: string;
    company: {
      name: string;
      catchPhrase: string;
      bs: string;
    }
  }
  
  // Function to fetch users from the JSONPlaceholder API
  export const fetchUsers = async (): Promise<User[]> => {
    try {
      // Using fetch API with async/await
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      
      // Check if the response is OK
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      // Parse the JSON response
      const data: User[] = await response.json();
      
      // Return the data
      return data;
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
  };
  
  // Function to fetch a single user by ID
  export const fetchUserById = async (id: number): Promise<User> => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      const data: User = await response.json();
      return data;
    } catch (error) {
      console.error(`Error fetching user with ID ${id}:`, error);
      throw error;
    }
  };
  
  // Function to filter users by property
  export const filterUsersByProperty = (
    users: User[], 
    property: keyof User, 
    value: string
  ): User[] => {
    // Convert value to lowercase for case-insensitive comparison
    const lowerValue = value.toLowerCase();
    
    // Use array filter method to find matching users
    return users.filter(user => {
      // Get the user property value and ensure it's a string
      const propertyValue = String(user[property]).toLowerCase();
      
      // Return true if the property value includes the search value
      return propertyValue.includes(lowerValue);
    });
  };
  
  // Function to extract specific user data (using destructuring)
  export const extractUserInfo = (user: User) => {
    // Destructure the properties we want
    const { id, name, email, phone, website, company: { name: companyName } } = user;
    
    // Return a new object with just those properties
    return { id, name, email, phone, website, companyName };
  };
  
  // Function to process multiple users
  export const processUserData = (users: User[]) => {
    // Use map to transform each user
    return users.map(user => {
      // Destructure and process each user
      const { id, name, username, email, address } = user;
      
      // Destructure nested address
      const { city, zipcode } = address;
      
      // Return a transformed object
      return {
        id,
        name,
        username,
        email,
        location: `${city}, ${zipcode}`,
        // Create a display property using template literals
        displayName: `${name} (@${username})`,
      };
    });
  };