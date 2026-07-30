"use client";

import { useEffect } from "react";

export default function Figlet() {
  useEffect(() => {
    const figletText = ` ____    ______  __  __  __  __  _____      
/\\  _\`\\ /\\  _  \\/\\ \\/\\ \\/\\ \\/\\ \\/\\  __\`\\    
\\ \\ \\L\\ \\ \\ \\L\\ \\ \\ \`\\\\ \\ \\ \`\\\\ \\ \\ \\/\\ \\   
 \\ \\ ,  /\\ \\  __ \\ \\ , \` \\ \\ , \` \\ \\ \\ \\ \\  
  \\ \\ \\\\ \\\\ \\ \\/\\ \\ \\ \\\`\\ \\ \\ \\\`\\ \\ \\ \\_\\ \\ 
   \\ \\_\\ \\_\\ \\_\\ \\_\\ \\_\\ \\_\\ \\_\\ \\_\\ \\_____\\
    \\/_/\\/_/\\/_/\\/_/\\/_/\\/_/\\/_/\\/_/\\/_____/`;

    console.log(
      `%c${figletText}\n`,
      "color: oklch(0.553 0.195 38.402); font-family: monospace; white-space: pre; line-height: normal; font-weight: bold;",
    );
  }, []);

  return null;
}
