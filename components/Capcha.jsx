import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

function onChange(value) {
  console.log("Capcha value", value);
}

const Capcha = () => {
  return (
    <div>
      <ReCAPTCHA
        sitekey="6LcbhEkpAAAAANGyk91OacDhIwb-CUaB40mDTtKR"
        onChange={onChange}
      />
    </div>
  );
};
export default Capcha;

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
