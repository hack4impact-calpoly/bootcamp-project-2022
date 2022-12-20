import React from "react";
import "./about.css";

export default function About() {
  return (
    // replace everything in between the <header> & <header /> tags
    // with your navbar code from your earlier milestones
    <header>
      <div>
        {/* <!------page content--------------->   */}
        <h1 className="important_titles">About Me</h1>

        <p className="big_text">

            I like to eat food, not make it. Although I have been trying to bake.
        </p>
        <p>
            Here is a picture of my new dog Bojack!
        </p>
        <img src = "https://u-static.fotor.com/uid_d3c78559b62f4b1ba4044fd13d9197a1/8a15f59d39874901a13f4f917cf0e065_editor.png@300w_300h_1s.src?timestamp=1666572885434" alt = "new_dog"/>
    </div>
    </header>
  );
}