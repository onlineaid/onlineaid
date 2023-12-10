import React, { useEffect } from 'react';
import bowser from 'bowser'; // Import the 'bowser' library

function BrowserInfo() {
  useEffect(() => {
    // Get browser information from the user agent string
    const userAgent = navigator.userAgent;

    // Parse the user agent string using 'bowser'
    const parsedBrowserInfo = bowser.parse(userAgent);

    // Log the parsed browser information to the console
    console.log('Parsed Browser Info:', parsedBrowserInfo);

    // Access specific properties from the parsed information
    console.log('Browser Name:', parsedBrowserInfo.browser.name);
    console.log('Browser Version:', parsedBrowserInfo.browser.version);
    console.log('Operating System:', parsedBrowserInfo.os.name);
    console.log('Platform:', parsedBrowserInfo.platform.type);

    // You can use the parsed information for further logic
  }, []);

  return (
    <div>
      {/* Your component content */}
    </div>
  );
}

export default BrowserInfo;
