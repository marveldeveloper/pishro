import Comments from "./Components/Comments";
import MainSection from "./Components/MainSection";
import MiddleSection from "./Components/MiddleSection";
import NewsAndArticles from "./Components/NewsAndArticles";
import Service from "./Components/Service";
import { DownloadSection } from "../../../components";
import "./index.scss";
export default function Home() {
  return (
    <div className="Home">
      <MainSection />
      <Service />
      <MiddleSection />
      <Comments />
      <NewsAndArticles />
      <DownloadSection />
    </div>
  );
}
