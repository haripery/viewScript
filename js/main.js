require([
    "dijit/Menu",
    "dijit/MenuItem",
    "dijit/form/ComboButton",
    "dojo/domReady!"
], function(Menu, MenuItem, ComboButton) {
    var menu = new Menu({ id: "mainMenu" });

    menu.addChild(new MenuItem({
        label: "Edit"
    }));

    menu.addChild(new MenuItem({
        label: "View"
    }));

    menu.addChild(new MenuItem({
        label: "Task"
    }));

    // create a ComboButton and add the Menu
    var comboBtn = new ComboButton({
        label: "Do Something",
        dropDown: menu
    }, "comboBtn");

    menu.startup();
    comboBtn.startup();
});