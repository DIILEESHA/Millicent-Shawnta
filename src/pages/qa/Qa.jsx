import React from "react";
import "./qa.css";

const Qa = () => {
  const faqs = [
    {
      question: "WILL THE CEREMONY BE OUTSIDE?",
      answer:
        "Yes! Wear a lighter material dress since August can be hot! Fans will be on everyones seat during the ceremony!",
    },
    {
      question: "ARE CHILDREN ALLOWED AT THE CEREMONY?",
      answer:
        "While we love your little ones, we kindly ask that no children join our wedding day. Use this evening as a fun night to celebrate with friends and family!",
    },
    {
      question: "WILL THERE BE PARKING OPTIONS AVAILABLE?",
      answer:
        "Yes! Once you arrive up the long dirt road you will see the barn and house on your left. Keep going, and you will see a sign for parking. It is a large field that fits many cars. Don't worry - no one will be blocked in!",
    },
    {
      question: "CAN I TAKE PICTURES DURING THE CEREMONY?",
      answer:
        "We ask that you please turn off your cellphones & cameras during the ceremony. Don't worry, we have hired a photographer and content creator, and will have plenty of photos to share with you after the wedding.",
    },
    {
      question: "WHAT IS THE DRESS CODE?",
      answer:
        "Garden Attire: Light pastel colors or florals (pale yellow, pink, lavender, blue, green). Lightweight suits in soft colors (beige, light gray, blue/navy). Tie optional.",
    },
    {
      question: "CAN I BRING A DATE?",
      answer:
        "We kindly ask that if your invitation did not include a plus one that you do not bring one. We have a limited guest count and want to stick to it!",
    },
    {
      question: "WHERE SHOULD WE STAY?",
      answer:
        "Our venue has a selected number of houses available on the property for certain groups. Those who receive a link will book a house on the property. When those book up, there are hotels down the road and Airbnbs. We apologize that not every guest can stay on the property with us.",
    },
  ];

  return (
    <div>
      <div className="wedding_img">
        <img
          src="https://i.imgur.com/Vf2Rapm.jpeg"
          alt="Wedding couple"
          className="wed_img"
        />
      </div>

      <div className="questions">
        {faqs.map((faq, index) => (
          <div className="qustion_sec" key={index}>
            <h2 className="question_title">{faq.question}</h2>
            <p className="q_para">{faq.answer}</p>
            <div className="line"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Qa;
