import Dashboard from "./views/dashboard.js";
import Drums from "./views/drums.js";
import Branding from "./views/branding.js";



const navigateTo = url => {
    history.pushState(null, null, url);
    router()
}
// console.log('this is my index.js file')

const router = async () => {
    const routes = [
        // {path: "/", view: () => (console.log('viewing dashboard')) },
        { path: "/", view: Dashboard },
        { path: "/drums", view: Drums },
        { path: "/branding", view: Branding },



        // { path: "/drums", view: () => (console.log('viewing drums')) },
        // { path: "/branding", view: () => (console.log('viewing branding')) },

    ];

    // testing each route for match

    const routeMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        }
    })

    let match = routeMatches.find(routeMatches => routeMatches.isMatch);

    if(!match) {
        // home page set to default for routes that !Match
        match = {
            route: routes[0],
            isMatch: true
        };
    }

    // after adding views and implementing view routes
    const view = new match.route.view();

    document.getElementById('#app').innerHTML = await view.getHtml();
    
    console.log(match.route.view());

};

window.addEventListener('popstate', router)

document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    })
    router()
})