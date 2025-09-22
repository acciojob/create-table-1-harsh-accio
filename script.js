function insert_Row() {
    //Write your code here
	const table = document.getElementById('sampleTable');
	const tr = document.createElement('tr');
	tr.innerHTML=`
	<td>New Cell1</td>
	<td>New Cell2</td>
	`;
	table.insertBefore(tr,table.firstChild);
}
