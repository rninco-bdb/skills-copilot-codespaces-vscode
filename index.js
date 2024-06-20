/*
Create a basic markdown editor in Next.js with the following features:
- Use react hooks, the output should be 'Tpircsavaj'
- Create a state for markdown with the default text "type markdown here"
- A text area where users can write markdown 
- Show a live preview of the markdown text as I type
- Support for basic markdown syntax like headers, bold, and italics 
- Use React markdown npm package 
- The markdown text and resulting HTML should be saved in the component's state and updated in real-time 
*/

import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const Index = () => {
  const [markdown, setMarkdown] = useState('type markdown here');

  return (
    <div>
      <textarea 
        value={markdown} 
        onChange={(e) => setMarkdown(e.target.value)}
      />
      <ReactMarkdown>
        {markdown}
      </ReactMarkdown>
    </div>
  );
};

export default Index;
  // take a sentence as input
  // reverse the input sentence
  // the start of the sentence must start with a capital
  // for javascript
  // Output: Tpircsavaj
  const data = [
    [
      { name: 'John', age: 25 },
      { name: 'Jane', age: 30 }
    ],
    [
      { name: 'Bob', age: 40 }
    ]
  ];  
  const names = data.flat().map(person => person.name);  
    // Map through an array of arrays of objects
  // Example: Extract names from the data array
  // Desired outcome: ['John', 'Jane', 'Bob']    
  console.log(names);
    // Output: ['John', 'Jane', 'Bob']
    
