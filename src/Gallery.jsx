import "./App.css";
import profileImage from "./images/CV_image_update (1).jpg"

export function Image() {
  return (
    <img
      src={profileImage}
      alt="Rakibul Hasan"
    />
  );
}

export function Gallery(){
  return(
    <section>
      <h1>Image of Rakibul Hasan</h1>
      <Image />
      <Image />
    </section>
  )
}

