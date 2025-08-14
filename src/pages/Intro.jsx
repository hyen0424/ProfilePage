import { introText } from "../contents/textdata";
import workspace from "../assets/images/photo_0.jpg";
function Intro() {
  return (
    <section id="intro">
      <div className="intro_inner">
        <h2 className="intro_title">{introText.title}</h2>
        <div className="intro_text">
          <div className="text">
            <div>{introText.desc[0]}</div>
            <div>{introText.desc[1]}</div>
            <div>{introText.desc[2]}</div>
          </div>
          <div className="img">
            <img src={workspace} alt="workspace"></img>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
