import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super()
        this.setTitle("Dashboard");
    }

    async getHtml() {
        return `
         <div>
            <a href="/">
                <img src="bannerlogo.png" width="100%">
            </a>
            </div>
            <!-- end of header -->

        <center>
            <div class="form-results-div" id='form-results-div'>

            </div>
        <div id="error" class="error-div">              
            <p style="font-size: .75in;" style="color: gray;">tap in</p>
                <form id="form">

                    <input type="text" class="input" id="username" name="username" placeholder="What's your name?">
                    <input type="text" class="input" id="survey" name="survey" placeholder="Beats or Code?">
                    <br>
                    <input type="submit" class="buttons" value="Submit">
            
                </form>  
            </div>
            
    </center>
       



        `;
    }

}
