function insert_Row() {
    const table = document.getElementById('sampleTable');
    const tbody = table.tBodies[0] || table; // get tbody if exists
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>New Cell1</td>
        <td>New Cell2</td>
    `;
    // Insert at top
    tbody.insertBefore(tr, tbody.firstElementChild);
}