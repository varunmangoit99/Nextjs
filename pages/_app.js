import "../styles/globals.css";
import * as React from "react";
import { createRef, useState, useEffect } from "react";
import { StyledEngineProvider } from "@mui/material/styles";
import { ToastProvider } from "react-toast-notifications";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useScreenshot, createFileName } from "use-react-screenshot";

function MyApp({ Component, pageProps }) {
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
  //  1 m=60000 ms
  // 5 m=300000 ms
  // 10 m=600000 ms

  const downloadScreenshot = () => takeScreenShot(ref.current).then(download);

  useEffect(() => {
    const user = localStorage.getItem("token");
    if (user != null) {
      const interval = setInterval(() => {
        downloadScreenshot();
      }, 6000);
      // }, Math.floor(Math.random() * 10) * 60000);
      return () => {
        clearInterval(interval);
      };
    } else {
      console.log("ooook");
    }
  });

  // const randomNumberAtInterval = (
  //   perMinute,
  //   totalNumbers,
  //   minNumber,
  //   maxNumber,
  //   cb
  // ) => {
  //   var int = 3000 / perMinute;
  //   var count = 0;
  //   var interval = setInterval(() => {
  //     cb(Math.random() * (maxNumber - minNumber) + minNumber);
  //     count++;
  //     totalNumbers++;
  //    downloadScreenshot();
  //     if (count >= totalNumbers) clearInterval(interval);
  //   }, int);
  // };
  // randomNumberAtInterval(1, 2, 1, 10, function (randomNumber) {
  // });

  return (
    <div ref={ref}>
      <StyledEngineProvider injectFirst>
        <ToastProvider
          autoDismiss={true}
          autoDismissTimeout={3000}
          placement="top-center"
        >
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </ToastProvider>
      </StyledEngineProvider>
    </div>
  );
}

export default MyApp;
