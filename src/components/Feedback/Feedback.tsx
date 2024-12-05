import style from "../Feedback/Feedback.module.css";
import girlEatingSalad from "../../assets/girlEatingSalad.svg";
import avatar from "../../assets/avatar.svg";

function Feedback() {
  return (
    <section className={style.container}>
      <div className={style.pictureContainer}>
        <img src={girlEatingSalad} alt="girlEating" />
      </div>
      <div className={style.textContainerFeedback}>
        <div>
          <p className={style.textContainerFeedbackP}>-What they say-</p>
          <h1 className={style.textContainerFeedbackHeading}>
            What they say about us
          </h1>
        </div>
        <div className={style.feedbackUserContainer}>
          <div className={style.userContainer}>
            <div className={style.avatarContainer}>
              <img src={avatar} alt="avatar" className={style.avatar} />
            </div>
            <div className={style.usernameContainer}>
              <h3 className={style.username}>Erick Smith</h3>
              <p className={style.occupation}>Food Vlogger</p>
            </div>
          </div>
          <p className={style.post}>
            “All service provided is so perfect and fast, and im so happy to
            order from this company”
          </p>
          <p className={style.rating}>
            5.0 <span className={style.star}>★</span>
            <span className={style.star}>★</span>
            <span className={style.star}>★</span>
            <span className={style.star}>★</span>
            <span className={style.star}>★</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Feedback;
