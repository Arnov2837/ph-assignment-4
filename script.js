const totalCount = document.querySelector("#total p");
const interviewCount = document.querySelector("#job-interview p");
const rejectedCount = document.querySelector("#job-rejected p");
const availableText = document.querySelector("section:nth-of-type(2) .flex p");
const cardContainer = document.querySelector(".all-cart");
const filterBtns = document.querySelectorAll("section:nth-of-type(2) .gap-4 button");
const noJobsContainer = document.getElementById("no-jobs");

let activeFilter = "all";

function updateStats() {
    const cards = document.querySelectorAll(".all-cart > div:not(#no-jobs)");
    let visibleCount = 0;
    
    cards.forEach(card => {
        const status = card.getAttribute("data-status") || "none";
        if (activeFilter === "all") {
            card.style.display = (status === "none") ? "block" : "none";
        } else if (activeFilter === "interview") {
            card.style.display = (status === "interview") ? "block" : "none";
        } else if (activeFilter === "rejected") {
            card.style.display = (status === "rejected") ? "block" : "none";
        }
        
        if (card.style.display === "block") visibleCount++;
    });

    availableText.innerText = `${visibleCount} jobs`;
    if (visibleCount === 0) {
        noJobsContainer.classList.replace("hidden", "flex");
    } else {
        noJobsContainer.classList.replace("flex", "hidden");
    }
}

function safeDecrement(element) {
    let val = parseInt(element.innerText);
    element.innerText = val > 0 ? val - 1 : 0;
}

function safeIncrement(element) {
    let val = parseInt(element.innerText);
    element.innerText = val + 1;
}

cardContainer.addEventListener("click", (e) => {
    const card = e.target.closest(".shadow-md");
    if (!card || card.id === "no-jobs") return;

    const badge = card.querySelector(".btn.bg-\\[\\#EEF4FF\\], .btn.bg-green-100, .btn.bg-red-100");
    const intBtn = card.querySelector(".text-green-500");
    const rejBtn = card.querySelector(".text-red-500");
    const currentStatus = card.getAttribute("data-status") || "none";

    if (e.target.classList.contains("text-green-500")) {
        if (currentStatus === "none") safeDecrement(totalCount);
        if (currentStatus === "rejected") safeDecrement(rejectedCount);
        
        safeIncrement(interviewCount);
        card.setAttribute("data-status", "interview");
        
        badge.innerText = "Applied";
        badge.className = "btn bg-green-100 text-green-600 border border-green-500";
        intBtn.disabled = true;
        rejBtn.disabled = false;
        updateStats();
    } 
    else if (e.target.classList.contains("text-red-500")) {
        if (currentStatus === "none") safeDecrement(totalCount);
        if (currentStatus === "interview") safeDecrement(interviewCount);
        
        safeIncrement(rejectedCount);
        card.setAttribute("data-status", "rejected");

        badge.innerText = "Rejected";
        badge.className = "btn bg-red-100 text-red-700 border border-red-600";
        rejBtn.disabled = true;
        intBtn.disabled = false;
        updateStats();
    }
    else if (e.target.closest("button")?.querySelector(".fa-trash")) {
        if (currentStatus === "none") safeDecrement(totalCount);
        else if (currentStatus === "interview") safeDecrement(interviewCount);
        else if (currentStatus === "rejected") safeDecrement(rejectedCount);
        
        card.remove();
        updateStats();
    }
});

filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        filterBtns.forEach(b => b.classList.remove("btn-primary"));
        btn.classList.add("btn-primary");
        activeFilter = btn.innerText.toLowerCase();
        updateStats();
    });
});

updateStats();