import React from "react";
import FingerprintIcon from "../assets/fingerprint.png"; // Make sure this image is placed at: src/assets/fingerprint.png

const CardSecurity: React.FC = () => {
  return (
    <div className="bg-[#1b254b] rounded-xl p-6 w-full text-white flex flex-col justify-between h-full">
      <div>
        <img
          src={FingerprintIcon}
          alt="Fingerprint Icon"
          className="w-8 h-8 mb-4"
        />
        <h3 className="text-sm text-white mb-1">Control card security</h3>
        <p className="text-base font-semibold mb-1">in–app with a tap</p>
        <p className="text-xs text-gray-400">
          Discover our cards benefits, with one tap.
        </p>
      </div>
      <button className="mt-6 bg-purple-600 hover:bg-purple-700 transition text-sm font-medium px-4 py-2 rounded-md">
        Cards
      </button>
    </div>
  );
};

export default CardSecurity;
