import { useEffect, useState } from "react";
import classes from "./project.module.css";
import Loading from "../../components/loading/Loading";
import chat from "../../assests/chat.png";
import xui from "../../assests/xui.png";
import indiainc from "../../assests/indiainc.png";
import instabook from "../../assests/instabook.png";
import estate from "../../assests/realestate.png";

export default function Projects() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);
  return (
    <div className={classes.container}>
      {loading ? (
        <div className={classes.loader}>
          <Loading />
        </div>
      ) : (
        <>
          <h3 className={classes.heading}>Projects</h3>
          <h6 className={classes.intern}>Internship Projects</h6>
          <div className={classes.projectsContainer}>
            <div className={classes.project}>
              <img className={classes.image} src={indiainc} alt="website" />
              <br />
              <div className={classes.nameContainer}>
                <p className={classes.name}>
                  <a
                    href="https://www.indiainc.chat/"
                    target="blank"
                    className={classes.anchor}
                  >
                    IndiaInc
                  </a>
                </p>
              </div>
              <div className={classes.desContainer}>
                <p className={classes.description}>
                  As a frontend developer, I developed a search result page and
                  landing page of Indiainc intregrated with algoliasearch for
                  faster search result. And used context api for state
                  management.for styling used scss.
                </p>
              </div>
              <div className={classes.techStack}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  Tech Stack
                </div>
                <div className={classes.tech}>React</div>
                <div className={classes.tech}>Mantine</div>
                <div className={classes.tech}>Typescript</div>
              </div>
            </div>
            <div className={classes.project}>
              <img className={classes.image} src={xui} alt="website" />
              <br />
              <div className={classes.nameContainer}>
                <a
                  className={classes.anchor}
                  target="blank"
                  href="https://d1p2ua47wkrux.cloudfront.net/?path=/docs/xui--docs"
                >
                  <p className={classes.name}>XUI</p>
                </a>
              </div>
              <div className={classes.desContainer}>
                <p className={classes.description}>
                  Xui framework is the npm package for kredx.like bootstrap,I
                  created the table component.xui uses mantine ui for
                  styling.previously it was version-4,then i converted to
                  version 7.
                </p>
              </div>
              <div className={classes.techStack}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  Tech Stack
                  <span style={{ marginLeft: "10px" }}></span>
                </div>
                <div className={classes.tech}>React</div>
                <div className={classes.tech}>Storybook</div>
                <div className={classes.tech}>Jest</div>
                <div className={classes.tech}>Typescript</div>
              </div>
            </div>
          </div>
          <h6 style={{ marginTop: "25px" }} className={classes.intern}>
            Own Projects
          </h6>
          <div className={classes.projectsContainer}>
            <div className={classes.project}>
              <img className={classes.image} src={estate} alt="website" />
              <br />
              <div className={classes.nameContainer}>
                <p className={classes.name}>
                  <a
                    href="https://eclectic-gnome-2ead92.netlify.app/"
                    target="blank"
                    className={classes.anchor}
                  >
                    GEstate
                  </a>
                </p>
              </div>
              <div className={classes.desContainer}>
                <p className={classes.description}>
                  GEstate is the website,where users can buy or sell a
                  property,or users can rent a property.It's fully
                  responsive,fast and secure.
                </p>
              </div>
              <div className={classes.techStack}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                  }}
                >
                  Tech Stack
                </div>
                <div className={classes.tech}>ReactJs</div>
                <div className={classes.tech}>NodeJs</div>
                <div className={classes.tech}>Express</div>
                <div style={{ marginBottom: "10px" }} className={classes.tech}>
                  Mongoose
                </div>
                <div style={{ marginBottom: "10px" }} className={classes.tech}>
                  Flexbox
                </div>
                <div className={classes.tech}>Redux</div>
              </div>
            </div>
            <div className={classes.project}>
              <img className={classes.image} src={instabook} alt="website" />
              <br />
              <div className={classes.nameContainer}>
                <p className={classes.name}>
                  <a
                    href="https://stately-pixie-7d0b73.netlify.app/"
                    target="blank"
                    className={classes.anchor}
                  >
                    Instabook
                  </a>
                </p>
              </div>
              <div className={classes.desContainer}>
                <p className={classes.description}>
                  This is social media website,user can post your images and
                  make friends all over the world. and you can interact with
                  them.
                </p>
              </div>
              <div className={classes.techStack}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                  }}
                >
                  Tech Stack
                </div>
                <div className={classes.tech}>ReactJs</div>
                <div className={classes.tech}>NodeJs</div>
                <div className={classes.tech}>Express</div>
                <div style={{ marginBottom: "10px" }} className={classes.tech}>
                  Mongoose
                </div>
                <div style={{ marginBottom: "10px" }} className={classes.tech}>
                  Redux
                </div>
                <div className={classes.tech}>Redux-saga</div>
              </div>
            </div>
            {/* <div className={classes.project}>
              <img
                className={classes.image}
                src="https://effervescent-donut-ad7b3c.netlify.app/static/media/Project2.887a0286704b46f077ba.png"
                alt="website"
              />
              <br />
              <div className={classes.nameContainer}>
                <p className={classes.name}>
                  <a
                    href="https://65af953dd63246d0857c2f8d--unrivaled-vacherin-0db088.netlify.app/"
                    target="blank"
                    className={classes.anchor}
                  >
                    Foodie
                  </a>
                </p>
              </div>
              <div className={classes.desContainer}>
                <p className={classes.description}>
                  Foodie is the real time web application, users can order the
                  foods and drinks from your favourite resturant.And also we
                  accept online payment and cash-on-delivery.
                </p>
              </div>
              <div className={classes.techStack}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                  }}
                >
                  Tech Stack
                </div>
                <div className={classes.tech}>ReactJs</div>
                <div className={classes.tech}>NodeJs</div>
                <div className={classes.tech}>Express</div>
                <div style={{ marginBottom: "10px" }} className={classes.tech}>
                  Mongoose
                </div>
                <div style={{ marginBottom: "10px" }} className={classes.tech}>
                  Redux
                </div>
                <div className={classes.tech}>Redux-saga</div>
              </div>
            </div> */}
            <div className={classes.project}>
              <img className={classes.image} src={chat} alt="website" />
              <br />
              <div className={classes.nameContainer}>
                <p className={classes.name}>
                  <a
                    href="https://lighthearted-donut-aa8e49.netlify.app/"
                    target="blank"
                    className={classes.anchor}
                  >
                    Chat
                  </a>
                </p>
              </div>
              <div className={classes.desContainer}>
                <p className={classes.description}>
                  This web-app allows you to communicate with your friends in
                  web chat rooms. It enables you to send and receive messages in
                  real-time. Chatting apps make it easier, simpler, and faster
                  to connect with everyone and it is also easy to use.
                </p>
              </div>
              <div className={classes.techStack}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                  }}
                >
                  Tech Stack
                  <span style={{ marginLeft: "10px" }}></span>
                </div>
                <div className={classes.tech}>ReactJs</div>
                <div className={classes.tech}>NodeJs</div>
                <div className={classes.tech}>Express</div>
                <div className={classes.tech}>Socket.io</div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
