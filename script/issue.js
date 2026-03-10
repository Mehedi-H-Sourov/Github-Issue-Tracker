
let openData = [];
let closeData = [];
let currentStatus = 'all';


const allIssuesContainer = document.getElementById("all-issues-container")
const countOfIssues = document.getElementById("count-of-issues");
const loadingSpinner = document.getElementById("loading-spinner");


const allBtn = document.getElementById("btn-all");
const openBtn = document.getElementById("btn-open");
const closeBtn = document.getElementById("btn-close");

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
    openData = data.data.filter(open => open.status == 'open')
    closeData = data.data.filter(close => close.status == 'closed')
    displayIssues(data.data);
}


// showLabels
4.
function showLabels(arr) {
    const spanCreate = arr.map((labels) => `<span class="${labels == 'bug' ? 'bg-red-200 p-2 text-red-500 rounded-xl m-1' : labels == 'enhancement' ? 'bg-orange-200 text-orange-500 rounded-xl p-2 m-1' : labels == 'documentation' ? 'bg-gray-200 text-gray-500 rounded-xl p-2 m-1' : 'bg-yellow-200 text-yellow-500 rounded-xl p-2 m-1'}"> ${labels == 'bug' ? '<i class="fa-solid fa-bug"></i>' : '<i class="fa-solid fa-life-ring"></i>'} ${labels.toUpperCase()}  </span>`)
    return spanCreate.join(' ')

}

//3. Issue Counts

function issueCount() {
    countOfIssues.innerText = allIssuesContainer.children.length;
}

// 2. Displaying all the cards 

const displayIssues = (issues) => {
    const date = new Date(issues.createdAt);
    const formattedDate = date.toLocaleDateString();

    for (let issue of issues) {
        const cardDiv = document.createElement("div");

        cardDiv.className = `shadow p-4 space-y-3 rounded-md ${issue.status == 'open' ? 'border-t-4 border-green-500' : 'border-t-4 border-purple-500'}`;

        cardDiv.innerHTML = `
        <div class="flex justify-between ">
        
                <img src= "${issue.status == 'open' ? '../Open-Status.png' : '../Closed- Status .png'}" alt="open-close" class="h-8 w-8">
                <p class="px-3 py-2 rounded-full ${issue.priority == 'high'
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

            <div class="flex flex-wrap"> 
            ${showLabels(issue.labels)}
            </div>
            <hr class="border-t-2 border-gray-300 mt-4">

            <p class="text-gray-500 mt-3">${issue.assignee ? issue.assignee : 'anonymous'}</p>
            <br>
            <p class="text-gray-500">${formattedDate}</p>
     `
        allIssuesContainer.appendChild(cardDiv);
        issueCount();
    }

}
loadIssues()


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
    console.log('open');
    allIssuesContainer.innerHTML = ''
    loadingSpinner.classList.remove('hidden')
    displayIssues(openData);

})

closeBtn.addEventListener('click', function () {
    console.log('close');

    allIssuesContainer.innerHTML = ''
    loadingSpinner.classList.remove('hidden')
    displayIssues(closeData);

})
document.getElementById('all-btn').addEventListener('click', function () {
    loadIssues();
})

loadIssues();


// modal showing



