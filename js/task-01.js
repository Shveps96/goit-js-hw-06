const categories = document.querySelector('#categories');
console.log(`Number of categories: ${categories.children.length}`);

categories.querySelectorAll('.item').forEach(item => {
    console.log(`Category: ${item.querySelector('h2').textContent}`);
    console.log(`Elements: ${item.querySelector('ul').children.length}`);
})
