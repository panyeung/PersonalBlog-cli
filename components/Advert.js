import React from "react";
import style from "../public/static/style/components/advert.module.css";

const Advert = () => {
  return (
    <div className={`${style.ad__div} comm-box`}>
      <div>
        <div>
          <img
            src="http://blogimages.jspang.com/flutter_ad2.jpg"
            width="100%"
          />
        </div>
      </div>
      <div>
        <div>
          <img
            src="http://blogimages.jspang.com/flutter_ad2.jpg"
            width="100%"
          />
        </div>
      </div>
      <div>
        <div>
          <img
            src="http://blogimages.jspang.com/flutter_ad2.jpg"
            width="100%"
          />
        </div>
      </div>
    </div>
  );
};

export default Advert;
