function OkPopup({ heading, text, fun }) {
  const Close = () => {
    document.getElementById("ok-popup").style.display = "none";
  };
  return (
    <div id="ok-popup" className="alert-popup-class">
      <div className="header">
        <h1>{heading ? heading : "Success"}</h1>
      </div>
      <div className="message">
        <h3>{text ? text : "Your Form Submitted."}</h3>
      </div>
      <div className="buttons">
        <button className="ok_btn" onClick={() => (fun ? fun() : Close())}>
          OK
        </button>
      </div>
    </div>
  );
}

export default OkPopup;
