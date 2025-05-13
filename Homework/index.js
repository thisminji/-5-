//index.js//index.js
customTag.render("container");


customTag.changeTagName('P');
customTag.render("container");
customTag.changeTextContent('아기사자');
customTag.render("container");
customTag.changeStyles('color', 'red');
customTag.render("container");

customTag.changeStyles('fontSize', '20px');
customTag.render("container");


customTag.setId('myId');
customTag.addClassName('myClass1');

customTag.addClassName('myClass2');
customTag.removeClassName('myClass2');
