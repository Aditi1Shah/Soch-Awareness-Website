import React from "react";
import "./stylee.css";
import doct3 from "./img/doctor3.png";
import activity1 from "./img/activity1.png";
import activity2 from "./img/activity2.png";
import activity3 from "./img/activity3.png";
import activity4 from "./img/activity4.png";
import med from "./img/medical care.png";

export default function Physicalfitness() {
  return (
    <div className="hero">
      <div className="hero-div">
        <div className="container">
          <div className="left-hero">
            <h1>Physical Fitness</h1>
            <p>
              Physical fitness involves the performance of the heart and lungs,
              and the muscles of the body. And, since what we do with our bodies
              also affects what we can do with our minds, fitness influences to
              some degree qualities such as mental alertness and emotional
              stability.
            </p>
          </div>
          <div className="right-hero">
            <img src={med} alt="report" />
          </div>
        </div>
      </div>

      <div className="div-doctor-advice">
        <div className="doctor-advice container flex">
          <div className="left-doctor-advice">
            <img src={doct3} alt="" />
          </div>
          <div className="right-doctor-advice">
            <h1>What doctor say's about physical fitness?</h1>
            <p>
              Staying active is one of the best ways to keep your body healthy.
              It can also improve your overall well-being and quality of life by
              relieving stress, anxiety, depression, and anger. Maintaining or
              increasing physical activity is also a key lifestyle change that
              can help reverse prediabetes and lower blood pressure.
            </p>
          </div>
        </div>
      </div>

      <div className="activity-div">
        <div id="activity-info">
          <div className="col">
            <h1>Fitness Exercises</h1>
            <p>
              Exercise has been shown to improve your mood and decrease feelings
              of depression, anxiety, and stress.
            </p>
            <p>
              It produces changes in the parts of the brain that regulate stress
              and anxiety. It can also increase brain sensitivity to the
              hormones serotonin and norepinephrine, which relieve feelings of
              depression.
            </p>
            <p>
              Additionally, exercise can increase the production of endorphins,
              which are known to help produce positive feelings and reduce the
              perception of pain. Interestingly, it doesn’t matter how intense
              your workout is. It seems that exercise can benefit your mood no
              matter the intensity of the physical activity.
            </p>
          </div>
          <div className="col" id="activityImg">
            <div className="activity-left">
              <img src={activity1} />
              <img src={activity2} />
            </div>
            <div className="activity-right">
              <img src={activity3} />
              <img src={activity4} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
