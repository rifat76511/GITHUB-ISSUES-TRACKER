console.log("hi iiiiiiiiiiiiiiii")
const allIssuesCar =document.getElementById("card-section");

async function allIssues (){
    const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues");
    const json = await res.json();
    allCard(json.data);
}

const allCard =(issues)=>{
    issues.forEach(issue => {
    const card = document.createElement("div");
    card.className =` shadow-xl p-7 rounded-lg border-t-4 ${issue.status == "open" ? "border-red-400" : "border-green-200"}`;
    card.innerHTML =`
     <div class="flex justify-between mb-4">
                        <img src="./assets/${issue.status == "open" ? "Open-Status.png" : "Closed- Status .png"}" alt="">
                        <div class="badge badge-soft ${issue.priority == "high" ? "badge-error" :issue.priority == "medium" ? "badge-warning" : "bg-[#EEEFF2]"}">${issue.priority}</div>

                    </div>
                    <div class="mb-4 space-y-2">
                        <h2 class="font-bold text-lg ">${issue.title}</h2>
                        <p class="text-sm opacity-55 line-clamp-2">${issue.description}</p>
                    </div>
                    <div class="mb-5">
                        <div class="badge bg-[#FDE68A] badge-warning">Bug</div>
                        <div class="badge bg-[#FDE68A] badge-warning">help wanted</div>
                    </div>
                    <hr class="opacity-30">
                    <div class="mt-6">
                        <h2 class="opacity-55">#${issue.id} by ${issue.author}</h2>
                        <h2 class="opacity-55">${issue.createdAt}</h2>
                    </div>
    `;
    allIssuesCar.appendChild(card);
    
});
}
allIssues();