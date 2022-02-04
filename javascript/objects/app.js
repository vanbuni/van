let obj = {
    0: 'Van',
    1: 'Carina',
    2: 'Zerrick'
}

let values = Object.values(obj)
let keys = Object.keys(obj)
let entries = Object.entries(obj)
console.log(values);
console.log(keys);
console.log(entries);


let looping = values.forEach(item => console.log(item))
console.log(looping);
values.push('Tevin')
console.log(values);
console.log(entries[1][1]);





var post = {
    id: 2,
    title: 'Hey',
    displayTitle: function(){
        console.log(post.title);
    }
}


var post2 = {
    id:2,
    title: 'Hello JavScript',
    getTitleMarkup: function(tag){

        var markup = '';

        markup += '<' + tag + '>'
        markup += post2.title;
        markup += '</' + tag + '>'

        return markup
    }
}


var titleHTML = post2.getTitleMarkup('h2')

console.log(titleHTML);


var post3 ={
    id: 1,
    title: 'Hey Van',
}

post3.displayTitle = function(){
    console.log(this.title);
}

post3.displayTitle()

var post4 = {
    id:2,
    slug: 'hello-javascript',
    title: 'Hi-javascript'
}

    
post4.getTitleLink = function() {
 var markup = ''
 markup += '<a href="' + this.slug + '">';
 markup += this.title
 markup += '</a>'   
 return markup
}
var title4 = post4.getTitleLink();
console.log(title4);