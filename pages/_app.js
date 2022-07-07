import Layout from "../comps/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>

    // <script LANGUAGE="JavaScript">

    // {/* Begin
    // // Set up the image files to be used.
    // var theImages = new Array() // do not change this
    // // To add more image files, continue with the
    // // pattern below, adding to the array. */}

    // theImages[1] = 'img1.png'
    // theImages[2] = 'img2.png'
    // theImages[3] = 'img3.png'
    // theImages[4] = 'img4.png'
    // theImages[5] = 'img5.png'
    // theImages[6] = 'img6.png'
    // theImages[7] = 'img7.png'
    // theImages[8] = 'img8.png'
    // theImages[9] = 'img9.png'
    // theImages[10] = 'img10.png'

    // {/* do not edit anything below this line */}

    // var j = 0
    // var p = theImages.length;
    // var preBuffer = new Array()
    // for (i = 0; i < p; i++){
    // preBuffer[i] = new Image()
    // preBuffer[i].src = theImages[i]
    // }
    // var whichImage = Math.round(Math.random()*(p-1));
    // function showImage(){
    // document.write('<img src="'+theImages[whichImage]+'">');
    // }
    // </script>
  );
}

export default MyApp;
