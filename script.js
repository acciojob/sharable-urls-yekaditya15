
document.getElementById('button').addEventListener('click', () => {
    
    const name = document.getElementById('name').value;
    const year = document.getElementById('year').value;

  
    const baseUrl = 'https://localhost:8080/';
    const newUrl = `${baseUrl}?name=${encodeURIComponent(name)}&year=${year}`;


    document.getElementById('url').textContent = newUrl;
});
