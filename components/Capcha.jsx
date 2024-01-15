// "use client";
import React, { useContext, useState } from "react";
import { WalletContext } from "@/providers/WalletProvider";
import ReCAPTCHA from "react-google-recaptcha";

const Capcha = ({ onSubmit }) => {
  const [captcha, setCaptcha] = useState(false);
  const { setValidCaptcha } = useContext(WalletContext);
  //   const handleCaptchaChange = (value) => {
  //     console.log("Captcha value:-------------->", value);
  //     setCaptcha(true);
  //     setValidCaptcha(value)
  //   };

  // const handleReloadCaptcha = () => {
  //   setCaptcha(false);
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   if (captcha) {
  //     await onSubmit(); // Call the onSubmit function if the captcha is filled
  //   } else {
  //     // Display captcha error message
  //     console.error("Please fill in the captcha.");
  //   }
  // };

  return (
    <form className="flex flex-col items-center">
      <ReCAPTCHA
        sitekey="6LcxWE4pAAAAADTuZPl7FRbwvRiUQ8cndvvTZsNW"
        onChange={(value) => setValidCaptcha(value)}
        className="mx-auto"
      />
      <button type="submit" style={{ display: "none" }}></button>
    </form>
  );
};

export default Capcha;

//server side secret key
//6LcbhEkpAAAAAENNQpvLEeMBsVHfmJynwjCDoP3I
//client site key="6LcbhEkpAAAAANGyk91OacDhIwb-CUaB40mDTtKR " and server site key="6LcbhEkpAAAAAENNQpvLEeMBsVHfmJynwjCDoP3I "
// import {
//   Alert,
//   Button,
//   CardActions,
//   CardContent,
//   CardHeader,
//   Divider,
//   TextField,
// } from "@mui/material";
// import React, { useState } from "react";
// import RefreshIcon from "@mui/icons-material/Refresh";

// export const Captcha = () => {
//   const randomString = Math.random().toString(36).slice(8);
//   const [captcha, setCaptcha] = useState(randomString);
//   const [text, setText] = useState("");
//   const [valid, setValid] = useState(false);
//   const [success, setSuccess] = useState(false);
//   const refreshString = () => {
//     setCaptcha(Math.random().toString(36).slice(8));
//   };

//   const matchCaptcha = (event) => {
//     event.preventDefault();
//     if (text === captcha) {
//       setValid(false);
//       setSuccess(true);
//     } else {
//       setValid(true);
//       setSuccess(false);
//     }
//   };

//   return (
//     <React.Fragment>
//       {success && (
//         <Alert variant="outlined" sx={{ marginBottom: "20px" }}>
//           Successful
//         </Alert>
//       )}
//       <div className="card">
//         <CardHeader title="Validate Captcha" />
//         <Divider />

//         <CardContent>
//           <CardActions>
//             <div className="h3">{captcha}</div>
//             <Button
//               startIcon={<RefreshIcon />}
//               onClick={() => refreshString()}
//             ></Button>
//           </CardActions>

//           <form onSubmit={matchCaptcha}>
//             <TextField
//               label="Enter Captcha"
//               focused
//               value={text}
//               fullWidth
//               onChange={(e) => setText(e.target.value)}
//               error={valid}
//               helperText={valid && "Invalid Capcha"}
//             />

//             <Button
//               variant="contained"
//               color="success"
//               type="submit"
//               sx={{ marginTop: "20px" }}
//             >
//               Submit
//             </Button>
//           </form>
//         </CardContent>
//       </div>
//     </React.Fragment>
//   );
// };
