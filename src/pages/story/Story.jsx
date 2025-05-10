import React from "react";
import "./story.css";
import rd from "../../assets/wed.png";
import one from "../../assets/one.png";
import two from "../../assets/two.png";
import three from "../../assets/three.png";
const Story = () => {
  return (
    <div className="hehe">
      <div className="wedding_img">
        <img
          src="https://i.imgur.com/PEwVVRu.jpeg"
          alt=""
          className="wed_img"
        />
      </div>
      <div className="dota">
        <p className="wed_title MALLIKA">
          " Our love story is a journey filled with unforgettable moments,
          laughter, and adventure. Here’s how it all began and where it’s taking
          us.”
        </p>
      </div>

      <div className="story_detail">
        <div className="story_grid">
          <div className="story_s">
            <img
              src="https://i.imgur.com/RJ745so.jpeg"
              alt=""
              className="st_img"
            />
          </div>
          <div className="story_s">
            <p className="para">
              Chris and I met in Washington, D.C., while he played for the
              Washington Redskins and I was a brand ambassador for Reebok in
              January of 2014. We were introduced when he was invited to a
              dinner my company (Reebok) was having for its newest brand
              ambassadors. We exchanged numbers but never pursued one
              another—until February 28, 2016. That early morning, after a night
              out with friends, I called him. It was our very first phone
              conversation.
            </p>
          </div>
        </div>

        <div className="story_grid mol">
          <div className="story_s">
            <p className="para">
              During that call, Chris shared something that deeply touched my
              heart. Being a GOD-fearing man, he often asked for divine
              understanding of his dreams. Two days before I called, he had
              dreamt of me. In his dream, his mother was holding a curly-haired
              baby and referring to the child as her grandchild—Chris and I were
              in the dream, standing beside her and the baby. That call fell
              exactly on the second day after the dream—when he typically gains
              clarity. We had never spoken on the phone before. Was it fate?
              Well, here we are, 8 years later, getting married. You be the
              judge.
            </p>
          </div>
          <div className="story_s">
            <img
              src="https://i.imgur.com/iGzKZxt.jpeg"
              alt=""
              className="st_img dosa"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
