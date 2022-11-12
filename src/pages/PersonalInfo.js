import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { StyledPersonalInfo } from "../components/layout/personalInfoStyle";
import keys from "../configs";
import DefaultImg from "../assets/defaultImg/default.jpg";

const PersonalInfo = () => {
  const { id } = useParams();
  const [personalInfo, setPersonalInfo] = useState({});
  const urlPersonalInfo = `${keys.BACKEND_API}person/${id}?api_key=${keys.API_KEY}&language=en-US`;
  const fetchPersonalInfo = async () => {
    const { data } = await axios.get(urlPersonalInfo);
    setPersonalInfo(data);
    console.log(data);
  };
  console.log(personalInfo);
  console.log(id);
  useEffect(() => {
    fetchPersonalInfo();
  }, []);
  return (
    <StyledPersonalInfo>
      <div className="container">
        <div className="row">
          <div className="content_info">
            <div className="img_wrapper">
              <img
                src={
                  personalInfo?.profile_path
                    ? keys.IMG_URL + personalInfo?.profile_path
                    : DefaultImg
                }
                alt=""
              />
            </div>
            <div className="inner_content">
              <h4>Personal Info</h4>
              <p>
                <strong>known for</strong> <br />
                {personalInfo?.known_for_department || "Acting"}
              </p>
              <p>
                <strong>known credits</strong> <br />
                {Math.floor(personalInfo?.popularity * 10 || 20)}
              </p>
              <p>
                <strong>gender</strong> <br />
                {personalInfo?.gender == 1 ? "female" : "male"}
              </p>
              <p>
                <strong>birthday</strong> <br />
                {personalInfo?.birthday ?? "unknown"}
              </p>
              <p>
                <strong>Place of birth</strong> <br />
                {personalInfo?.place_of_birth ?? "unknown"}
              </p>
              {/* {personalInfo?.also_known_as.map((item) => {
                return (
                  <p>
                    <strong>Also Known As</strong> <br />
                    {item}
                  </p>
                );
              })} */}
            </div>
          </div>
          <div className="content">
            <section>
              <h2 className="title">{personalInfo?.name ?? "Sergio Ramos"}</h2>
            </section>
            <div className="biography">
              <h4>Biography</h4>
              <p>
                {personalInfo?.biography ||
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </StyledPersonalInfo>
  );
};

export default PersonalInfo;
