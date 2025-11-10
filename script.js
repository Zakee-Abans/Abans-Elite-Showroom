// Static data for City, Showroom, and Showroom Manager Number
const data = [
  ["Abans Elite Liberty Plaza","Thushan Fernando","713385348"],["Abans Elite Colombo City Center","Roshan Wickrama","772561031"],["Abans Elite Dehiwala","Wasanatha Kumara","774034541"],["Abans Elite Galle","Romesh","773534536"],["Abans Elite Maharagama B","Gayan Basnayake","711117474"],["Abans Elite Matara","Vijaya Liyane","714214450"],["Abans Elite Havelock City Mall","Pradeep Fernando","773544833"],["Abans Elite Kalutara","Thushara Abeyrathne","768630516"],["Abans Elite Maharagama","Chinthaka Luckmin","774950804"],["Abans Elite Colombo 03 - Electronics","SivaPerumal","775942203"],["Abans Elite Colombo 03 - Household","Nirmal ","112275252"],["Abans Elite Malabe","Harshana Madushan","773366689"],["Abans Elite Moratuwa","Rasairo","712354677"],["Abans Elite Mount Lavinia","Dilan Muthuthantri","778064878"],["Abans Elite Nawala","Maduranga Perera","755500272"],["Abans Elite Panadura","Udeshkanth","775321493"],["Abans Elite Pelawatta","Amilla Rajapaksha","775599484"],["Abans Elite Piliyandala","Dinesh Madushan","741102655"],["Abans Elite Rajagiriya","Pradeep Sanjeewa","777250256"],["Abans Elite Ratmalana","Sandaruwan ","713142804"],["Abans Elite Thalawathugoda","Sudesh Bandara","773508224"]


];

// Render the table with static data
renderTable(data);

// Render the table with headers and rows
function renderTable(data) {
    const tableHeaders = document.getElementById('tableHeaders');
    const tableBody = document.getElementById('tableBody');

    // Clear existing table content
    tableHeaders.innerHTML = '';
    tableBody.innerHTML = '';

    // Add the table headers
    const headers = ["Showroom", "Showroom Manager", "Showroom Manager Number"];
    headers.forEach(header => {
        const th = document.createElement('th');
        th.innerText = header;
        tableHeaders.appendChild(th);
    });

    // Add the table rows
    data.forEach(row => {
        const tr = document.createElement('tr');
        row.forEach(cell => {
            const td = document.createElement('td');
            td.innerText = cell;
            tr.appendChild(td);
        });
        tableBody.appendChild(tr);
    });
}

// Filter table data based on input (search by city only)
document.getElementById('filterInput').addEventListener('input', filterTable);

function filterTable() {
    const filterValue = document.getElementById('filterInput').value.toLowerCase();

    // Filter the static data based on the filter input
    const filteredData = data.filter(row => {
        // Check if the city (first column) contains the filter string
        return row[0].toLowerCase().includes(filterValue);
    });

    renderTable(filteredData); // Re-render the table with filtered data
}
