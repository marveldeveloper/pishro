import { Container, Carousel } from "react-bootstrap";
import { Text } from "../../../../components";
import userProfileImage from "../../../../assets/images/comments/user profile.png";
import userProfileImage1 from "../../../../assets/images/comments/user profile1.png";
import userProfileImage2 from "../../../../assets/images/comments/user profile2.png";
import userProfileImage3 from "../../../../assets/images/comments/user profile3.png";
import userProfileImage4 from "../../../../assets/images/comments/user profile4.png";
import userProfileImage5 from "../../../../assets/images/comments/user profile5.png";
import userProfileImage6 from "../../../../assets/images/comments/user profile6.png";
import userProfileImage7 from "../../../../assets/images/comments/user profile7.png";
import userProfileImage8 from "../../../../assets/images/comments/user profile8.png";
import bgComments from "../../../../assets/images/bg-comments.png";
import twoCamaGrayIcon from "../../../../assets/icons/two-cama-gray.svg";

export default function Comments() {
  const usersImages = [
    userProfileImage1,
    userProfileImage2,
    userProfileImage3,
    userProfileImage4,
    userProfileImage5,
    userProfileImage6,
    userProfileImage7,
    userProfileImage8,
  ];
  return (
    <div className="Comments position-relative text-center">
      <img
        className="bg-img position-absolute w-100 h-100 object-fit-cover"
        src={bgComments}
        alt="bgComments"
      />
      <Container className="text-center">
        {usersImages.map((img, index) => (
          <img
            key={index}
            className={`user-img-${index + 1} d-none d-lg-block position-absolute rounded-circle object-fit-cover`}
            src={img}
            alt={`user_${index}`}
          />
        ))}
        <h2 className="h2 position-relative">
          <Text value="landing.home.comments-section.title" />
        </h2>
        <h6 className="h6 text-secondary position-relative">
          <Text value="landing.home.comments-section.description" />
        </h6>
        <Carousel
          pause={false}
          fade
          controls={false}
          interval={5000}
          className="position-relative bg-white rounded-5 shadow pb-5 mx-auto"
        >
          <Carousel.Item>
            <img
              width="75"
              className="bg-img position-absolute"
              src={twoCamaGrayIcon}
              alt="bgComment"
            />
            <img
              width="125"
              height="125"
              className="user-profile rounded-circle"
              src={userProfileImage}
              alt="userProfileImage"
            />
            <h3 className="h3 text-center space-pre-wrap">
              <Text value="landing.home.comments-section.comments.0.text" />
            </h3>
            <h4 className="h4 text-center text-secondary mt-4">
              <Text value="landing.home.comments-section.comments.0.username" />
            </h4>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
}
