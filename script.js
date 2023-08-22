function ptcal() {
    let input1 = document.getElementById("input1").value;
    let output1 = Number(input1) * 4;
    output1 = output1  + "%"
    console.log(output1);
    document.getElementById("output").innerHTML = output1;
}

function hycal() {
    let input2 = parseFloat(document.getElementById("input2").value);
    
    if (isNaN(input2)) {
        alert("Please enter a valid number for marks.");
        return;
    }

    let output2 = (input2 / 80) * 100;
    output2 = output2.toFixed(2) + "%";
    
    console.log(output2);
    document.getElementById("output1").innerHTML = "Percentage: " + output2;
}

function calculatePercentage() {
    let maxMarks = parseFloat(document.getElementById("inputMM").value);
    let obtainedMarks = parseFloat(document.getElementById("input3").value);

    if (isNaN(maxMarks) || isNaN(obtainedMarks)) {
        alert("Please enter valid numbers for maximum marks and obtained marks.");
        return;
    }

    let percentage = (obtainedMarks / maxMarks) * 100;
    percentage = percentage.toFixed(2) + "%";

    console.log(percentage);
    document.getElementById("output2").innerHTML = "Percentage: " + percentage;
}