$(function() {
    // get reference to the <link>
    var templateImport = document.getElementById('template-header');

    // import the <link> file contents
    var contents = templateImport.import;

    // get a reference to the header contents in the imported file
    var templateHead = contents.getElementById('template-head');
    var templateFoot = contents.getElementById('template-foot');

    // create a clone of the template content for header and footer
    var cloneHead = document.importNode(templateHead.content, true);
    var cloneFoot = document.importNode(templateFoot.content, true);
    
    // append the clone to the sections of the page they should belong
    document.getElementById('header-post').appendChild(cloneHead);
    document.body.appendChild(cloneFoot);
});