import PurpleButton from "../../components/PurpleButton";
import ContentBox from "../../components/ContentBox";

import styles from "./index-sass.module.scss";
import logo from "./logo.svg";
import orgLogo from "./orgLogo.svg";
import returnLogo from "./return.svg";
import plusLogo from "./plus.svg";
import laptopLogo from "./laptop.svg";
import whiteLaptopLogo from "./white_laptop.svg";

const UIChallenge = () => {
  const step1Data = [
    { title: "General", content: "Define Attendee types & attributes" },
    {
      title: "Title",
      content:
        "Description that explains the value goes here. Description that explains the value goes here.",
    },
    {
      title: "Title",
      content:
        "Description that explains the value goes here. Description that explains the value goes here.",
    },
  ];

  const step4Data = [
    {
      title: "Exhibitor Protal",
      content:
        "Manage the portal that attendees will see after they've register for your event.",
    },
    {
      title: "Exhibitor List",
      content:
        "Manage the protal that attendees will see after they've register for your event.",
    },
    {
      title: "Exhibitor Logos",
      content:
        "Manage the protal that attendees will see after they've register for your event.",
    },
    {
      title: "Exhibitor Tasks",
      content:
        "Manage the protal that attendees will see after they've register for your event.",
    },
    {
      title: "Exhibitor Forms",
      content:
        "Manage the protal that attendees will see after they've register for your event.",
    },
  ];

  const logoBar = (
    <div className={styles.logoBar}>
      <div className={styles.info}>
        <img src={logo} alt="logo" />
        <div className={styles.text}>
          <p className={styles.title}>RainFocus Summit</p>
          <div className={styles.content}>
            <p>December 15th</p>
            <p>Lehi, Utah</p>
          </div>
        </div>
      </div>
      <PurpleButton title="Edit event" />
    </div>
  );

  const guideBar = (
    <div className={styles.guideBar}>
      <p className={styles.title}>Event setup guide</p>
      <p className={styles.content}>
        See the available list of modules below. We suggest that you start with
        the attendee module.
      </p>
    </div>
  );

  const settingsBar = (
    <div className={styles.settingsBar}>
      <div className={styles.titleBar}>
        <img src={orgLogo} alt="orgLogo" />
        <p className={styles.text}>Org Settings</p>
      </div>
      <div className={styles.stepBar}>
        <p className={styles.stepTitle}>
          <strong>Step 1:</strong> Base settings.
        </p>
        <div className={styles.contentBar1}>
          {step1Data.map((item) => (
            <ContentBox
              title={item.title}
              content={item.content}
              width="21%"
              padding="8px"
            />
          ))}
        </div>
      </div>
      <div className={styles.stepBar}>
        <p className={styles.stepTitle}>
          <strong>Step 2:</strong> Build registration workflows.
        </p>
        <div className={styles.contentBar2}>
          {[0, 1, 2].map((item) => (
            <ContentBox
              svg={returnLogo}
              title="Attendee Registration"
              content="Start by creating a general registration workflow"
              width="31%"
              padding="24px 32px 24px 32px"
              border="solid 1px #CCCCCC"
            />
          ))}
          <ContentBox
            svg={plusLogo}
            content="Add Registration Workflow"
            width="31%"
            padding="24px 32px 24px 32px"
            border="solid 1px #CCCCCC"
          />
        </div>
      </div>
      <div className={styles.stepBar}>
        <p className={styles.stepTitle}>
          <strong>Step 3:</strong> Design attendee experience.
        </p>
        <ContentBox
          svg={laptopLogo}
          title="Attendee Portal"
          content="Manage the portal that attendees will see after they've register for your event."
          width="31%"
          padding="24px 32px 24px 32px"
          border="solid 1px #CCCCCC"
        />
      </div>
      <div className={`${styles.stepBar} ${styles.stepBar4}`}>
        <p className={styles.stepTitle}>
          <strong>Step 4:</strong> Build your exhibitor platform.
        </p>
        <div className={styles.contentBar4}>
          <div className={styles.contentBarLine}>
            {[0, 1].map((index) => (
              <ContentBox
                svg={whiteLaptopLogo}
                title={step4Data[index].title}
                content={step4Data[index].content}
                padding="24px 32px 24px 32px"
                border="solid 1px #CCCCCC"
                color="white"
              />
            ))}
          </div>
          <div className={styles.contentBarLine}>
            {[2, 3, 4].map((index) => (
              <ContentBox
                svg={whiteLaptopLogo}
                title={step4Data[index].title}
                content={step4Data[index].content}
                padding="24px 32px 24px 32px"
                border="solid 1px #CCCCCC"
                color="white"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className={styles.container}>
      {logoBar}
      {guideBar}
      {settingsBar}
    </div>
  );
};

export default UIChallenge;
