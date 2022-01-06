// console.log('this is my index.js file')

const router = async () => {
    const routes = [
        {path: "/", view: () => (console.log('viewing dashboard')) },
        { path: "/drums", view: () => (console.log('viewing drums')) },
        { path: "/branding", view: () => (console.log('viewing branding')) },

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
        match = {route: routes[0],
        isMatch: true
        };
    }

    console.log(match, routeMatches);
};

document.addEventListener("DOMContentLoaded", () => {
    router()
})