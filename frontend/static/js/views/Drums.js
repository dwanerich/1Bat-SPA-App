import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super()
        this.setTitle("Drums");
    }

    async getHtml() {
        return `
        <div style="text-align: center;">

    <a href="/"><img src="/bannerlogo.png"  style="width: 50%; text-align: center; border: yellow 1px; border-style: solid; margin-bottom: 10px;">
    </a>
    
</div>

<div style="height: 225px; text-align: center; font-family: 'Courier New', Courier, monospace; border: solid; border-style: solid; border-color: white; margin-top: 50px; margin-bottom: 150px; color: black; background-image: url(https://c.tenor.com/Ulxx0B3BbiwAAAAC/kanye-west-free-larry-hoover-concert.gif); background-size: cover;">
    <h1 style="background-color: white;">drum machine
                <h5 style="background-color: white;">sounds by Illmind BlapGod Pack © </h5>    
                
            </h1>

    <span class="drum-machine-container">
    
        <span id='kick' data-key="65" class="sound" name='808'>
             
        </span>
    
        <span id='snare' data-key="83" class="sound">
        </span>
        <span id='hat' data-key="68" class="sound">
        </span>
        <span id= 'perc' data-key="70" class="sound">
        </span>
    </span>
</div>

<audio data-key="65" id='kick' src="kit/KICK_INSIDE_JOB_SUB.wav"></audio>
<audio data-key="83" id='snare' src="kit/HH_THEKING.wav"></audio>
<audio data-key="68" id='hat' src="kit/CLAP_KNIGHT_IN_SHINING_2.wav"></audio>
<audio data-key="70" id='perc' src="kit/CLAP_INSANITY.wav"></audio>
  

        `;
    }

}
