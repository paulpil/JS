var selectTag = function(tag) {
    return document.getElementsByTagName(tag);
};

var newElm = function(tag) {
    return document.createElement(tag);
};

var createContent = function(tag, value) {
    var elm = newElm(tag);

    var text = document.createTextNode(value);

    elm.appendChild(text);

    return elm;
};

var createP = function(value) {
    return createContent('p', value);
};