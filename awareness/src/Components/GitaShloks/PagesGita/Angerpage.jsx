import React from "react";
import "./Angerpage.css";
function Angerpage() {
  return (
    <div className="Maindiv">
      <div className="head-text">
        <div>
          <img
            className="imagemain"
            src="https://t4.ftcdn.net/jpg/03/68/43/51/360_F_368435161_kCK4lc89hRlSFDZVUVjsFnnHNvnqXCP7.jpg"
            alt=""
          />
        </div>
        <div className="text-on-image">
          <h1 className="mainheading">Shloka</h1>
          <p>duḥkheṣv anudvigna-manāḥ</p>
          <p>sukheṣu vigata-spṛhaḥ</p>
          <p>vīta-rāga-bhaya-krodhaḥ</p>
          <p>sthita-dhīr munir ucyate</p>
          <br />
          <h1 className="mainheading">Translation</h1>
          <p className="para">
            One who is not disturbed in mind even amidst the threefold miseries
            or elated when there is happiness, and who is free from attachment,
            fear and anger, is called a sage of steady mind.
          </p>
          <h1 className="mainheading">Meaning</h1>
          <p className="para">
            <ul>
              <li>
                In this verse, Shree Krishna describes sages of steady wisdom
                as: 1) Vīta rāga—they give up craving for pleasure, 2) Vīta
                bhaya—they remain free from fear, 3) Vīta krodha—they are devoid
                of anger.
              </li>
              <li>
                An enlightened person does not allow the mind to harbor the
                material frailties of lust, anger, greed,etc. Only then can the
                mind be fixed in the divine.
              </li>
              <li>
                More than the present pain itself, it is the memories of past
                pain and apprehensions of future pain that torment the mind.
              </li>
              <li>
                But when the mind drops these two and has to simply grope with
                the present sensation, the pain surprisingly shrinks to a
                manageablesize.
              </li>
              <li>
                It is well known that historically Buddhist monks adopted a
                similar technique for tolerating torture from invading
                conquerors.
              </li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Angerpage;
