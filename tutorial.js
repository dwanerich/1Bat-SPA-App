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
        <p>
        <img src="https://is4-ssl.mzstatic.com/image/thumb/Music113/v4/de/1b/77/de1b771a-555e-71f9-94e8-f7d64172f545/191998319424.png/190x190cc.webp" alt="album cover" height:"100%" width:"100%"> </p>

        ` 
        errorElement.innerHTML = `

        <h1>${userName.value}!</h1>

        <p>Mason Ranking: ${stats.length * 6}th.</p>

        <h3> Producer Spotlight: Fabric + Frequency</h3>

        <p>Available on All Streaming Platforms.

        <p>Inquiries? DM us on IG @1Bat.us.</p>

        <p>Happy Beats,</p>

        <p>-1-BAT<p/>
        
        `
        
    }

    // BEATS NEW USER RESPONSE

    if (survey.value === "code" || survey.value === "Code") {

        stats.push(survey.value);

        diveIn.innerHTML = `
        
        <p><img src="dive-in.gif" alt="diving into space height="50%" width="50%"></p>

        `
        errorElement.innerHTML =`
        <h1> Yo ${userName.value}! </h1>

        <p>Mason Ranking: ${stats.length * 6}th </p>

        New to coding -- NP! Just head over to FreeCodeCamp.org & sign up for a free account.

         Start with FrontEndCurriculum, work thru 1/2 the module then loop back in with us to discuss your ideas for your first project.

        Happy Coding,

        1-BAT

        `
       
    }
})
