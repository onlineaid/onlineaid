import React, { useState, useEffect } from 'react';
// import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

function Browser() {
  const [ipInfo, setIpInfo] = useState(null);
  const [userAgent, setUserAgent] = useState('');


  useEffect(() => {
    // Fetch user's IP information from ipinfo.io
    fetch('https://ipinfo.io/json?token=f929d56a351f6c')
      .then((response) => response.json())
      .then((data) => setIpInfo(data))
      .catch((error) => console.error('Error fetching IP info:', error));
  }, []);


  useEffect(() => {
    const userAgentString = navigator.userAgent;

    // Set the user agent string in the state
    setUserAgent(userAgentString);
  }, []);

  return (
    <div>


      {ipInfo && (
        <div>
          <p>User's IP Address: {ipInfo.ip}</p>
          <p>Location: {ipInfo.city}, {ipInfo.region}, {ipInfo.country}</p>
          <p>User Agent: {userAgent}</p>
        </div>
      )}
    </div>
  );
}

export default Browser;
