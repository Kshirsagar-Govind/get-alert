function AlertPopup({ heading, text, btn_text, fun, cancel }) {
  const Close = () => {
    document.getElementById("alert-popup").style.display = "none";
  };
  return (
    <div id="alert-popup" className="alert-popup-class">
      <div className="header">
        <h1>{heading ? heading : "Success"}</h1>
      </div>
      <div className="message">
        <h3>{text ? text : "Your Form Submitted."}</h3>
      </div>
      <div className="buttons_2">
        <button
          className="ok_btn"
          onClick={() => {
            if (fun) fun();
            else Close();
          }}
        >
          {btn_text ? btn_text : "OK"}
        </button>
        <button
          className="cancel_btn"
          onClick={() => {
            if (cancel) cancel();
            else Close();
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default AlertPopup;
