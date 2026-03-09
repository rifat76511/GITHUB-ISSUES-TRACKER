console.log("hi iiiiiiiiiiiiiiii")
let issueAllCardInfo =[];
const allIssuesCar =document.getElementById("card-section");
const allBtn =document.getElementById("all-btn");
const openBtn =document.getElementById("open-btn");
const closedBtn =document.getElementById("closed-btn");
let counts =document.getElementById("count-issues");
let loadingSection =document.getElementById("loading-section");
const issueDitais = document.getElementById("iassueDitail");
async function allIssues (){
    const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues");
    const json = await res.json();
    issueAllCardInfo =json.data;
    allCard(json.data);
    console.log(issueAllCardInfo);
}
// loading section 
function remove(){

} 
// count function
function countIssues(countValue){
     counts.innerText= countValue;
}
// all btn
function allbtnActive(id){


allBtn.classList.remove("btn-primary");
openBtn.classList.remove("btn-primary");
closedBtn.classList.remove("btn-primary");
const issuesBtn =document.getElementById(id);
issuesBtn.classList.add("btn-primary")
}

const allCard =(issues)=>{
    issues.forEach(issue => {
let labelsHTML = "";
        issue.labels.forEach(label => {
            let badgeClass = "bg-gray-100 text-gray-600";
            
          
            if(label.toLowerCase() === 'bug') {
                badgeClass = "bg-[#FEE2E2] text-[#EF4444]";
            }
            if(label.toLowerCase() === 'help wanted') {
                badgeClass = "bg-[#FEF9C3] text-[#EAB308]";
            }
            if(label.toLowerCase() === 'enhancement') {
                badgeClass = "bg-[#DCFCE7] text-[#22C55E]";
            }
            if(label.toLowerCase() === 'good first issue'){
                 badgeClass = "bg-[#FEF9C3] text-[#EAB308]";
            }

            
            labelsHTML += `<div class="badge border-none font-bold text-[10px] uppercase p-3 ${badgeClass}">${label}</div>`;
        });
    const card = document.createElement("div");
    card.className =` shadow-xl p-7 rounded-lg border-t-4 ${issue.status == "open" ? "border-green-500" : "border-[#A855F7]"}`;
    card.innerHTML =`
     <div class="flex justify-between mb-4">
                        <img src="./assets/${issue.status == "open" ? "Open-Status.png" : "Closed- Status .png"}" alt="">
                        <div class="badge badge-soft ${issue.priority == "high" ? "badge-error" :issue.priority == "medium" ? "badge-warning" : "bg-[#EEEFF2]"}">${issue.priority}</div>

                    </div>
                    <div onclick ="issuesInfo(${issue.id})" class="mb-4 space-y-2">
                        <h2 class="font-bold text-lg ">${issue.title}</h2>
                        <p class="text-sm opacity-55 line-clamp-2">${issue.description}</p>
                    </div>
                    <div id="bag-${issue.id}" class="mb-5 flex justify-between">
                        ${labelsHTML}
                    </div>
                    <hr class="opacity-30">
                    <div class="mt-6">
                        <h2 class="opacity-55">#${issue.id} by ${issue.author}</h2>
                        <h2 class="opacity-55">${new Date(issue.createdAt).toLocaleDateString()}</h2>
                    </div>
    `;
    
    allIssuesCar.appendChild(card);
   
    countIssues(issueAllCardInfo.length);
    
});
}
function filterIssues(status){
    allIssuesCar.innerHTML ="";
  
    if(status === "all"){
        allCard(issueAllCardInfo); 
        countIssues(issueAllCardInfo.length);
  }
  if(status === "open"){
    const openCard =issueAllCardInfo.filter(issue=> issue.status === "open");
    allCard(openCard);
    countIssues(openCard.length);
  }
  if(status === "closed"){
    const closeCard =issueAllCardInfo.filter(issue=> issue.status === "closed");
    allCard(closeCard);
    countIssues(closeCard.length);
  }
 
}
async function issuesInfo(id){
    const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`);
    const json =await res.json();
    displayDitails (json.data);

}
    function displayDitails(data){
        issueDitais.innerHTML =`
      <div class="modal-box">
                    <div >
                        <div class="space-y-4">
                            <h2 class="text-2xl font-bold ">${data.title}</h2>
                            <p class=" ">
                            <div class="badge bg-green-600 text-white">${data.status}</div> <span class="text-gray-500">. Opened by ${data.assignee} .
                                ${new Date(issue.updatedAt).toLocaleDateString()}</span></p>
                            <div class="flex gap-3">

                            </div>
                            <p class="font-semibold opacity-60">The navigation menu doesn't collapse properly on mobile devices. Need to fix the
                                responsive behavior.</p>
                            <div class="flex p-5 bg-slate-200 rounded-xl">
                                <div class="mr-20">
                                    <p class="opacity-60 mb-1">Assignee:</p>
                                    <h4 class="font-bold text-lg">Fahim Ahmed</h4>
                                </div>
                                <div class="mr-20">
                                    <p class="opacity-60 mb-1">Priority:</p>
                                    <div class="badge badge-soft bg-red-500 text-white">${data.priority}</div>
                                </div>
                            </div>
                        </div>



                    </div>
                    <div class="modal-action">
                        <form method="dialog">
                            <!-- if there is a button in form, it will close the modal -->
                            <button class="btn btn-primary">Close</button>
                        </form>
                    </div>
                </div>
    `
    issueDitais.showModal();
    }
    

allIssues();