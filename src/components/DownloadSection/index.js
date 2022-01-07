import { Container } from "react-bootstrap";
import { Text } from "..";
import { _downloadApp } from "../../constants";
import "./index.scss";
export default function DownloadSection() {
  return (
    <Container className="DownloadSection">
      <div className="w-100 bg-light-yellow d-flex flex-center flex-column gap-5 py-5">
        <h3 className="h3">
          <Text value="components.download-section.title" />
        </h3>
        <div className="download-box w-fit d-flex gap-3">
          {_downloadApp.map((item, index) => (
            <img className='cursor-pointer' key={index} width="95" src={item.img} alt={item.link} />
          ))}
        </div>
      </div>
    </Container>
  );
}
