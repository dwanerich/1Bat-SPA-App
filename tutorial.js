const survey = document.getElementById("survey")
const form = document.getElementById("form")
const userName = document.getElementById("username")
const errorElement = document.getElementById("error")
const diveIn = document.getElementById('gif-div')

form.addEventListener("submit", (e) => {
    let messages = [], stats = []

    if (survey.value === "" || survey.value == null) {
        messages.push("Selection Required")
    }

    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(", ")
    }

    if (survey.value !== "Beats" || survey.value !== "Code" || survey.value !== "beats" || survey.value !== "code") {
        errorElement.innerText = `Invalid input! Please try again`
    }

    // NEW CODER INTRO
    if (survey.value === "Beats" || survey.value === "beats") {

        stats.push(survey.value);

        
        diveIn.innerHTML = `



        ` 
        errorElement.innerHTML = `

        <h1>${userName.value}!</h1>

        <p>Mason Ranking: ${stats.length * 6}th.</p>

        <h3> Suggested Playlist: Soul Freq by Fabric + Frequency</h3>

        <iframe src="https://open.spotify.com/embed/playlist/4anat28vEho8eSvtZtgHci" width="100%" height="100" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>

        <p>Happy Beats,</p>

        <p>-1-BAT<p/>
        
        `
    }

    // BEATS NEW USER RESPONSE

    if (survey.value === "code" || survey.value === "Code") {

        stats.push(survey.value);

        diveIn.innerHTML = `
        

        `
        errorElement.innerHTML =`

        <h1> Yo ${userName.value}! </h1>
        
        <p>Mason Ranking: ${stats.length * 6}th </p>

        New to coding? - NP! Head over to <a href="https://FreeCodeCamp.org" target="_blank">Free Code Camp</a> & sign up for a free account.

         Start with Responsive Web Design (300 Hours).

        Happy Coding,

        1-BAT

        `
       
    }
})
