const tableBody = document.getElementById('table-body');

const flights = [
    {
        time: "09:45",
        destination: "New York",
        flight: "NY 123",
        gate: "B 12",
        remarks: "Boarding"
    },
    {
        time: "14:20",
        destination: "Paris",
        flight: "PA 456",
        gate: "C 25",
        remarks: "Delayed"
    },
    {
        time: "17:55",
        destination: "London",
        flight: "LDN 789",
        gate: "A 18",
        remarks: "On Time"
    },
    {
        time: "21:10",
        destination: "Sydney",
        flight: "SYD 555",
        gate: "D 7",
        remarks: "Boarding Soon"
    },
    {
        time: "23:40",
        destination: "Beijing",
        flight: "BJ 321",
        gate: "E 15",
        remarks: "Arrived"
    },
    {
        time: "08:15",
        destination: "Tokyo",
        flight: "TKO 987",
        gate: "F 22",
        remarks: "On Time"
    },
    {
        time: "12:30",
        destination: "Dubai",
        flight: "DB 567",
        gate: "G 33",
        remarks: "Delayed"
    },
    {
        time: "15:45",
        destination: "Rio de Janeiro",
        flight: "RJ 654",
        gate: "H 7",
        remarks: "On Time"
    },
    {
        time: "19:20",
        destination: "Berlin",
        flight: "BR 321",
        gate: "I 15",
        remarks: "Boarding"
    },
    {
        time: "22:55",
        destination: "Cape Town",
        flight: "CT 111",
        gate: "J 9",
        remarks: "On Time"
    }
];

(function generateData() {
    //randomize the data
    flights.sort(() => Math.random() - 0.5)
    //create rows depending on the flight 
    for (const flight of flights) {
        const tableRow = document.createElement("tr");

        //create table cell
        for (const flightInfo in flight) {
            const tableCell = document.createElement("td");
            const words = Array.from(flight[flightInfo])

            //letter splitting
            for (const [index, letter] of words.entries()) {
                const letterCell = document.createElement("div");

                setTimeout(() => {
                    letterCell.textContent = letter
                    letterCell.classList.add("flip")
                    tableCell.append(letterCell)
                }, 100 * index)
            }

            tableCell.style.textTransform = "uppercase";
            tableRow.append(tableCell);
        }

        tableBody.append(tableRow);
    }
})();
