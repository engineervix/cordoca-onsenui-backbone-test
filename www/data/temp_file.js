console.log("App is running ... ")

window.fn = {};

window.fn.open = function () {
    var menu = document.getElementById('menu-home');
    menu.open();
};

window.fn.load = function (page) {
    var content = document.getElementById('content');
    var menu = document.getElementById('menu-home');
    content.load(page)
        .then(menu.close.bind(menu));
};

$("#li-home").click(function () {
    fn.load('home.html');
});
$("#li-about").click(function () {
    fn.load('about.html');
});
$("#li-settings").click(function () {
    fn.load('settings.html');
});
$("#li-bugs").click(function () {
    fn.load('bugs.html');
});
$("#li-favourites").click(function () {
    fn.load('favourites.html');
});

var all_IDs = _.pluck(all_items, 'id');

$(document).on('swipeleft', '.company', function (event) {
    console.log('-------------------SHOW NEXT------------------------');
    console.log(event.type + ' is detected. Show Next Company if it Exists');
    the_next_id = 1 + Number($("h3[id^=itm]").attr('id').replace("itm_", ""));
    if (the_next_id <= _.last(all_IDs)) {
        console.log('Next ID: ' + the_next_id);
        next_company = _.findWhere(all_items, {
            id: the_next_id.toString()
        });
        $(this).html("<h3 id=\"itm_" + the_next_id + "\">" + next_company.name + " " + next_company.suffix + "</h3> <em>Lorem ipsum</em>, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15<sup>th</sup> century who is thought to have scrambled parts of <em>Cicero's De Finibus Bonorum</em> et Malorum for use in a type specimen book. It usually begins with: <blockquote> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </blockquote> The purpose of <em>lorem ipsum</em> is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content. <br> The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it's seen all around the web; on templates, websites, and stock designs. Richard McClintock, a Latin scholar from Hampden-Sydney College, is credited with discovering the source behind the ubiquitous filler text — <em>lorem ipsum</em>. <hr> <ons-list> <ons-list-item expandable> <div class=\"left\"> <ons-icon icon=\"fa-chess\" class=\"list-item__icon\"></ons-icon> </div> <div class=\"center\"> Company Catchphrase </div> <div class=\"expandable-content\">" + next_company.catchphrase + " </div> </ons-list-item> <ons-list-item expandable> <div class=\"left\"> <ons-icon icon=\"fa-box-open\" class=\"list-item__icon\"></ons-icon> </div> <div class=\"center\"> Company Branding </div> <div class=\"expandable-content\">" + next_company.branding + " </div> </ons-list-item> </ons-list>");
        $('ons-toolbar .center').html("Company № " + the_next_id);
        console.log("I've rendered the next company");
        console.log('-------------------DONE------------------------');
    } else {
        console.log("Ain't No Next Compmany. I've reached the end");
    }
});

$(document).on('swiperight', '.company', function (event) {
    console.log('-------------------SHOW PREVIOUS------------------------');
    console.log(event.type + ' is detected. Show Previous Company if it Exists');
    the_previous_id = -1 + Number($("h3[id^=itm]").attr('id').replace("itm_", ""));
    if (the_previous_id >= _.first(all_IDs)) {
        console.log('Previous ID: ' + the_previous_id);
        previous_company = _.findWhere(all_items, {
            id: the_previous_id.toString()
        });
        $(this).html("<h3 id=\"itm_" + the_previous_id + "\">" + previous_company.name + " " + previous_company.suffix + "</h3> <em>Lorem ipsum</em>, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15<sup>th</sup> century who is thought to have scrambled parts of <em>Cicero's De Finibus Bonorum</em> et Malorum for use in a type specimen book. It usually begins with: <blockquote> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </blockquote> The purpose of <em>lorem ipsum</em> is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content. <br> The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it's seen all around the web; on templates, websites, and stock designs. Richard McClintock, a Latin scholar from Hampden-Sydney College, is credited with discovering the source behind the ubiquitous filler text — <em>lorem ipsum</em>. <hr> <ons-list> <ons-list-item expandable> <div class=\"left\"> <ons-icon icon=\"fa-chess\" class=\"list-item__icon\"></ons-icon> </div> <div class=\"center\"> Company Catchphrase </div> <div class=\"expandable-content\">" + previous_company.catchphrase + " </div> </ons-list-item> <ons-list-item expandable> <div class=\"left\"> <ons-icon icon=\"fa-box-open\" class=\"list-item__icon\"></ons-icon> </div> <div class=\"center\"> Company Branding </div> <div class=\"expandable-content\">" + previous_company.branding + " </div> </ons-list-item> </ons-list>");
        $('ons-toolbar .center').html("Company № " + the_previous_id);
        console.log("I've rendered the previous company");
        console.log('-------------------DONE------------------------');
    } else {
        console.log("Ain't No Previous Company. I'm at the beginning");
    }
});
