function newImage(url, left, up){
let image = document.createElement('img');
image.src = url;
image.style.position = 'fixed';
image.style.left = left;
image.style.bottom = up;
document.body.append(image);
}

function newItem(url, left, up){
let item = document.createElement('img');
item.src = url;
item.style.position = 'fixed';
item.style.left = left;
item.style.bottom = up;
document.body.append(item);

item.addEventListener('dblclick', function(){
    item.remove()
})
}
//assets/tree.png (200px from the left, 300px from the bottom)
//assets/pillar.png (350px from the left, 100px from the bottom)
//assets/crate.png (150px from the left, 200px from the bottom)
//assets/well.png (500px from the left, 425px from the bottom)
newImage('assets/green-character.gif', '100px' , '100px')
newImage('assets/pine-tree.png', '450px' , '200px')
newImage('assets/tree.png', '200px' , '300px')
newImage('assets/pillar.png', '350px' , '100px')
newImage('assets/crate.png', '150px' , '200px')
newImage('assets/well.png', '500px' , '425px')

//assets/shield.png (165px from the left, 185px from the bottom)
//assets/staff.png (600px from the left, 100px from the bottom)
newItem('assets/sword.png', '500px', '405px')
newItem('assets/shield.png', '165px', '185px')
newItem('assets/staff.png', '600px', '100px')