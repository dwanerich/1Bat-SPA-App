import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super()
        this.setTitle("Branding");
    }

    async getHtml() {
        return `
         <div style="text-align: center;">
        <a href="/"><img src="bannerlogo.png"
                style="width: 50%; text-align: center; border: yellow 1px; border-style: solid; margin-bottom: 10px;">
        </a>
            </div>

        <center>
            <div class="form-results-div" id='form-results-div'>

            </div>
        <div id="error" class="error-div">              
            <p style="font-size: .75in;" style="color: gray;">branding</p>
            <iframe src="https://player.vimeo.com/video/339243519?h=982b3cb230&autoplay=1&byline=0&portrait=0" width="640"
                height="440" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
            </div>
            
    </center>
       
        `;
    }

}
