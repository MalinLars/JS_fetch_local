/*Different ways of reading data from a source*/

//promise chaining
function readFilePromise() {

    fetch('customers.json')
    .then(response => {
        if(!response.ok) {
            throw new Error('Fetch error: ' + response.status);
        }
        return response.json();
    })
    .then(customers => {
        generateHTML(customers);
    })
    .catch(error => {
        console.log( error);
    })
}
// Async function
async function readFileAsync(){
    let data = await fetch('customers.json');
    let customers = await data.json();
    generateHTML(customers);
}

async function readFileAsync2() {
    try {
        let data = await fetch('customers.json');
        let customers = await data.json();
        generateHTML(customers);
    } catch{
        console.log('Error, could not read from json file');
    }
   
}
//Render HTML
function generateHTML(customers) {
    let html = '';
    for(let customer of customers) {
        html += `
        <h3>${customer.firstName} ${customer.lastName}</h3>
        <p>${customer.firstName} works at ${customer.companyName}.</p>
        `;
        
    }
    html += '<hr>';
        let customerDiv = document.createElement('div');
        customerDiv.innerHTML = html;
        document.querySelector('body').append(customerDiv);
} 
readFilePromise();
readFileAsync();
readFileAsync2();