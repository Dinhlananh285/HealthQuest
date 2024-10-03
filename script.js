function searchDrug() {
    const drugName = document.getElementById('drug-input').value;
    document.getElementById('result').innerHTML = `Searching for drug information: ${drugName}`;
    // Ở đây, sau này bạn sẽ kết nối với AI hoặc API để lấy dữ liệu thực tế.
}
