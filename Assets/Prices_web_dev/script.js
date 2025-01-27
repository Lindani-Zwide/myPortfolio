document.querySelector('button').addEventListener('click', function() {
    // Scroll to pricing section
    document.querySelector('#pricing').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('footer').innerHTML=   `
    <p>&copy; ${(new Date()).getFullYear()} Lindani Mthembu</p>
`