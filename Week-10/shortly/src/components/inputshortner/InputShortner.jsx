const InputShortner = () => {
  return (
    <div className="inputShortnerContainer">
      <div className="inputShortner">
        <input type="text" placeholder="Enter URL" className="input" />
        <button className="shortenBtn">Shorten it !</button>
      </div>
      <div className="copyDiv">
        <div className="copyInnerDiv">
          <div>http://example.com</div>
          <div className="copyTextDiv">
            <p className="shortUrl">fdasf</p>
            <button className="copyBtn">Copy</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputShortner;
