enum os {
  Unknown = "Unknown",
  Windows_10plus = "win10+",
  Windows_x64 = "win64",
  Windows_x86 = "win32",
  macOS = "macOS",
  Linux = "linux2.35",
  ChromeOS = "linux2.31",
}

async function getOS(): Promise<os> {
  let determinedOs = os.Unknown;
  if ((navigator as any).userAgentData) {
    let res = await (navigator as any).userAgentData.getHighEntropyValues([
      "architecture",
      "platform",
      "platformVersion",
    ]);

    if (res.platform == "Windows") {
      let concatNumber = res.platformVersion.replaceAll(".", "");
      let castConcatNumber = parseInt(concatNumber);
      if (castConcatNumber >= 1000) {
        determinedOs = os.Windows_10plus;
      } else {
        if (res.bitness == "64") {
          determinedOs = os.Windows_x86;
        } else {
          determinedOs = os.Windows_x64;
        }
      }
    } else if (res.platform == "macOS") {
      determinedOs = os.macOS;
    } else if (res.platform == "Chrome OS") {
      determinedOs = os.ChromeOS;
    } else {
      determinedOs = os.Linux;
    }
  } else {
    if (navigator.userAgent.includes("Windows")) {
      if (navigator.userAgent.includes("Windows NT 10.0")) {
        determinedOs = os.Windows_10plus;
      } else if (navigator.userAgent.includes("Windows NT 6.3")) {
        determinedOs = os.Windows_x64;
      } else if (navigator.userAgent.includes("Windows NT 6.2")) {
        determinedOs = os.Windows_x64;
      } else if (navigator.userAgent.includes("Windows NT 6.1")) {
        determinedOs = os.Windows_x64;
      }
    } else if (navigator.userAgent.includes("Mac OS X")) {
      determinedOs = os.macOS;
    } else if (navigator.userAgent.includes("CrOS")) {
      determinedOs = os.ChromeOS;
    } else if (navigator.userAgent.includes("Linux")) {
      determinedOs = os.Linux;
    } else {
      determinedOs = os.Unknown;
    }
  }
  return determinedOs;
}

export { getOS, os };
