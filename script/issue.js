let allIssues = [];
let openData = [];
let closeData = [];
let currentStatus = 'all';


const allIssuesContainer = document.getElementById("all-issues-container")
const countOfIssues = document.getElementById("count-of-issues");
const loadingSpinner = document.getElementById("loading-spinner");


const allBtn = document.getElementById("btn-all");
const openBtn = document.getElementById("btn-open");
const closeBtn = document.getElementById("btn-close");

const detailsContainer = document.getElementById('modal_details');

// Loading
function showLoading() {
    loadingSpinner.classList.remove("hidden");
    allIssuesContainer.innerHTML = "";

}
function hideLoading() {
    loadingSpinner.classList.add("hidden");
}
// 1.Calling APIs for all cards 

async function loadIssues() {
    showLoading();
    const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues");
    const data = await res.json();
    hideLoading();
    allIssues = data.data;
    openData = data.data.filter(open => open.status == 'open')
    closeData = data.data.filter(close => close.status == 'closed')
    displayIssues(data.data);
}


// showLabels
4.
function showLabels(arr) {
    const spanCreate = arr.map((labels) => `<span class="${labels == 'bug' ? 'bg-red-200 p-2 text-red-500 rounded-2xl m-1' : labels == 'enhancement' ? 'bg-orange-200 text-orange-500 rounded-2xl p-2 m-1' : labels == 'documentation' ? 'bg-gray-200 text-gray-500 rounded-2xl p-2 m-1' : 'bg-yellow-200 text-yellow-500 rounded-2xl p-2 m-1'}"> ${labels == 'bug' ? '<i class="fa-solid fa-bug"></i>' : '<i class="fa-solid fa-life-ring"></i>'} ${labels.toUpperCase()}  </span>`)
    return spanCreate.join(' ')

}

//3. Issue Counts

function issueCount() {
    countOfIssues.innerText = allIssuesContainer.children.length;
}

// 2. Displaying all the cards 

const displayIssues = (issues) => {

    allIssuesContainer.innerHTML = "";

    for (let issue of issues) {
        const date = new Date(issue.createdAt);
        const formattedDate = date.toLocaleDateString();

        const cardDiv = document.createElement("div");

        cardDiv.className = `shadow p-4 space-y-3 rounded-md  ${issue.status == 'open' ? 'border-t-4 border-green-500' : 'border-t-4 border-purple-500'}`;

        cardDiv.innerHTML = `
       <div onclick="modalDetails(${issue.id})"> 
        <div class="flex justify-between ">
        
                <img src= "${issue.status == 'open' ? '../Open-Status.png' : '../Closed- Status .png'}" alt="open-close" class="h-8 w-8">
                <p  class="px-3 py-2 rounded-full ${issue.priority == 'high'
                ? 'text-red-500 font-bold bg-red-100'
                : issue.priority == 'medium'
                    ? 'text-yellow-500 bg-yellow-100 font-bold'
                    : 'text-gray-500 bg-gray-200 font-bold'
            }"> ${issue.priority} </p>
            </div>

            <div class="mb-3">
                <h3 class="font-bold mb-2">${issue.title}</h3>
                <p class="text-gray-500 line-clamp-2">${issue.description}</p>
            </div>

            <div class="flex flex-wrap" > 
            ${showLabels(issue.labels)}
            </div>
            <hr class="border-t-2 border-gray-300 mt-4">

            <p class="text-gray-500 mt-3">${issue.assignee ? issue.assignee : 'anonymous'}</p>
            <br>
            <p class="text-gray-500">${formattedDate}</p>
       </div>
     `
        allIssuesContainer.appendChild(cardDiv);
        issueCount();
    }

}




// Button click 


function toggleStyle(id) {

    allBtn.classList.remove('btn-primary')
    openBtn.classList.remove('btn-primary')
    closeBtn.classList.remove('btn-primary')
    const selectedBtn = document.getElementById(id);
    selectedBtn.classList.add('btn-primary');

}

// open and close tabs 

openBtn.addEventListener('click', function () {
    allIssuesContainer.innerHTML = ''
    loadingSpinner.classList.remove('hidden');
    displayIssues(openData);

})

closeBtn.addEventListener('click', function () {
    allIssuesContainer.innerHTML = ''
    loadingSpinner.classList.remove('hidden');
    displayIssues(closeData);

})

allBtn.addEventListener('click', function () {
    allIssuesContainer.innerHTML = ''
    loadingSpinner.classList.remove('hidden');
    loadIssues();

})

// modal showing

async function modalDetails(id) {
    const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`)
    const data = await res.json()
    displayModal(data.data);
}

const displayModal = (details) => {
    const date = new Date(details.createdAt);
    const formattedDate = date.toLocaleDateString();
    const modalCard = document.getElementById("details-container");
    modalCard.innerHTML = `
     <h2 class="text-xl font-bold mb-3">${details.title}</h2>
     <div class="flex gap-4 items-center">
      <span class="badge badge-success rounded-2xl text-xl p-4">${details.status} </span>
      <p class="text-gray-500" >Opened by</p>
      <p class="text-gray-500 flex items-center gap-4"> <img src="./Ellipse 5.png" alt=""> ${details.assignee ? details.assignee : 'anonymous'}</p>
      <p class="text-gray-500 flex items-center gap-4"><img src="./Ellipse 5.png" alt=""> ${formattedDate}</p>  
     </div>

     <div class=" mb-4">
      <div class= "flex flex-wrap rounded-2xl">${showLabels(details.labels)}</div>
     </div>

    </div>
    <div class="mb-4">
      <p class="text-gray-500">${details.description}</p>
    </div>

    <div class="flex justify-between bg-blue-50 p-5 rounded-sm">
      <div>
         <p class="text-gray-500">Assignee</p>
         <p class="font-bold">${details.author}</p>

      </div>
      <div>
         <p class="text-gray-500 mb-3">Priority</p>
         <span class="p-2 mt-2 rounded-xl font-bold ${details.priority == 'high'
            ? 'text-red-500 font-bold bg-red-100'
            : details.priority == 'medium'
                ? 'text-yellow-500 bg-yellow-100 '
                : 'text-gray-500 bg-gray-200 '

        }">${details.priority}</span>
      </div>
      `
    document.getElementById("modal_details").showModal()


}


loadIssues();

document.getElementById('btn-search').addEventListener('click', (e) => {
    e.preventDefault();

    const input = document.getElementById('input-search');
    const searchValue = input.value.trim().toLowerCase();

    // if search box is empty - show all value
    const filteredIssues = searchValue
        ? allIssues.filter(issue => issue.title.toLowerCase().includes(searchValue))
        : allIssues;


    displayIssues(filteredIssues);
    allBtn.classList.remove('btn-primary');
    openBtn.classList.remove('btn-primary');
    closeBtn.classList.remove('btn-primary');

    input.value = '';

});









