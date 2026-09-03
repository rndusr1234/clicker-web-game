    const clicker = document.getElementById("clicker");
    const CPupgrade = document.getElementById("CPupgrade");
    const ACupgrade1 = document.getElementById("ACupgrade1");
    const ACupgrade2 = document.getElementById("ACupgrade2");
    const ACupgrade3 = document.getElementById("ACupgrade3");
    const ACupgrade4 = document.getElementById("ACupgrade4");
    
    let clicks = 0;
    let clickPower = 1;
    let autoClicks = 1;
    let totalClicks = 0
    let CPcost = 5;
    let ACcost1 = 10;
    let ACcost2 = 100;
    let ACcost3 = 1000;
    let ACcost4 = 10000;
    clicker.addEventListener("click", function() {
        clicks += clickPower;
        totalClicks += clickPower;
        console.log("Clicked")
        updateCount();
    });

    setInterval(function() {
        clicks += autoClicks
        totalClicks += autoClicks
        updateCount();
    }, 1000);

    CPupgrade.addEventListener("click", function() {
        if (clicks >= CPcost){
            clicks -= CPcost;
            clickPower += 1;
            CPcost += 5;
            updateCount();
        } });

    ACupgrade1.addEventListener("click", function() {
        if (clicks >= ACcost1){
        clicks -= ACcost1;
        autoClicks += 1;
        ACcost1 += 10;
        updateCount();
    } });

    ACupgrade2.addEventListener("click", function() {
        if (clicks >= ACcost2){
        clicks -= ACcost2;
        autoClicks += 5;
        ACcost2 += 100;
        updateCount();
    } });

    ACupgrade3.addEventListener("click", function() {
        if (clicks >= ACcost3){
        clicks -= ACcost3;
        autoClicks += 25;
        ACcost3 += 1000;
        updateCount();
    } });

    ACupgrade4.addEventListener("click", function() {
        if (clicks >= ACcost4){
        clicks -= ACcost4;
        autoClicks += 100;
        ACcost4 += 10000;
        updateCount();
    } });

    function updateCount() {
        document.getElementById("clickCount").textContent = clicks;
        document.getElementById("clickPower").textContent = clickPower;
        document.getElementById("autoClicks").textContent = autoClicks;
        document.getElementById("totalClicks").textContent = totalClicks;
        document.getElementById("CPcost").textContent = CPcost;
        document.getElementById("ACcost1").textContent = ACcost1;
        document.getElementById("ACcost2").textContent = ACcost2;
        document.getElementById("ACcost3").textContent = ACcost3;
        document.getElementById("ACcost4").textContent = ACcost4;
    };