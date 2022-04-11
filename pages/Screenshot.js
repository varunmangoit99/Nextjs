import { Container } from "@mui/material";
import React, { createRef, useState, useEffect } from "react";
import { useScreenshot, createFileName } from "use-react-screenshot";
import Home from "../components/Home";
import Navbar from "../components/Navbar";

export default () => {
  const ref = createRef(null);
  const [image, takeScreenShot] = useScreenshot({
    type: "image/jpeg",
    quality: 1.0,
  });
  const download = (image, { name = "img", extension = "jpg" } = {}) => {
    const a = document.createElement("a");
    a.href = image;
    a.download = createFileName(extension, name);
    a.click();
  };

  const downloadScreenshot = () => takeScreenShot(ref.current).then(download);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     // setCounter(counter + 1);
  //     downloadScreenshot();
  //   }, Math.floor(Math.random() * 10) * 60000);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // });

  return (
    <div>
      {/* <button onClick={downloadScreenshot}>Download screenshot</button> */}
      <div
        ref={ref}
        style={{
          border: "1px solid #ccc",
          padding: "10px",
          marginTop: "20px",
        }}
      >
        <Container>
          Ad aliquip proident nostrud nisi nostrud non mollit voluptate
          consequat. Aliqua dolore ad Lorem cupidatat commodo sint. Deserunt
          cillum nostrud magna aute nisi labore magna. Ea aliquip tempor anim
          consequat. Enim exercitation nulla minim culpa dolore id. In et
          commodo duis cillum officia aute pariatur esse.Ea excepteur cillum
          olestiae deserunt voluptas, labore a expedita error eligendi sunt
          fugit, nesciunt ullam corrupti quas natus, officia rerum? Officia cum
          amet quidem. Ad aliquip proident nostrud nisi nostrud non mollit
          voluptate consequat. Aliqua dolore ad Lorem cupidatat commodo sint.
          Deserunt cillum nostrud magna aute nisi labore magna. Ea aliquip
          tempor anim consequat. Enim exercitation nulla minim culpa dolore id.
          In et commodo duis cillum officia aute pariatur esse.Ea excepteur
          cillum commodo exercitation ullamco ut et ex. Elit eiusmod
          exercitation culpa dolore deserunt id ex. Aliqua sunt incididunt
          aliqua laborum laboris elit in laboris officia sit ex nulla. Ad
          cupidatat eu id est id ullamco exercitation reprehenderit exercitation
          aute ad.Ipsum quis id tempor anim minim do dolor nostrud qui ullamco
          laboris reprehenderit est. Sunt aute reprehenderit sunt commodo
          reprehenderit sit sint ex. Labore qui consequat aliqua incididunt
          laborum. Est cillum ad ad exercitation elit. Magna reprehenderit
          nostrud in et dolor nulla velit velit aliquip qui fugiat officia et.
          Dolor ea deserunt magna nisi dolor irure est consectetur officia
          aliqua aliqua incididunt excepteur mollit. Nisi exercitation nulla id
          enim dolore laborum deserunt eu fugiat eu nostrud. Sint aute et
          proident dolore minim ex velit qui minim aliqua ullamco exercitation
          occaecat.Jaydeep Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Quibusdam distinctio exercitationem a tempore delectus ducimus
          necessitatibus dolor voluptatum aut est quaerat aspernatur, vero quod
          aperiam odio. Exercitationem distinctio in voluptates? Muskan Lorem
          ipsum dolor, sit amet consectetur adipisicing elit. Ut molestiae
          deserunt voluptas, labore a expedita error eligendi sunt fugit,
          nesciunt ullam corrupti quas natus, officia rerum? Officia cum amet
          quidem. Ad aliquip proident nostrud nisi nostrud non mollit voluptate
          consequat. Aliqua dolore ad Lorem cupidatat commodo sint. Deserunt
          cillum nostrud magna aute nisi labore magna. Ea aliquip tempor anim
          consequat. Enim exercitation nulla minim culpa dolore id. In et
          commodo duis cillum officia aute pariatur esse.Ea excepteur cillum
          commodo exercitation ullamco ut et ex. Elit eiusmod exercitation culpa
          dolore deserunt id ex. Aliqua sunt incididunt aliqua laborum laboris
          elit in laboris officia sit ex nulla. Ad cupidatat eu id est id
          ullamco exercitation reprehenderit exercitation aute ad.Ipsum quis id
          tempor anim minim do dolor nostrud qui ullamco laboris reprehenderit
          est. Sunt aute reprehenderit sunt commodo reprehenderit sit sint ex.
          Labore qui consequat aliqua incididunt laborum. Est cillum ad ad
          exercitation elit. Magna reprehenderit nostrud in et dolor nulla velit
          velit aliquip qui fugiat officia et. Dolor ea deserunt magna nisi
          dolor irure est consectetur officia aliqua aliqua incididunt excepteur
          mollit. Nisi exercitation nulla id enim dolore laborum deserunt eu
          fugiat equat. Aliqua dolore ad Lorem cupidatat commodo sint. Deserunt
          cideserunt voluptas, labore a expedita error eligendi sunt fugit,
          nesciunt ullam corrupti quas natus, officia rerum? Officia cum amet
          quidem ullam corrupti quas natus, officia rerum? Officia cum amet
          quidem.
        </Container>
      </div>
    </div>
  );
};

// import React, { createRef, useState, useEffect } from "react";
// import { ScreenCapture } from "react-screen-capture";

// export default function Screenshot() {
//   const [screenCapture, setScreenCapture] = useState("");
//   const handleScreenCapture = (screenCapture) => {
//     setScreenCapture(screenCapture);
//   };

// const handleSave = () => {
//   const screenCaptureSource = screenCapture;
//   const downloadLink = document.createElement("a");
//   const fileName = "react-screen-capture.png";
//   downloadLink.href = screenCaptureSource;
//   downloadLink.download = fileName;
//   downloadLink.click();
// };

// const [counter, setCounter] = useState(0);
// useEffect(() => {
//   const interval = setInterval(() => {
//     setCounter(counter + 1);
//     screen;
//   }, 3000);

//   return () => {
//     clearInterval(interval);
//   };
// });
//   const screen = () => {
//     onStartCapture;
//   };

//   return (
//     <div>
//       <ScreenCapture onEndCapture={handleScreenCapture}>
//         <>
//           {/* {setInterval(onStartCapture, 12000)} */}
//           <div>
//             <h1>{counter}</h1>
//             <button onClick={screen}>Capture</button>
// <p>
//   Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
//   distinctio exercitationem a tempore delectus ducimus
//   necessitatibus dolor voluptatum aut est quaerat aspernatur, vero
//   quod aperiam odio. Exercitationem distinctio in voluptates?
// </p>
//             <center>
//               <img src={screenCapture} alt="react-screen-capture" />
//               <p>
//                 {screenCapture && (
//                   <button onClick={handleSave}>Download</button>
//                 )}
//               </p>
//             </center>
//           </div>
//         </>
//       </ScreenCapture>
//     </div>
//   );
// }
