/*
 Create HTML element to render either overview of detail
 .createElement(container) to create the HTML element
 Append a child with appendChild(content) (forloop)
 function needs to get an array of items for example data.data.attributes, data.data.attributes.description, data.data.attributes.startData

 if typeContent = details
  createContent(typeContent(details), data)
    for data.data.attributes .
*/

const isTypeOfContent = (typeOfContent) => {
  return typeOfContent === 'details'
}

export const createContent = (typeContent, content) => {
  if (isTypeOfContent(typeContent)) {
    console.log(content)
  } else {
    console.log(`${content} overview`)
  }
}

/*
  Content forloop, for ieder element in de array createElement
*/
