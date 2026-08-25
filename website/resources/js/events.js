// Load API from kide.app
async function loadKideAPI() { 
    const res = await fetch("https://api.kide.app/api/companies/ac0a8d32-9274-4fc6-a6ba-e5dfbf557029");
    const data = await res.json();
    const upcomingEvents = data.model.events;
    console.log(upcomingEvents)
    upcomingEvents.forEach(element => {
        
    });
}

loadKideAPI();