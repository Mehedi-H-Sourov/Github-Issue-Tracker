// "status": "open",
// "assignee": "jane_smith",
// "updatedAt": "2024-01-15T10:30:00Z"/ 

const loadIssues = () => {
    fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
        .then((res) => res.json())
        .then((json) => displayIssues(json.data))
};


const displayIssues = (issues) => {
    // 1. get the container and empty it 
    const cardContainer = document.getElementById("card-container")
    const borderColor = document.getElementById('border-color');
    cardContainer.innerHTML = "";
    // 2. for loop 
    for (let issue of issues) {
        // 3. create element
        const labelsHTML = issue.labels
            .map(label => `<span class="badge badge-outline bg-red-400 border-0 mr-1.5">${label}</span>`)
            .join("");

        const cardDiv = document.createElement("div");


        if (issue.status == "open") {

            cardDiv.innerHTML = `
           <div class=" p-4 space-y-2 shadow-xl w-full h-full border-t-4 border-green-500 rounded-xl">
            <div class="flex justify-between items-center ">
                <img class="w-100%" src="./assets/Open-Status.png" alt="img">
                <div class=" uppercase text-xl p-4 font-bold badge badge-outline badge-error bg-red-200 border-0">${issue.priority}</div>
            </div>

            <h2 class="text-2xl font-bold">${issue.title}</h2>
            <p class="text-gray-500">${issue.description}</p>
            <div class="p-5 uppercase"> ${labelsHTML}</div>
            <hr class="border border-gray-400">
            <p>${issue.author}</p>
            <br>
            <p>${issue.createdAt}</p>
        </div>`
        }
        else if (issue.status = "closed") {
            cardDiv.innerHTML = `
           <div class=" p-4 space-y-2 shadow-xl w-full h-full border-t-4 border-purple-500 rounded-xl">
            <div class="flex justify-between items-center ">
                <img class="w-100%" src="./assets/Closed- Status .png" alt="img">
                <div class=" text-xl p-4 font-bold badge badge-outline badge-error bg-red-200 border-0">${issue.priority}</div>
            </div>

            <h2 class="text-2xl font-bold">${issue.title}</h2>
            <p class="text-gray-500">${issue.description}</p>
            <div class="p-5"> ${labelsHTML}</div>
            <hr class="border border-gray-400">
            <p>${issue.author}</p>
            <br>
            <p>${issue.createdAt}</p>
        </div>`

        }


        // 4. append the new element into the container
        cardContainer.append(cardDiv);

    }
}

loadIssues();