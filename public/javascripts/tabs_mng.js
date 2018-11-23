function selectTab(event, tab_name) {
    let i, tab_content, tab_links, selected_tab;

    // remove tab from being display
    tab_content = document.getElementsByClassName('tab-pane');
    for (i=0; i<tab_content.length; i++) {
        tab_content[i].className = tab_content[i].className.replace(" show active", "");
    }

    // activate tab according to selected tab button
    selected_tab = document.getElementById(tab_name);
    selected_tab.className += " show active";

    // set all tab buttons inactive
    tab_links = document.getElementsByClassName('nav-link');
    for (i=0; i< tab_links.length; i++) {
        tab_links[i].className = tab_links[i].className.replace(" active", "");
    }
    // activate selected tab button
    event.currentTarget.className += " active";


}