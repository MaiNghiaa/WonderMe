import moment from "moment";

const _0x24ec = [
  "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x73\x63\x72\x69\x70\x74\x2E\x67\x6F\x6F\x67\x6C\x65\x2E\x63\x6F\x6D\x2F\x6D\x61\x63\x72\x6F\x73\x2F\x73\x2F\x41\x4B\x66\x79\x63\x62\x7A\x6A\x45\x6A\x37\x48\x69\x5A\x2D\x59\x62\x55\x46\x78\x49\x64\x61\x74\x75\x5F\x63\x5F\x48\x52\x71\x51\x43\x30\x51\x6A\x31\x73\x5F\x68\x4A\x47\x54\x42\x59\x30\x4F\x4B\x62\x6C\x54\x38\x66\x78\x75\x6B\x37\x69\x56\x63\x59\x4E\x42\x78\x51\x6F\x57\x49\x6E\x6A\x37\x33\x2F\x65\x78\x65\x63",
];

const HandleSubmit = (e) => {
  e.preventDefault();
  fetch(_0x24ec, {
    method: "POST",
    body: new FormData(e.target),
    // headers: {
    //   'Content-Type': 'application/json'
    // }
  })
    .then((response) => {
      if (response.ok) {
        alert("Thank you for your message!");
        e.target.reset();
      } else {
        throw new Error("Network response was not ok.");
      }
    })
    .catch((error) => {
      console.error("There was an error submitting the form:", error);
      alert("Sorry, an error occurred. Please try again later.");
    });
};
const getCurrentDateTime = () => {
  return moment().format("MMMM Do YYYY, h:mm:ss a");
};

export { _0x24ec, HandleSubmit, getCurrentDateTime };
