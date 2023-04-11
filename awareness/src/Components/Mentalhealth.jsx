import React from "react";
import "./Mentalhealth.css";
import Mentalhealthfirst from "./Subcomponents/Mentalhealthfirst";
import Textanimation from "./Textanimation";
export default function Mentalhealth() {
  return (
    <div className="mentalhealth">
      <div classname="mentalhealthwrapper">
        <img
          src="https://pointemagazine.com/wp-content/uploads/2022/11/GettyImages-1328878125.jpg"
          alt=""
          className="photos"
        />
        <div className="titlecomp">
          {/* <h1 className="titlefirst">A healthy mind is an asset</h1> */}
          <Textanimation />
        </div>
        <h1 className="titles">What is Mental Health?</h1>
        <p className="para">
          Mental health refers to a person’s psychological, social, and
          emotional well-being. Just like physical health, mental health is
          something everybody can actively work on. A mental illness is any
          disorder in the brain that affects mood, thinking or behavior,
          believed to be caused by genetic, biological, and environmental
          factors.
        </p>
        <h1 className="titles">Why is Mental health important</h1>
        <p className="para">
          Mental illnesses may affect a person’s ability to function, relate to,
          and communicate with others. The condition may be temporary, lasting a
          few months or years, or it may be chronic and affect the person their
          entire life. Early intervention and treatment are often helpful in
          managing a mental illness.
        </p>
        <h1 className="titles">Cases of Mental illness worlwide</h1>
        <div className="casesmaincontainer">
          <div className="Casespara">
            <p>
              About 800,000 people die by suicide worldwide every year.
              <br />
              In the United States, about 1 in 4 adults and 1 in 5 children have
              a mental illness in any given year. The most common mental
              illnesses include anxiety, depression, obsessive-compulsive
              disorder (OCD), bipolar disorder, and schizophrenia.
              <br />
              The number of deaths by suicide has seen an increasing trend from
              2016 to 2019. In 2019, it increased by 4.6% compared to 2018.
              There were 25,891 suicides reported in the largest 53 mega cities
              of India in 2021. In the year 2021, Delhi City(2,760) recorded the
              highest number of deaths by suicide among the four metropolitan
              cities, followed by Chennai (2,699), Bengaluru (2,292) and Mumbai
              (1,436). These four cities together reported almost 35.5% of the
              total suicides reported from the 53 mega cities.
            </p>
          </div>

          <img
            src="https://s01.sgp1.cdn.digitaloceanspaces.com/inline/jpjxsxvpez-1664538493.png"
            alt="Chart showing increasing cases of suicides in India"
            className="casesimg"
          />
        </div>
        <h1 className="titles">
          Why Indians are finding it harder to be happy
        </h1>
        <div className="containertwo">
          <img
            src="https://assets.weforum.org/editor/ZM8M512ZI2ZMZagSB3MwmmX1URuwvccSy5ISTECukwo.PNG"
            alt=""
            className="leftphoto"
          />
          <div className="right">
            <ul className="list">
              <li className="listitem">
                <h3>
                  An Ipsos poll of the happiest nations finds the mental
                  well-being of people in India is declining.
                </h3>
              </li>
              <li className="listitem">
                <h3>
                  Digitization, the pandemic and urbanization are thought to
                  have increased levels of anxiety and stress.
                </h3>
              </li>
              <li className="listitem">
                <h3>
                  Concern about mental health and awareness of its importance
                  for overall well-being is growing worldwide.
                </h3>
              </li>
              <li className="listitem">
                <h3>
                  Many companies are embracing positive messaging to tackle
                  mental health issues in the workplace.
                </h3>
              </li>
            </ul>

            <p className="pararight">
              Indians used to record some of the highest scores in global
              happiness ratings, but from the summer of 2019, things began to
              unravel. Ipsos’ Global Happiness Survey 2020 found that, by August
              2020, only 66% of Indians described themselves as ‘very happy’ or
              ‘rather happy’, down 23 percentage points from 2011, and 11
              percentage points lower than 2019.
            </p>
          </div>
        </div>
        <h1 className="titles"> Read More </h1>
      </div>
    </div>
  );
}
