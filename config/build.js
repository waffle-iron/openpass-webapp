module.exports = {
  torun: [
    "PhantomJS",
    
    // Selenium
    
    // Linux
    
    "SL_chrome_public_48_Linux",
    "SL_firefox_public_45_Linux",
    "SL_opera_public_12_15_Linux",
    
    // Windows XP
    
    "SL_chrome_public_49_Windows_XP",
    "SL_firefox_public_45_Windows_XP",
    "SL_opera_public_12_12_Windows_XP",
    
    // Windows 7
    
    "SL_chrome_public_54_Windows_7",
    "SL_internet_explorer_public_11_Windows_7",
    "SL_firefox_public_49_Windows_7",
    "SL_opera_public_12_12_Windows_7",
    "SL_safari_public_5_1_Windows_7",
    
    // Windows 8
    
    "SL_chrome_public_54_Windows_8",
    "SL_firefox_public_49_Windows_8",
    "SL_internet_explorer_public_10_Windows_8",
    
    // Windows 8.1
    
    "SL_chrome_public_54_Windows_8_1",
    "SL_internet_explorer_public_11_Windows_8_1",
    "SL_firefox_public_49_Windows_8_1",
    
    // Windows 10
    
    "SL_chrome_public_54_Windows_10",
    "SL_firefox_public_49_Windows_10",
    "SL_internet_explorer_public_11_103_Windows_10",
    "SL_MicrosoftEdge_public_14_14393_Windows_10",
    
    // OS X Mountain Lion (10.8)
    
    "SL_chrome_public_49_OS_X_10_8",
    "SL_safari_public_6_OS_X_10_8",
    "SL_firefox_public_48_OS_X_10_8",
    
    // OS X Mavericks (10.9)
    
    "SL_chrome_public_54_OS_X_10_9",
    "SL_safari_public_7_OS_X_10_9",
    "SL_firefox_public_49_OS_X_10_9",
    
    // OS X Yosemite (10.10)
    
    "SL_chrome_public_54_OS_X_10_10",
    "SL_safari_public_8_OS_X_10_10",
    "SL_firefox_public_47_OS_X_10_10",
    
    // OS X El Capitan
    
    "SL_chrome_public_54_OS_X_10_11",
    "SL_safari_public_10_OS_X_10_11",
    "SL_firefox_public_49_OS_X_10_11",
    
    // Appium
    
    // iPhone Simulator
    
    "SL_ios_10_public_iPhone_Simulator_portrait",
    
    // Android Emulator
    
    "SL_android_5_1_public_Android_Emulator_portrait"
  ],
  
  launchers: {
    // Selenium
  
    // Linux
  
    // Chrome
  
    SL_chrome_public_26_Linux: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 26 on Linux",
        "-b",
        "chrome",
        "-v",
        "26",
        "--vi",
        "public",
        "-p",
        "Linux",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_27_Linux: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 27 on Linux",
        "-b",
        "chrome",
        "-v",
        "27",
        "--vi",
        "public",
        "-p",
        "Linux",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_28_Linux: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 28 on Linux",
        "-b",
        "chrome",
        "-v",
        "28",
        "--vi",
        "public",
        "-p",
        "Linux",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_29_Linux: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 29 on Linux",
        "-b",
        "chrome",
        "-v",
        "29",
        "--vi",
        "public",
        "-p",
        "Linux",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_30_Linux: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 30 on Linux",
        "-b",
        "chrome",
        "-v",
        "30",
        "--vi",
        "public",
        "-p",
        "Linux",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_31_Linux: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 31 on Linux",
        "-b",
        "chrome",
        "-v",
        "31",
        "--vi",
        "public",
        "-p",
        "Linux",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_32_Linux: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 32 on Linux",
        "-b",
        "chrome",
        "-v",
        "32",
        "--vi",
        "public",
        "-p",
        "Linux",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_33_Linux: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 33 on Linux",
        "-b",
        "chrome",
        "-v",
        "33",
        "--vi",
        "public",
        "-p",
        "Linux",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_34_Linux: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 34 on Linux",
        "-b",
        "chrome",
        "-v",
        "34",
        "--vi",
        "public",
        "-p",
        "Linux",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_35_Linux: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 35 on Linux",
        "-b",
        "chrome",
        "-v",
        "35",
        "--vi",
        "public",
        "-p",
        "Linux",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_36_Linux: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 36 on Linux",
        "-b",
        "chrome",
        "-v",
        "36",
        "--vi",
        "public",
        "-p",
        "Linux",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_37_Linux: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 37 on Linux",
        "-b",
        "chrome",
        "-v",
        "37",
        "--vi",
        "public",
        "-p",
        "Linux",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_38_Linux: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 38 on Linux",
        "-b",
        "chrome",
        "-v",
        "38",
        "--vi",
        "public",
        "-p",
        "Linux",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_39_Linux: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 39 on Linux",
        "-b",
        "chrome",
        "-v",
        "39",
        "--vi",
        "public",
        "-p",
        "Linux",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_40_Linux: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 40 on Linux",
        "-b",
        "chrome",
        "-v",
        "40",
        "--vi",
        "public",
        "-p",
        "Linux",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_41_Linux: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 41 on Linux",
        "-b",
        "chrome",
        "-v",
        "41",
        "--vi",
        "public",
        "-p",
        "Linux",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_42_Linux: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 42 on Linux",
        "-b",
        "chrome",
        "-v",
        "42",
        "--vi",
        "public",
        "-p",
        "Linux",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_43_Linux: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 43 on Linux",
        "-b",
        "chrome",
        "-v",
        "43",
        "--vi",
        "public",
        "-p",
        "Linux",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_44_Linux: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 44 on Linux",
        "-b",
        "chrome",
        "-v",
        "44",
        "--vi",
        "public",
        "-p",
        "Linux",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_45_Linux: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 45 on Linux",
        "-b",
        "chrome",
        "-v",
        "45",
        "--vi",
        "public",
        "-p",
        "Linux",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_46_Linux: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 46 on Linux",
        "-b",
        "chrome",
        "-v",
        "46",
        "--vi",
        "public",
        "-p",
        "Linux",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_47_Linux: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 47 on Linux",
        "-b",
        "chrome",
        "-v",
        "47",
        "--vi",
        "public",
        "-p",
        "Linux",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_48_Linux: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 48 on Linux",
        "-b",
        "chrome",
        "-v",
        "48",
        "--vi",
        "public",
        "-p",
        "Linux",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    // Firefox
  
    SL_firefox_public_4_Linux: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 4 on Linux",
        "-b",
        "firefox",
        "-v",
        "4",
        "--vi",
        "public",
        "-p",
        "Linux",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_5_Linux: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 5 on Linux",
        "-b",
        "firefox",
        "-v",
        "5",
        "--vi",
        "public",
        "-p",
        "Linux",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_6_Linux: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 6 on Linux",
        "-b",
        "firefox",
        "-v",
        "6",
        "--vi",
        "public",
        "-p",
        "Linux",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_7_Linux: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 7 on Linux",
        "-b",
        "firefox",
        "-v",
        "7",
        "--vi",
        "public",
        "-p",
        "Linux",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_8_Linux: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 8 on Linux",
        "-b",
        "firefox",
        "-v",
        "8",
        "--vi",
        "public",
        "-p",
        "Linux",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_9_Linux: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 9 on Linux",
        "-b",
        "firefox",
        "-v",
        "9",
        "--vi",
        "public",
        "-p",
        "Linux",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_10_Linux: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 10 on Linux",
        "-b",
        "firefox",
        "-v",
        "10",
        "--vi",
        "public",
        "-p",
        "Linux",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_11_Linux: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 11 on Linux",
        "-b",
        "firefox",
        "-v",
        "11",
        "--vi",
        "public",
        "-p",
        "Linux",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_12_Linux: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 12 on Linux",
        "-b",
        "firefox",
        "-v",
        "12",
        "--vi",
        "public",
        "-p",
        "Linux",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_13_Linux: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 13 on Linux",
        "-b",
        "firefox",
        "-v",
        "13",
        "--vi",
        "public",
        "-p",
        "Linux",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_14_Linux: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 14 on Linux",
        "-b",
        "firefox",
        "-v",
        "14",
        "--vi",
        "public",
        "-p",
        "Linux",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_15_Linux: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 15 on Linux",
        "-b",
        "firefox",
        "-v",
        "15",
        "--vi",
        "public",
        "-p",
        "Linux",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_16_Linux: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 16 on Linux",
        "-b",
        "firefox",
        "-v",
        "16",
        "--vi",
        "public",
        "-p",
        "Linux",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_17_Linux: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 17 on Linux",
        "-b",
        "firefox",
        "-v",
        "17",
        "--vi",
        "public",
        "-p",
        "Linux",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_18_Linux: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 18 on Linux",
        "-b",
        "firefox",
        "-v",
        "18",
        "--vi",
        "public",
        "-p",
        "Linux",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_19_Linux: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 19 on Linux",
        "-b",
        "firefox",
        "-v",
        "19",
        "--vi",
        "public",
        "-p",
        "Linux",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_20_Linux: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 20 on Linux",
        "-b",
        "firefox",
        "-v",
        "20",
        "--vi",
        "public",
        "-p",
        "Linux",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_21_Linux: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 21 on Linux",
        "-b",
        "firefox",
        "-v",
        "21",
        "--vi",
        "public",
        "-p",
        "Linux",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_22_Linux: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 22 on Linux",
        "-b",
        "firefox",
        "-v",
        "22",
        "--vi",
        "public",
        "-p",
        "Linux",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_23_Linux: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 23 on Linux",
        "-b",
        "firefox",
        "-v",
        "23",
        "--vi",
        "public",
        "-p",
        "Linux",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_24_Linux: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 24 on Linux",
        "-b",
        "firefox",
        "-v",
        "24",
        "--vi",
        "public",
        "-p",
        "Linux",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_25_Linux: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 25 on Linux",
        "-b",
        "firefox",
        "-v",
        "25",
        "--vi",
        "public",
        "-p",
        "Linux",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_26_Linux: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 26 on Linux",
        "-b",
        "firefox",
        "-v",
        "26",
        "--vi",
        "public",
        "-p",
        "Linux",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_27_Linux: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 27 on Linux",
        "-b",
        "firefox",
        "-v",
        "27",
        "--vi",
        "public",
        "-p",
        "Linux",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_28_Linux: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 28 on Linux",
        "-b",
        "firefox",
        "-v",
        "28",
        "--vi",
        "public",
        "-p",
        "Linux",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_29_Linux: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 29 on Linux",
        "-b",
        "firefox",
        "-v",
        "29",
        "--vi",
        "public",
        "-p",
        "Linux",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_30_Linux: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 30 on Linux",
        "-b",
        "firefox",
        "-v",
        "30",
        "--vi",
        "public",
        "-p",
        "Linux",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_31_Linux: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 31 on Linux",
        "-b",
        "firefox",
        "-v",
        "31",
        "--vi",
        "public",
        "-p",
        "Linux",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_32_Linux: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 32 on Linux",
        "-b",
        "firefox",
        "-v",
        "32",
        "--vi",
        "public",
        "-p",
        "Linux",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_33_Linux: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 33 on Linux",
        "-b",
        "firefox",
        "-v",
        "33",
        "--vi",
        "public",
        "-p",
        "Linux",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_34_Linux: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 34 on Linux",
        "-b",
        "firefox",
        "-v",
        "34",
        "--vi",
        "public",
        "-p",
        "Linux",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_35_Linux: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 35 on Linux",
        "-b",
        "firefox",
        "-v",
        "35",
        "--vi",
        "public",
        "-p",
        "Linux",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_36_Linux: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 36 on Linux",
        "-b",
        "firefox",
        "-v",
        "36",
        "--vi",
        "public",
        "-p",
        "Linux",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_37_Linux: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 37 on Linux",
        "-b",
        "firefox",
        "-v",
        "37",
        "--vi",
        "public",
        "-p",
        "Linux",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_38_Linux: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 38 on Linux",
        "-b",
        "firefox",
        "-v",
        "38",
        "--vi",
        "public",
        "-p",
        "Linux",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_39_Linux: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 39 on Linux",
        "-b",
        "firefox",
        "-v",
        "39",
        "--vi",
        "public",
        "-p",
        "Linux",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_40_Linux: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 40 on Linux",
        "-b",
        "firefox",
        "-v",
        "40",
        "--vi",
        "public",
        "-p",
        "Linux",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_41_Linux: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 41 on Linux",
        "-b",
        "firefox",
        "-v",
        "41",
        "--vi",
        "public",
        "-p",
        "Linux",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_42_Linux: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 42 on Linux",
        "-b",
        "firefox",
        "-v",
        "42",
        "--vi",
        "public",
        "-p",
        "Linux",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_43_Linux: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 43 on Linux",
        "-b",
        "firefox",
        "-v",
        "43",
        "--vi",
        "public",
        "-p",
        "Linux",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_44_Linux: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 44 on Linux",
        "-b",
        "firefox",
        "-v",
        "44",
        "--vi",
        "public",
        "-p",
        "Linux",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_45_Linux: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 45 on Linux",
        "-b",
        "firefox",
        "-v",
        "45",
        "--vi",
        "public",
        "-p",
        "Linux",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    // Opera
  
    SL_opera_public_12_15_Linux: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Opera 12.15 on Linux",
        "-b",
        "opera",
        "-v",
        "12.15",
        "--vi",
        "public",
        "-p",
        "Linux",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    // Windows XP
  
    // Chrome
  
    SL_chrome_public_26_Windows_XP: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 26 on Windows XP",
        "-b",
        "chrome",
        "-v",
        "26",
        "--vi",
        "public",
        "-p",
        "Windows XP",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_27_Windows_XP: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 27 on Windows XP",
        "-b",
        "chrome",
        "-v",
        "27",
        "--vi",
        "public",
        "-p",
        "Windows XP",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_28_Windows_XP: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 28 on Windows XP",
        "-b",
        "chrome",
        "-v",
        "28",
        "--vi",
        "public",
        "-p",
        "Windows XP",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_29_Windows_XP: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 29 on Windows XP",
        "-b",
        "chrome",
        "-v",
        "29",
        "--vi",
        "public",
        "-p",
        "Windows XP",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_30_Windows_XP: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 30 on Windows XP",
        "-b",
        "chrome",
        "-v",
        "30",
        "--vi",
        "public",
        "-p",
        "Windows XP",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_31_Windows_XP: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 31 on Windows XP",
        "-b",
        "chrome",
        "-v",
        "31",
        "--vi",
        "public",
        "-p",
        "Windows XP",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_32_Windows_XP: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 32 on Windows XP",
        "-b",
        "chrome",
        "-v",
        "32",
        "--vi",
        "public",
        "-p",
        "Windows XP",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_33_Windows_XP: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 33 on Windows XP",
        "-b",
        "chrome",
        "-v",
        "33",
        "--vi",
        "public",
        "-p",
        "Windows XP",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_34_Windows_XP: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 34 on Windows XP",
        "-b",
        "chrome",
        "-v",
        "34",
        "--vi",
        "public",
        "-p",
        "Windows XP",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_35_Windows_XP: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 35 on Windows XP",
        "-b",
        "chrome",
        "-v",
        "35",
        "--vi",
        "public",
        "-p",
        "Windows XP",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_36_Windows_XP: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 36 on Windows XP",
        "-b",
        "chrome",
        "-v",
        "36",
        "--vi",
        "public",
        "-p",
        "Windows XP",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_37_Windows_XP: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 37 on Windows XP",
        "-b",
        "chrome",
        "-v",
        "37",
        "--vi",
        "public",
        "-p",
        "Windows XP",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_38_Windows_XP: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 38 on Windows XP",
        "-b",
        "chrome",
        "-v",
        "38",
        "--vi",
        "public",
        "-p",
        "Windows XP",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_39_Windows_XP: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 39 on Windows XP",
        "-b",
        "chrome",
        "-v",
        "39",
        "--vi",
        "public",
        "-p",
        "Windows XP",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_40_Windows_XP: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 40 on Windows XP",
        "-b",
        "chrome",
        "-v",
        "40",
        "--vi",
        "public",
        "-p",
        "Windows XP",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_41_Windows_XP: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 41 on Windows XP",
        "-b",
        "chrome",
        "-v",
        "41",
        "--vi",
        "public",
        "-p",
        "Windows XP",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_42_Windows_XP: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 42 on Windows XP",
        "-b",
        "chrome",
        "-v",
        "42",
        "--vi",
        "public",
        "-p",
        "Windows XP",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_43_Windows_XP: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 43 on Windows XP",
        "-b",
        "chrome",
        "-v",
        "43",
        "--vi",
        "public",
        "-p",
        "Windows XP",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_44_Windows_XP: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 44 on Windows XP",
        "-b",
        "chrome",
        "-v",
        "44",
        "--vi",
        "public",
        "-p",
        "Windows XP",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_45_Windows_XP: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 45 on Windows XP",
        "-b",
        "chrome",
        "-v",
        "45",
        "--vi",
        "public",
        "-p",
        "Windows XP",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_46_Windows_XP: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 46 on Windows XP",
        "-b",
        "chrome",
        "-v",
        "46",
        "--vi",
        "public",
        "-p",
        "Windows XP",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_47_Windows_XP: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 47 on Windows XP",
        "-b",
        "chrome",
        "-v",
        "47",
        "--vi",
        "public",
        "-p",
        "Windows XP",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_48_Windows_XP: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 48 on Windows XP",
        "-b",
        "chrome",
        "-v",
        "48",
        "--vi",
        "public",
        "-p",
        "Windows XP",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_49_Windows_XP: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 49 on Windows XP",
        "-b",
        "chrome",
        "-v",
        "49",
        "--vi",
        "public",
        "-p",
        "Windows XP",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    // Internet Explorer
  
    SL_internet_explorer_public_6_Windows_XP: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Internet Explorer 6 on Windows XP",
        "-b",
        "internet explorer",
        "-v",
        "6",
        "--vi",
        "public",
        "-p",
        "Windows XP",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_internet_explorer_public_7_Windows_XP: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Internet Explorer 7 on Windows XP",
        "-b",
        "internet explorer",
        "-v",
        "7",
        "--vi",
        "public",
        "-p",
        "Windows XP",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    // Firefox
  
    SL_firefox_public_4_Windows_XP: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 4 on Windows XP",
        "-b",
        "firefox",
        "-v",
        "4",
        "--vi",
        "public",
        "-p",
        "Windows XP",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_5_Windows_XP: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 5 on Windows XP",
        "-b",
        "firefox",
        "-v",
        "5",
        "--vi",
        "public",
        "-p",
        "Windows XP",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_6_Windows_XP: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 6 on Windows XP",
        "-b",
        "firefox",
        "-v",
        "6",
        "--vi",
        "public",
        "-p",
        "Windows XP",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_7_Windows_XP: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 7 on Windows XP",
        "-b",
        "firefox",
        "-v",
        "7",
        "--vi",
        "public",
        "-p",
        "Windows XP",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_8_Windows_XP: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 8 on Windows XP",
        "-b",
        "firefox",
        "-v",
        "8",
        "--vi",
        "public",
        "-p",
        "Windows XP",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_9_Windows_XP: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 9 on Windows XP",
        "-b",
        "firefox",
        "-v",
        "9",
        "--vi",
        "public",
        "-p",
        "Windows XP",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_10_Windows_XP: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 10 on Windows XP",
        "-b",
        "firefox",
        "-v",
        "10",
        "--vi",
        "public",
        "-p",
        "Windows XP",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_11_Windows_XP: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 11 on Windows XP",
        "-b",
        "firefox",
        "-v",
        "11",
        "--vi",
        "public",
        "-p",
        "Windows XP",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_12_Windows_XP: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 12 on Windows XP",
        "-b",
        "firefox",
        "-v",
        "12",
        "--vi",
        "public",
        "-p",
        "Windows XP",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_13_Windows_XP: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 13 on Windows XP",
        "-b",
        "firefox",
        "-v",
        "13",
        "--vi",
        "public",
        "-p",
        "Windows XP",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_14_Windows_XP: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 14 on Windows XP",
        "-b",
        "firefox",
        "-v",
        "14",
        "--vi",
        "public",
        "-p",
        "Windows XP",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_15_Windows_XP: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 15 on Windows XP",
        "-b",
        "firefox",
        "-v",
        "15",
        "--vi",
        "public",
        "-p",
        "Windows XP",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_16_Windows_XP: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 16 on Windows XP",
        "-b",
        "firefox",
        "-v",
        "16",
        "--vi",
        "public",
        "-p",
        "Windows XP",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_17_Windows_XP: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 17 on Windows XP",
        "-b",
        "firefox",
        "-v",
        "17",
        "--vi",
        "public",
        "-p",
        "Windows XP",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_18_Windows_XP: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 18 on Windows XP",
        "-b",
        "firefox",
        "-v",
        "18",
        "--vi",
        "public",
        "-p",
        "Windows XP",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_19_Windows_XP: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 19 on Windows XP",
        "-b",
        "firefox",
        "-v",
        "19",
        "--vi",
        "public",
        "-p",
        "Windows XP",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_20_Windows_XP: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 20 on Windows XP",
        "-b",
        "firefox",
        "-v",
        "20",
        "--vi",
        "public",
        "-p",
        "Windows XP",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_21_0b1_Windows_XP: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "firefox 21.0b1 on Windows XP",
        "-b",
        "firefox",
        "-v",
        "21.0b1",
        "--vi",
        "public",
        "-p",
        "Windows XP",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_22_Windows_XP: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 22 on Windows XP",
        "-b",
        "firefox",
        "-v",
        "22",
        "--vi",
        "public",
        "-p",
        "Windows XP",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_23_Windows_XP: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 23 on Windows XP",
        "-b",
        "firefox",
        "-v",
        "23",
        "--vi",
        "public",
        "-p",
        "Windows XP",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_24_Windows_XP: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 24 on Windows XP",
        "-b",
        "firefox",
        "-v",
        "24",
        "--vi",
        "public",
        "-p",
        "Windows XP",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_25_0b2_Windows_XP: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "firefox 25.0b2 on Windows XP",
        "-b",
        "firefox",
        "-v",
        "25.0b2",
        "--vi",
        "public",
        "-p",
        "Windows XP",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_26_Windows_XP: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 26 on Windows XP",
        "-b",
        "firefox",
        "-v",
        "26",
        "--vi",
        "public",
        "-p",
        "Windows XP",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_27_Windows_XP: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 27 on Windows XP",
        "-b",
        "firefox",
        "-v",
        "27",
        "--vi",
        "public",
        "-p",
        "Windows XP",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_28_Windows_XP: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 28 on Windows XP",
        "-b",
        "firefox",
        "-v",
        "28",
        "--vi",
        "public",
        "-p",
        "Windows XP",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_29_Windows_XP: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 29 on Windows XP",
        "-b",
        "firefox",
        "-v",
        "29",
        "--vi",
        "public",
        "-p",
        "Windows XP",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_30_Windows_XP: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 30 on Windows XP",
        "-b",
        "firefox",
        "-v",
        "30",
        "--vi",
        "public",
        "-p",
        "Windows XP",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_31_Windows_XP: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 31 on Windows XP",
        "-b",
        "firefox",
        "-v",
        "31",
        "--vi",
        "public",
        "-p",
        "Windows XP",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_32_Windows_XP: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 32 on Windows XP",
        "-b",
        "firefox",
        "-v",
        "32",
        "--vi",
        "public",
        "-p",
        "Windows XP",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_33_Windows_XP: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 33 on Windows XP",
        "-b",
        "firefox",
        "-v",
        "33",
        "--vi",
        "public",
        "-p",
        "Windows XP",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_34_Windows_XP: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 34 on Windows XP",
        "-b",
        "firefox",
        "-v",
        "34",
        "--vi",
        "public",
        "-p",
        "Windows XP",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_35_Windows_XP: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 35 on Windows XP",
        "-b",
        "firefox",
        "-v",
        "35",
        "--vi",
        "public",
        "-p",
        "Windows XP",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_36_Windows_XP: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 36 on Windows XP",
        "-b",
        "firefox",
        "-v",
        "36",
        "--vi",
        "public",
        "-p",
        "Windows XP",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_37_Windows_XP: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 37 on Windows XP",
        "-b",
        "firefox",
        "-v",
        "37",
        "--vi",
        "public",
        "-p",
        "Windows XP",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_38_Windows_XP: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 38 on Windows XP",
        "-b",
        "firefox",
        "-v",
        "38",
        "--vi",
        "public",
        "-p",
        "Windows XP",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_39_Windows_XP: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 39 on Windows XP",
        "-b",
        "firefox",
        "-v",
        "39",
        "--vi",
        "public",
        "-p",
        "Windows XP",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_40_Windows_XP: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 40 on Windows XP",
        "-b",
        "firefox",
        "-v",
        "40",
        "--vi",
        "public",
        "-p",
        "Windows XP",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_41_Windows_XP: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 41 on Windows XP",
        "-b",
        "firefox",
        "-v",
        "41",
        "--vi",
        "public",
        "-p",
        "Windows XP",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_42_Windows_XP: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 42 on Windows XP",
        "-b",
        "firefox",
        "-v",
        "42",
        "--vi",
        "public",
        "-p",
        "Windows XP",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_43_Windows_XP: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 43 on Windows XP",
        "-b",
        "firefox",
        "-v",
        "43",
        "--vi",
        "public",
        "-p",
        "Windows XP",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_44_Windows_XP: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 44 on Windows XP",
        "-b",
        "firefox",
        "-v",
        "44",
        "--vi",
        "public",
        "-p",
        "Windows XP",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_45_Windows_XP: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 45 on Windows XP",
        "-b",
        "firefox",
        "-v",
        "45",
        "--vi",
        "public",
        "-p",
        "Windows XP",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    // Opera
  
    SL_opera_public_11_64_Windows_XP: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Opera 11.64 on Windows XP",
        "-b",
        "opera",
        "-v",
        "11.64",
        "--vi",
        "public",
        "-p",
        "Windows XP",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_opera_public_12_12_Windows_XP: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Opera 12.12 on Windows XP",
        "-b",
        "opera",
        "-v",
        "12.12",
        "--vi",
        "public",
        "-p",
        "Windows XP",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    // Windows 7
  
    // Chrome
  
    SL_chrome_public_dev_Windows_7: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome dev on Windows 7",
        "-b",
        "chrome",
        "-v",
        "dev",
        "--vi",
        "public",
        "-p",
        "Windows 7",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_beta_Windows_7: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome beta on Windows 7",
        "-b",
        "chrome",
        "-v",
        "beta",
        "--vi",
        "public",
        "-p",
        "Windows 7",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_26_Windows_7: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 26 on Windows 7",
        "-b",
        "chrome",
        "-v",
        "26",
        "--vi",
        "public",
        "-p",
        "Windows 7",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_27_Windows_7: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 27 on Windows 7",
        "-b",
        "chrome",
        "-v",
        "27",
        "--vi",
        "public",
        "-p",
        "Windows 7",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_28_Windows_7: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 28 on Windows 7",
        "-b",
        "chrome",
        "-v",
        "28",
        "--vi",
        "public",
        "-p",
        "Windows 7",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_29_Windows_7: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 29 on Windows 7",
        "-b",
        "chrome",
        "-v",
        "29",
        "--vi",
        "public",
        "-p",
        "Windows 7",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_30_Windows_7: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 30 on Windows 7",
        "-b",
        "chrome",
        "-v",
        "30",
        "--vi",
        "public",
        "-p",
        "Windows 7",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_31_Windows_7: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 31 on Windows 7",
        "-b",
        "chrome",
        "-v",
        "31",
        "--vi",
        "public",
        "-p",
        "Windows 7",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_32_Windows_7: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 32 on Windows 7",
        "-b",
        "chrome",
        "-v",
        "32",
        "--vi",
        "public",
        "-p",
        "Windows 7",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_33_Windows_7: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 33 on Windows 7",
        "-b",
        "chrome",
        "-v",
        "33",
        "--vi",
        "public",
        "-p",
        "Windows 7",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_34_Windows_7: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 34 on Windows 7",
        "-b",
        "chrome",
        "-v",
        "34",
        "--vi",
        "public",
        "-p",
        "Windows 7",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_35_Windows_7: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 35 on Windows 7",
        "-b",
        "chrome",
        "-v",
        "35",
        "--vi",
        "public",
        "-p",
        "Windows 7",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_36_Windows_7: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 36 on Windows 7",
        "-b",
        "chrome",
        "-v",
        "36",
        "--vi",
        "public",
        "-p",
        "Windows 7",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_37_Windows_7: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 37 on Windows 7",
        "-b",
        "chrome",
        "-v",
        "37",
        "--vi",
        "public",
        "-p",
        "Windows 7",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_38_Windows_7: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 38 on Windows 7",
        "-b",
        "chrome",
        "-v",
        "38",
        "--vi",
        "public",
        "-p",
        "Windows 7",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_39_Windows_7: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 39 on Windows 7",
        "-b",
        "chrome",
        "-v",
        "39",
        "--vi",
        "public",
        "-p",
        "Windows 7",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_40_Windows_7: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 40 on Windows 7",
        "-b",
        "chrome",
        "-v",
        "40",
        "--vi",
        "public",
        "-p",
        "Windows 7",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_41_Windows_7: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 41 on Windows 7",
        "-b",
        "chrome",
        "-v",
        "41",
        "--vi",
        "public",
        "-p",
        "Windows 7",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_42_Windows_7: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 42 on Windows 7",
        "-b",
        "chrome",
        "-v",
        "42",
        "--vi",
        "public",
        "-p",
        "Windows 7",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_43_Windows_7: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 43 on Windows 7",
        "-b",
        "chrome",
        "-v",
        "43",
        "--vi",
        "public",
        "-p",
        "Windows 7",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_44_Windows_7: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 44 on Windows 7",
        "-b",
        "chrome",
        "-v",
        "44",
        "--vi",
        "public",
        "-p",
        "Windows 7",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_45_Windows_7: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 45 on Windows 7",
        "-b",
        "chrome",
        "-v",
        "45",
        "--vi",
        "public",
        "-p",
        "Windows 7",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_46_Windows_7: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 46 on Windows 7",
        "-b",
        "chrome",
        "-v",
        "46",
        "--vi",
        "public",
        "-p",
        "Windows 7",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_47_Windows_7: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 47 on Windows 7",
        "-b",
        "chrome",
        "-v",
        "47",
        "--vi",
        "public",
        "-p",
        "Windows 7",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_48_Windows_7: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 48 on Windows 7",
        "-b",
        "chrome",
        "-v",
        "48",
        "--vi",
        "public",
        "-p",
        "Windows 7",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_49_Windows_7: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 49 on Windows 7",
        "-b",
        "chrome",
        "-v",
        "49",
        "--vi",
        "public",
        "-p",
        "Windows 7",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_50_Windows_7: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 50 on Windows 7",
        "-b",
        "chrome",
        "-v",
        "50",
        "--vi",
        "public",
        "-p",
        "Windows 7",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_51_Windows_7: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 51 on Windows 7",
        "-b",
        "chrome",
        "-v",
        "51",
        "--vi",
        "public",
        "-p",
        "Windows 7",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_52_Windows_7: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 52 on Windows 7",
        "-b",
        "chrome",
        "-v",
        "52",
        "--vi",
        "public",
        "-p",
        "Windows 7",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_53_Windows_7: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 53 on Windows 7",
        "-b",
        "chrome",
        "-v",
        "53",
        "--vi",
        "public",
        "-p",
        "Windows 7",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_54_Windows_7: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 54 on Windows 7",
        "-b",
        "chrome",
        "-v",
        "54",
        "--vi",
        "public",
        "-p",
        "Windows 7",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    // IE
  
    SL_internet_explorer_public_9_Windows_7: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Internet Explorer 9 on Windows 7",
        "-b",
        "internet explorer",
        "-v",
        "9",
        "--vi",
        "public",
        "-p",
        "Windows 7",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_internet_explorer_public_10_Windows_7: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Internet Explorer 10 on Windows 7",
        "-b",
        "internet explorer",
        "-v",
        "10",
        "--vi",
        "public",
        "-p",
        "Windows 7",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_internet_explorer_public_11_Windows_7: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Internet Explorer 11 on Windows 7",
        "-b",
        "internet explorer",
        "-v",
        "11",
        "--vi",
        "public",
        "-p",
        "Windows 7",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    // Firefox
  
    SL_firefox_public_dev_Windows_7: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox dev on Windows 7",
        "-b",
        "firefox",
        "-v",
        "dev",
        "--vi",
        "public",
        "-p",
        "Windows 7",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_beta_Windows_7: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox beta on Windows 7",
        "-b",
        "firefox",
        "-v",
        "beta",
        "--vi",
        "public",
        "-p",
        "Windows 7",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_4_Windows_7: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 4 on Windows 7",
        "-b",
        "firefox",
        "-v",
        "4",
        "--vi",
        "public",
        "-p",
        "Windows 7",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_5_Windows_7: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 5 on Windows 7",
        "-b",
        "firefox",
        "-v",
        "5",
        "--vi",
        "public",
        "-p",
        "Windows 7",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_6_Windows_7: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 6 on Windows 7",
        "-b",
        "firefox",
        "-v",
        "6",
        "--vi",
        "public",
        "-p",
        "Windows 7",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_7_Windows_7: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 7 on Windows 7",
        "-b",
        "firefox",
        "-v",
        "7",
        "--vi",
        "public",
        "-p",
        "Windows 7",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_8_Windows_7: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 8 on Windows 7",
        "-b",
        "firefox",
        "-v",
        "8",
        "--vi",
        "public",
        "-p",
        "Windows 7",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_9_Windows_7: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 9 on Windows 7",
        "-b",
        "firefox",
        "-v",
        "9",
        "--vi",
        "public",
        "-p",
        "Windows 7",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_10_Windows_7: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 10 on Windows 7",
        "-b",
        "firefox",
        "-v",
        "10",
        "--vi",
        "public",
        "-p",
        "Windows 7",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_11_Windows_7: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 11 on Windows 7",
        "-b",
        "firefox",
        "-v",
        "11",
        "--vi",
        "public",
        "-p",
        "Windows 7",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_12_Windows_7: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 12 on Windows 7",
        "-b",
        "firefox",
        "-v",
        "12",
        "--vi",
        "public",
        "-p",
        "Windows 7",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_13_Windows_7: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 13 on Windows 7",
        "-b",
        "firefox",
        "-v",
        "13",
        "--vi",
        "public",
        "-p",
        "Windows 7",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_14_Windows_7: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 14 on Windows 7",
        "-b",
        "firefox",
        "-v",
        "14",
        "--vi",
        "public",
        "-p",
        "Windows 7",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_15_Windows_7: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 15 on Windows 7",
        "-b",
        "firefox",
        "-v",
        "15",
        "--vi",
        "public",
        "-p",
        "Windows 7",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_16_Windows_7: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 16 on Windows 7",
        "-b",
        "firefox",
        "-v",
        "16",
        "--vi",
        "public",
        "-p",
        "Windows 7",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_17_Windows_7: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 17 on Windows 7",
        "-b",
        "firefox",
        "-v",
        "17",
        "--vi",
        "public",
        "-p",
        "Windows 7",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_18_Windows_7: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 18 on Windows 7",
        "-b",
        "firefox",
        "-v",
        "18",
        "--vi",
        "public",
        "-p",
        "Windows 7",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_19_Windows_7: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 19 on Windows 7",
        "-b",
        "firefox",
        "-v",
        "19",
        "--vi",
        "public",
        "-p",
        "Windows 7",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_20_Windows_7: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 20 on Windows 7",
        "-b",
        "firefox",
        "-v",
        "20",
        "--vi",
        "public",
        "-p",
        "Windows 7",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_21_0b1_Windows_7: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "firefox 21.0b1 on Windows 7",
        "-b",
        "firefox",
        "-v",
        "21.0b1",
        "--vi",
        "public",
        "-p",
        "Windows 7",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_22_Windows_7: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 22 on Windows 7",
        "-b",
        "firefox",
        "-v",
        "22",
        "--vi",
        "public",
        "-p",
        "Windows 7",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_23_Windows_7: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 23 on Windows 7",
        "-b",
        "firefox",
        "-v",
        "23",
        "--vi",
        "public",
        "-p",
        "Windows 7",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_24_Windows_7: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 24 on Windows 7",
        "-b",
        "firefox",
        "-v",
        "24",
        "--vi",
        "public",
        "-p",
        "Windows 7",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_25_0b2_Windows_7: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "firefox 25.0b2 on Windows 7",
        "-b",
        "firefox",
        "-v",
        "25.0b2",
        "--vi",
        "public",
        "-p",
        "Windows 7",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_26_Windows_7: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 26 on Windows 7",
        "-b",
        "firefox",
        "-v",
        "26",
        "--vi",
        "public",
        "-p",
        "Windows 7",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_27_Windows_7: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 27 on Windows 7",
        "-b",
        "firefox",
        "-v",
        "27",
        "--vi",
        "public",
        "-p",
        "Windows 7",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_28_Windows_7: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 28 on Windows 7",
        "-b",
        "firefox",
        "-v",
        "28",
        "--vi",
        "public",
        "-p",
        "Windows 7",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_29_Windows_7: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 29 on Windows 7",
        "-b",
        "firefox",
        "-v",
        "29",
        "--vi",
        "public",
        "-p",
        "Windows 7",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_30_Windows_7: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 30 on Windows 7",
        "-b",
        "firefox",
        "-v",
        "30",
        "--vi",
        "public",
        "-p",
        "Windows 7",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_31_Windows_7: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 31 on Windows 7",
        "-b",
        "firefox",
        "-v",
        "31",
        "--vi",
        "public",
        "-p",
        "Windows 7",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_32_Windows_7: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 32 on Windows 7",
        "-b",
        "firefox",
        "-v",
        "32",
        "--vi",
        "public",
        "-p",
        "Windows 7",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_33_Windows_7: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 33 on Windows 7",
        "-b",
        "firefox",
        "-v",
        "33",
        "--vi",
        "public",
        "-p",
        "Windows 7",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_34_Windows_7: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 34 on Windows 7",
        "-b",
        "firefox",
        "-v",
        "34",
        "--vi",
        "public",
        "-p",
        "Windows 7",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_35_Windows_7: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 35 on Windows 7",
        "-b",
        "firefox",
        "-v",
        "35",
        "--vi",
        "public",
        "-p",
        "Windows 7",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_36_Windows_7: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 36 on Windows 7",
        "-b",
        "firefox",
        "-v",
        "36",
        "--vi",
        "public",
        "-p",
        "Windows 7",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_37_Windows_7: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 37 on Windows 7",
        "-b",
        "firefox",
        "-v",
        "37",
        "--vi",
        "public",
        "-p",
        "Windows 7",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_38_Windows_7: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 38 on Windows 7",
        "-b",
        "firefox",
        "-v",
        "38",
        "--vi",
        "public",
        "-p",
        "Windows 7",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_39_Windows_7: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 39 on Windows 7",
        "-b",
        "firefox",
        "-v",
        "39",
        "--vi",
        "public",
        "-p",
        "Windows 7",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_40_Windows_7: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 40 on Windows 7",
        "-b",
        "firefox",
        "-v",
        "40",
        "--vi",
        "public",
        "-p",
        "Windows 7",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_41_Windows_7: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 41 on Windows 7",
        "-b",
        "firefox",
        "-v",
        "41",
        "--vi",
        "public",
        "-p",
        "Windows 7",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_42_Windows_7: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 42 on Windows 7",
        "-b",
        "firefox",
        "-v",
        "42",
        "--vi",
        "public",
        "-p",
        "Windows 7",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_43_Windows_7: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 43 on Windows 7",
        "-b",
        "firefox",
        "-v",
        "43",
        "--vi",
        "public",
        "-p",
        "Windows 7",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_44_Windows_7: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 44 on Windows 7",
        "-b",
        "firefox",
        "-v",
        "44",
        "--vi",
        "public",
        "-p",
        "Windows 7",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_45_Windows_7: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 45 on Windows 7",
        "-b",
        "firefox",
        "-v",
        "45",
        "--vi",
        "public",
        "-p",
        "Windows 7",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_46_Windows_7: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 46 on Windows 7",
        "-b",
        "firefox",
        "-v",
        "46",
        "--vi",
        "public",
        "-p",
        "Windows 7",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_47_Windows_7: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 47 on Windows 7",
        "-b",
        "firefox",
        "-v",
        "47",
        "--vi",
        "public",
        "-p",
        "Windows 7",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_48_Windows_7: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 48 on Windows 7",
        "-b",
        "firefox",
        "-v",
        "48",
        "--vi",
        "public",
        "-p",
        "Windows 7",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_49_Windows_7: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 49 on Windows 7",
        "-b",
        "firefox",
        "-v",
        "49",
        "--vi",
        "public",
        "-p",
        "Windows 7",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    // Opera
  
    SL_opera_public_11_64_Windows_7: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Opera 11.64 on Windows 7",
        "-b",
        "opera",
        "-v",
        "11.64",
        "--vi",
        "public",
        "-p",
        "Windows 7",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_opera_public_12_12_Windows_7: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Opera 12.12 on Windows 7",
        "-b",
        "opera",
        "-v",
        "12.12",
        "--vi",
        "public",
        "-p",
        "Windows 7",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    // Safari
  
    SL_safari_public_5_1_Windows_7: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Safari 5.1 on Windows 7",
        "-b",
        "safari",
        "-v",
        "5.1",
        "--vi",
        "public",
        "-p",
        "Windows 7",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    // Windows 8
  
    // Chrome
  
    SL_chrome_public_dev_Windows_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome dev on Windows 8",
        "-b",
        "chrome",
        "-v",
        "dev",
        "--vi",
        "public",
        "-p",
        "Windows 8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_beta_Windows_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome beta on Windows 8",
        "-b",
        "chrome",
        "-v",
        "beta",
        "--vi",
        "public",
        "-p",
        "Windows 8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_26_Windows_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 26 on Windows 8",
        "-b",
        "chrome",
        "-v",
        "26",
        "--vi",
        "public",
        "-p",
        "Windows 8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_27_Windows_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 27 on Windows 8",
        "-b",
        "chrome",
        "-v",
        "27",
        "--vi",
        "public",
        "-p",
        "Windows 8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_28_Windows_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 28 on Windows 8",
        "-b",
        "chrome",
        "-v",
        "28",
        "--vi",
        "public",
        "-p",
        "Windows 8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_29_Windows_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 29 on Windows 8",
        "-b",
        "chrome",
        "-v",
        "29",
        "--vi",
        "public",
        "-p",
        "Windows 8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_30_Windows_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 30 on Windows 8",
        "-b",
        "chrome",
        "-v",
        "30",
        "--vi",
        "public",
        "-p",
        "Windows 8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_31_Windows_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 31 on Windows 8",
        "-b",
        "chrome",
        "-v",
        "31",
        "--vi",
        "public",
        "-p",
        "Windows 8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_32_Windows_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 32 on Windows 8",
        "-b",
        "chrome",
        "-v",
        "32",
        "--vi",
        "public",
        "-p",
        "Windows 8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_33_Windows_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 33 on Windows 8",
        "-b",
        "chrome",
        "-v",
        "33",
        "--vi",
        "public",
        "-p",
        "Windows 8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_34_Windows_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 34 on Windows 8",
        "-b",
        "chrome",
        "-v",
        "34",
        "--vi",
        "public",
        "-p",
        "Windows 8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_35_Windows_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 35 on Windows 8",
        "-b",
        "chrome",
        "-v",
        "35",
        "--vi",
        "public",
        "-p",
        "Windows 8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_36_Windows_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 36 on Windows 8",
        "-b",
        "chrome",
        "-v",
        "36",
        "--vi",
        "public",
        "-p",
        "Windows 8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_37_Windows_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 37 on Windows 8",
        "-b",
        "chrome",
        "-v",
        "37",
        "--vi",
        "public",
        "-p",
        "Windows 8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_38_Windows_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 38 on Windows 8",
        "-b",
        "chrome",
        "-v",
        "38",
        "--vi",
        "public",
        "-p",
        "Windows 8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_39_Windows_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 39 on Windows 8",
        "-b",
        "chrome",
        "-v",
        "39",
        "--vi",
        "public",
        "-p",
        "Windows 8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_40_Windows_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 40 on Windows 8",
        "-b",
        "chrome",
        "-v",
        "40",
        "--vi",
        "public",
        "-p",
        "Windows 8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_41_Windows_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 41 on Windows 8",
        "-b",
        "chrome",
        "-v",
        "41",
        "--vi",
        "public",
        "-p",
        "Windows 8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_42_Windows_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 42 on Windows 8",
        "-b",
        "chrome",
        "-v",
        "42",
        "--vi",
        "public",
        "-p",
        "Windows 8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_43_Windows_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 43 on Windows 8",
        "-b",
        "chrome",
        "-v",
        "43",
        "--vi",
        "public",
        "-p",
        "Windows 8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_44_Windows_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 44 on Windows 8",
        "-b",
        "chrome",
        "-v",
        "44",
        "--vi",
        "public",
        "-p",
        "Windows 8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_45_Windows_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 45 on Windows 8",
        "-b",
        "chrome",
        "-v",
        "45",
        "--vi",
        "public",
        "-p",
        "Windows 8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_46_Windows_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 46 on Windows 8",
        "-b",
        "chrome",
        "-v",
        "46",
        "--vi",
        "public",
        "-p",
        "Windows 8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_47_Windows_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 47 on Windows 8",
        "-b",
        "chrome",
        "-v",
        "47",
        "--vi",
        "public",
        "-p",
        "Windows 8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_48_Windows_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 48 on Windows 8",
        "-b",
        "chrome",
        "-v",
        "48",
        "--vi",
        "public",
        "-p",
        "Windows 8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_49_Windows_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 49 on Windows 8",
        "-b",
        "chrome",
        "-v",
        "49",
        "--vi",
        "public",
        "-p",
        "Windows 8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_50_Windows_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 50 on Windows 8",
        "-b",
        "chrome",
        "-v",
        "50",
        "--vi",
        "public",
        "-p",
        "Windows 8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_51_Windows_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 51 on Windows 8",
        "-b",
        "chrome",
        "-v",
        "51",
        "--vi",
        "public",
        "-p",
        "Windows 8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_52_Windows_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 52 on Windows 8",
        "-b",
        "chrome",
        "-v",
        "52",
        "--vi",
        "public",
        "-p",
        "Windows 8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_53_Windows_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 53 on Windows 8",
        "-b",
        "chrome",
        "-v",
        "53",
        "--vi",
        "public",
        "-p",
        "Windows 8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_54_Windows_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 54 on Windows 8",
        "-b",
        "chrome",
        "-v",
        "54",
        "--vi",
        "public",
        "-p",
        "Windows 8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    // Firefox
  
    SL_firefox_public_dev_Windows_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox dev on Windows 8",
        "-b",
        "firefox",
        "-v",
        "dev",
        "--vi",
        "public",
        "-p",
        "Windows 8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_beta_Windows_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox beta on Windows 8",
        "-b",
        "firefox",
        "-v",
        "beta",
        "--vi",
        "public",
        "-p",
        "Windows 8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_4_Windows_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 4 on Windows 8",
        "-b",
        "firefox",
        "-v",
        "4",
        "--vi",
        "public",
        "-p",
        "Windows 8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_5_Windows_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 5 on Windows 8",
        "-b",
        "firefox",
        "-v",
        "5",
        "--vi",
        "public",
        "-p",
        "Windows 8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_6_Windows_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 6 on Windows 8",
        "-b",
        "firefox",
        "-v",
        "6",
        "--vi",
        "public",
        "-p",
        "Windows 8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_7_Windows_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 7 on Windows 8",
        "-b",
        "firefox",
        "-v",
        "7",
        "--vi",
        "public",
        "-p",
        "Windows 8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_8_Windows_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 8 on Windows 8",
        "-b",
        "firefox",
        "-v",
        "8",
        "--vi",
        "public",
        "-p",
        "Windows 8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_9_Windows_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 9 on Windows 8",
        "-b",
        "firefox",
        "-v",
        "9",
        "--vi",
        "public",
        "-p",
        "Windows 8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_10_Windows_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 10 on Windows 8",
        "-b",
        "firefox",
        "-v",
        "10",
        "--vi",
        "public",
        "-p",
        "Windows 8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_11_Windows_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 11 on Windows 8",
        "-b",
        "firefox",
        "-v",
        "11",
        "--vi",
        "public",
        "-p",
        "Windows 8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_12_Windows_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 12 on Windows 8",
        "-b",
        "firefox",
        "-v",
        "12",
        "--vi",
        "public",
        "-p",
        "Windows 8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_13_Windows_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 13 on Windows 8",
        "-b",
        "firefox",
        "-v",
        "13",
        "--vi",
        "public",
        "-p",
        "Windows 8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_14_Windows_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 14 on Windows 8",
        "-b",
        "firefox",
        "-v",
        "14",
        "--vi",
        "public",
        "-p",
        "Windows 8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_15_Windows_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 15 on Windows 8",
        "-b",
        "firefox",
        "-v",
        "15",
        "--vi",
        "public",
        "-p",
        "Windows 8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_16_Windows_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 16 on Windows 8",
        "-b",
        "firefox",
        "-v",
        "16",
        "--vi",
        "public",
        "-p",
        "Windows 8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_17_Windows_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 17 on Windows 8",
        "-b",
        "firefox",
        "-v",
        "17",
        "--vi",
        "public",
        "-p",
        "Windows 8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_18_Windows_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 18 on Windows 8",
        "-b",
        "firefox",
        "-v",
        "18",
        "--vi",
        "public",
        "-p",
        "Windows 8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_19_Windows_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 19 on Windows 8",
        "-b",
        "firefox",
        "-v",
        "19",
        "--vi",
        "public",
        "-p",
        "Windows 8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_20_Windows_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 20 on Windows 8",
        "-b",
        "firefox",
        "-v",
        "20",
        "--vi",
        "public",
        "-p",
        "Windows 8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_21_0b1_Windows_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "firefox 21.0b1 on Windows 8",
        "-b",
        "firefox",
        "-v",
        "21.0b1",
        "--vi",
        "public",
        "-p",
        "Windows 8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_22_Windows_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 22 on Windows 8",
        "-b",
        "firefox",
        "-v",
        "22",
        "--vi",
        "public",
        "-p",
        "Windows 8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_23_Windows_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 23 on Windows 8",
        "-b",
        "firefox",
        "-v",
        "23",
        "--vi",
        "public",
        "-p",
        "Windows 8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_24_Windows_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 24 on Windows 8",
        "-b",
        "firefox",
        "-v",
        "24",
        "--vi",
        "public",
        "-p",
        "Windows 8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_25_0b2_Windows_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "firefox 25.0b2 on Windows 8",
        "-b",
        "firefox",
        "-v",
        "25.0b2",
        "--vi",
        "public",
        "-p",
        "Windows 8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_26_Windows_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 26 on Windows 8",
        "-b",
        "firefox",
        "-v",
        "26",
        "--vi",
        "public",
        "-p",
        "Windows 8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_27_Windows_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 27 on Windows 8",
        "-b",
        "firefox",
        "-v",
        "27",
        "--vi",
        "public",
        "-p",
        "Windows 8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_28_Windows_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 28 on Windows 8",
        "-b",
        "firefox",
        "-v",
        "28",
        "--vi",
        "public",
        "-p",
        "Windows 8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_29_Windows_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 29 on Windows 8",
        "-b",
        "firefox",
        "-v",
        "29",
        "--vi",
        "public",
        "-p",
        "Windows 8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_30_Windows_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 30 on Windows 8",
        "-b",
        "firefox",
        "-v",
        "30",
        "--vi",
        "public",
        "-p",
        "Windows 8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_31_Windows_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 31 on Windows 8",
        "-b",
        "firefox",
        "-v",
        "31",
        "--vi",
        "public",
        "-p",
        "Windows 8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_32_Windows_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 32 on Windows 8",
        "-b",
        "firefox",
        "-v",
        "32",
        "--vi",
        "public",
        "-p",
        "Windows 8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_33_Windows_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 33 on Windows 8",
        "-b",
        "firefox",
        "-v",
        "33",
        "--vi",
        "public",
        "-p",
        "Windows 8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_34_Windows_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 34 on Windows 8",
        "-b",
        "firefox",
        "-v",
        "34",
        "--vi",
        "public",
        "-p",
        "Windows 8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_35_Windows_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 35 on Windows 8",
        "-b",
        "firefox",
        "-v",
        "35",
        "--vi",
        "public",
        "-p",
        "Windows 8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_36_Windows_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 36 on Windows 8",
        "-b",
        "firefox",
        "-v",
        "36",
        "--vi",
        "public",
        "-p",
        "Windows 8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_37_Windows_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 37 on Windows 8",
        "-b",
        "firefox",
        "-v",
        "37",
        "--vi",
        "public",
        "-p",
        "Windows 8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_38_Windows_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 38 on Windows 8",
        "-b",
        "firefox",
        "-v",
        "38",
        "--vi",
        "public",
        "-p",
        "Windows 8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_39_Windows_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 39 on Windows 8",
        "-b",
        "firefox",
        "-v",
        "39",
        "--vi",
        "public",
        "-p",
        "Windows 8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_40_Windows_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 40 on Windows 8",
        "-b",
        "firefox",
        "-v",
        "40",
        "--vi",
        "public",
        "-p",
        "Windows 8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_41_Windows_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 41 on Windows 8",
        "-b",
        "firefox",
        "-v",
        "41",
        "--vi",
        "public",
        "-p",
        "Windows 8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_42_Windows_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 42 on Windows 8",
        "-b",
        "firefox",
        "-v",
        "42",
        "--vi",
        "public",
        "-p",
        "Windows 8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_43_Windows_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 43 on Windows 8",
        "-b",
        "firefox",
        "-v",
        "43",
        "--vi",
        "public",
        "-p",
        "Windows 8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_44_Windows_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 44 on Windows 8",
        "-b",
        "firefox",
        "-v",
        "44",
        "--vi",
        "public",
        "-p",
        "Windows 8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_45_Windows_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 45 on Windows 8",
        "-b",
        "firefox",
        "-v",
        "45",
        "--vi",
        "public",
        "-p",
        "Windows 8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_46_Windows_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 46 on Windows 8",
        "-b",
        "firefox",
        "-v",
        "46",
        "--vi",
        "public",
        "-p",
        "Windows 8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_47_Windows_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 47 on Windows 8",
        "-b",
        "firefox",
        "-v",
        "47",
        "--vi",
        "public",
        "-p",
        "Windows 8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_48_Windows_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 48 on Windows 8",
        "-b",
        "firefox",
        "-v",
        "48",
        "--vi",
        "public",
        "-p",
        "Windows 8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_49_Windows_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 49 on Windows 8",
        "-b",
        "firefox",
        "-v",
        "49",
        "--vi",
        "public",
        "-p",
        "Windows 8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    // IE
  
    SL_internet_explorer_public_10_Windows_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Internet Explorer 10 on Windows 8",
        "-b",
        "internet explorer",
        "-v",
        "10",
        "--vi",
        "public",
        "-p",
        "Windows 8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    // Windows 8.1
  
    // Chrome
  
    SL_chrome_public_dev_Windows_8_1: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome dev on Windows 8.1",
        "-b",
        "chrome",
        "-v",
        "dev",
        "--vi",
        "public",
        "-p",
        "Windows 8.1",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_beta_Windows_8_1: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome beta on Windows 8.1",
        "-b",
        "chrome",
        "-v",
        "beta",
        "--vi",
        "public",
        "-p",
        "Windows 8.1",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_26_Windows_8_1: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 26 on Windows 8.1",
        "-b",
        "chrome",
        "-v",
        "26",
        "--vi",
        "public",
        "-p",
        "Windows 8.1",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_27_Windows_8_1: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 27 on Windows 8.1",
        "-b",
        "chrome",
        "-v",
        "27",
        "--vi",
        "public",
        "-p",
        "Windows 8.1",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_28_Windows_8_1: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 28 on Windows 8.1",
        "-b",
        "chrome",
        "-v",
        "28",
        "--vi",
        "public",
        "-p",
        "Windows 8.1",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_29_Windows_8_1: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 29 on Windows 8.1",
        "-b",
        "chrome",
        "-v",
        "29",
        "--vi",
        "public",
        "-p",
        "Windows 8.1",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_30_Windows_8_1: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 30 on Windows 8.1",
        "-b",
        "chrome",
        "-v",
        "30",
        "--vi",
        "public",
        "-p",
        "Windows 8.1",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_31_Windows_8_1: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 31 on Windows 8.1",
        "-b",
        "chrome",
        "-v",
        "31",
        "--vi",
        "public",
        "-p",
        "Windows 8.1",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_32_Windows_8_1: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 32 on Windows 8.1",
        "-b",
        "chrome",
        "-v",
        "32",
        "--vi",
        "public",
        "-p",
        "Windows 8.1",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_33_Windows_8_1: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 33 on Windows 8.1",
        "-b",
        "chrome",
        "-v",
        "33",
        "--vi",
        "public",
        "-p",
        "Windows 8.1",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_34_Windows_8_1: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 34 on Windows 8.1",
        "-b",
        "chrome",
        "-v",
        "34",
        "--vi",
        "public",
        "-p",
        "Windows 8.1",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_35_Windows_8_1: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 35 on Windows 8.1",
        "-b",
        "chrome",
        "-v",
        "35",
        "--vi",
        "public",
        "-p",
        "Windows 8.1",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_36_Windows_8_1: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 36 on Windows 8.1",
        "-b",
        "chrome",
        "-v",
        "36",
        "--vi",
        "public",
        "-p",
        "Windows 8.1",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_37_Windows_8_1: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 37 on Windows 8.1",
        "-b",
        "chrome",
        "-v",
        "37",
        "--vi",
        "public",
        "-p",
        "Windows 8.1",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_38_Windows_8_1: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 38 on Windows 8.1",
        "-b",
        "chrome",
        "-v",
        "38",
        "--vi",
        "public",
        "-p",
        "Windows 8.1",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_39_Windows_8_1: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 39 on Windows 8.1",
        "-b",
        "chrome",
        "-v",
        "39",
        "--vi",
        "public",
        "-p",
        "Windows 8.1",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_40_Windows_8_1: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 40 on Windows 8.1",
        "-b",
        "chrome",
        "-v",
        "40",
        "--vi",
        "public",
        "-p",
        "Windows 8.1",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_41_Windows_8_1: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 41 on Windows 8.1",
        "-b",
        "chrome",
        "-v",
        "41",
        "--vi",
        "public",
        "-p",
        "Windows 8.1",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_42_Windows_8_1: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 42 on Windows 8.1",
        "-b",
        "chrome",
        "-v",
        "42",
        "--vi",
        "public",
        "-p",
        "Windows 8.1",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_43_Windows_8_1: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 43 on Windows 8.1",
        "-b",
        "chrome",
        "-v",
        "43",
        "--vi",
        "public",
        "-p",
        "Windows 8.1",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_44_Windows_8_1: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 44 on Windows 8.1",
        "-b",
        "chrome",
        "-v",
        "44",
        "--vi",
        "public",
        "-p",
        "Windows 8.1",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_45_Windows_8_1: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 45 on Windows 8.1",
        "-b",
        "chrome",
        "-v",
        "45",
        "--vi",
        "public",
        "-p",
        "Windows 8.1",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_46_Windows_8_1: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 46 on Windows 8.1",
        "-b",
        "chrome",
        "-v",
        "46",
        "--vi",
        "public",
        "-p",
        "Windows 8.1",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_47_Windows_8_1: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 47 on Windows 8.1",
        "-b",
        "chrome",
        "-v",
        "47",
        "--vi",
        "public",
        "-p",
        "Windows 8.1",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_48_Windows_8_1: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 48 on Windows 8.1",
        "-b",
        "chrome",
        "-v",
        "48",
        "--vi",
        "public",
        "-p",
        "Windows 8.1",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_49_Windows_8_1: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 49 on Windows 8.1",
        "-b",
        "chrome",
        "-v",
        "49",
        "--vi",
        "public",
        "-p",
        "Windows 8.1",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_50_Windows_8_1: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 50 on Windows 8.1",
        "-b",
        "chrome",
        "-v",
        "50",
        "--vi",
        "public",
        "-p",
        "Windows 8.1",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_51_Windows_8_1: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 51 on Windows 8.1",
        "-b",
        "chrome",
        "-v",
        "51",
        "--vi",
        "public",
        "-p",
        "Windows 8.1",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_52_Windows_8_1: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 52 on Windows 8.1",
        "-b",
        "chrome",
        "-v",
        "52",
        "--vi",
        "public",
        "-p",
        "Windows 8.1",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_53_Windows_8_1: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 53 on Windows 8.1",
        "-b",
        "chrome",
        "-v",
        "53",
        "--vi",
        "public",
        "-p",
        "Windows 8.1",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_54_Windows_8_1: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 54 on Windows 8.1",
        "-b",
        "chrome",
        "-v",
        "54",
        "--vi",
        "public",
        "-p",
        "Windows 8.1",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    // Firefox
  
    SL_firefox_public_dev_Windows_8_1: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox dev on Windows 8.1",
        "-b",
        "firefox",
        "-v",
        "dev",
        "--vi",
        "public",
        "-p",
        "Windows 8.1",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_beta_Windows_8_1: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox beta on Windows 8.1",
        "-b",
        "firefox",
        "-v",
        "beta",
        "--vi",
        "public",
        "-p",
        "Windows 8.1",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_4_Windows_8_1: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 4 on Windows 8.1",
        "-b",
        "firefox",
        "-v",
        "4",
        "--vi",
        "public",
        "-p",
        "Windows 8.1",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_5_Windows_8_1: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 5 on Windows 8.1",
        "-b",
        "firefox",
        "-v",
        "5",
        "--vi",
        "public",
        "-p",
        "Windows 8.1",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_6_Windows_8_1: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 6 on Windows 8.1",
        "-b",
        "firefox",
        "-v",
        "6",
        "--vi",
        "public",
        "-p",
        "Windows 8.1",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_7_Windows_8_1: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 7 on Windows 8.1",
        "-b",
        "firefox",
        "-v",
        "7",
        "--vi",
        "public",
        "-p",
        "Windows 8.1",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_8_Windows_8_1: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 8 on Windows 8.1",
        "-b",
        "firefox",
        "-v",
        "8",
        "--vi",
        "public",
        "-p",
        "Windows 8.1",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_9_Windows_8_1: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 9 on Windows 8.1",
        "-b",
        "firefox",
        "-v",
        "9",
        "--vi",
        "public",
        "-p",
        "Windows 8.1",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_10_Windows_8_1: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 10 on Windows 8.1",
        "-b",
        "firefox",
        "-v",
        "10",
        "--vi",
        "public",
        "-p",
        "Windows 8.1",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_11_Windows_8_1: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 11 on Windows 8.1",
        "-b",
        "firefox",
        "-v",
        "11",
        "--vi",
        "public",
        "-p",
        "Windows 8.1",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_12_Windows_8_1: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 12 on Windows 8.1",
        "-b",
        "firefox",
        "-v",
        "12",
        "--vi",
        "public",
        "-p",
        "Windows 8.1",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_13_Windows_8_1: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 13 on Windows 8.1",
        "-b",
        "firefox",
        "-v",
        "13",
        "--vi",
        "public",
        "-p",
        "Windows 8.1",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_14_Windows_8_1: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 14 on Windows 8.1",
        "-b",
        "firefox",
        "-v",
        "14",
        "--vi",
        "public",
        "-p",
        "Windows 8.1",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_15_Windows_8_1: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 15 on Windows 8.1",
        "-b",
        "firefox",
        "-v",
        "15",
        "--vi",
        "public",
        "-p",
        "Windows 8.1",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_16_Windows_8_1: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 16 on Windows 8.1",
        "-b",
        "firefox",
        "-v",
        "16",
        "--vi",
        "public",
        "-p",
        "Windows 8.1",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_17_Windows_8_1: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 17 on Windows 8.1",
        "-b",
        "firefox",
        "-v",
        "17",
        "--vi",
        "public",
        "-p",
        "Windows 8.1",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_18_Windows_8_1: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 18 on Windows 8.1",
        "-b",
        "firefox",
        "-v",
        "18",
        "--vi",
        "public",
        "-p",
        "Windows 8.1",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_19_Windows_8_1: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 19 on Windows 8.1",
        "-b",
        "firefox",
        "-v",
        "19",
        "--vi",
        "public",
        "-p",
        "Windows 8.1",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_20_Windows_8_1: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 20 on Windows 8.1",
        "-b",
        "firefox",
        "-v",
        "20",
        "--vi",
        "public",
        "-p",
        "Windows 8.1",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_21_0b1_Windows_8_1: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "firefox 21.0b1 on Windows 8.1",
        "-b",
        "firefox",
        "-v",
        "21.0b1",
        "--vi",
        "public",
        "-p",
        "Windows 8.1",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_22_Windows_8_1: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 22 on Windows 8.1",
        "-b",
        "firefox",
        "-v",
        "22",
        "--vi",
        "public",
        "-p",
        "Windows 8.1",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_23_Windows_8_1: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 23 on Windows 8.1",
        "-b",
        "firefox",
        "-v",
        "23",
        "--vi",
        "public",
        "-p",
        "Windows 8.1",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_24_Windows_8_1: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 24 on Windows 8.1",
        "-b",
        "firefox",
        "-v",
        "24",
        "--vi",
        "public",
        "-p",
        "Windows 8.1",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_25_0b2_Windows_8_1: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "firefox 25.0b2 on Windows 8.1",
        "-b",
        "firefox",
        "-v",
        "25.0b2",
        "--vi",
        "public",
        "-p",
        "Windows 8.1",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_26_Windows_8_1: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 26 on Windows 8.1",
        "-b",
        "firefox",
        "-v",
        "26",
        "--vi",
        "public",
        "-p",
        "Windows 8.1",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_27_Windows_8_1: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 27 on Windows 8.1",
        "-b",
        "firefox",
        "-v",
        "27",
        "--vi",
        "public",
        "-p",
        "Windows 8.1",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_28_Windows_8_1: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 28 on Windows 8.1",
        "-b",
        "firefox",
        "-v",
        "28",
        "--vi",
        "public",
        "-p",
        "Windows 8.1",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_29_Windows_8_1: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 29 on Windows 8.1",
        "-b",
        "firefox",
        "-v",
        "29",
        "--vi",
        "public",
        "-p",
        "Windows 8.1",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_30_Windows_8_1: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 30 on Windows 8.1",
        "-b",
        "firefox",
        "-v",
        "30",
        "--vi",
        "public",
        "-p",
        "Windows 8.1",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_31_Windows_8_1: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 31 on Windows 8.1",
        "-b",
        "firefox",
        "-v",
        "31",
        "--vi",
        "public",
        "-p",
        "Windows 8.1",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_32_Windows_8_1: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 32 on Windows 8.1",
        "-b",
        "firefox",
        "-v",
        "32",
        "--vi",
        "public",
        "-p",
        "Windows 8.1",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_33_Windows_8_1: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 33 on Windows 8.1",
        "-b",
        "firefox",
        "-v",
        "33",
        "--vi",
        "public",
        "-p",
        "Windows 8.1",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_34_Windows_8_1: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 34 on Windows 8.1",
        "-b",
        "firefox",
        "-v",
        "34",
        "--vi",
        "public",
        "-p",
        "Windows 8.1",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_35_Windows_8_1: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 35 on Windows 8.1",
        "-b",
        "firefox",
        "-v",
        "35",
        "--vi",
        "public",
        "-p",
        "Windows 8.1",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_36_Windows_8_1: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 36 on Windows 8.1",
        "-b",
        "firefox",
        "-v",
        "36",
        "--vi",
        "public",
        "-p",
        "Windows 8.1",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_37_Windows_8_1: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 37 on Windows 8.1",
        "-b",
        "firefox",
        "-v",
        "37",
        "--vi",
        "public",
        "-p",
        "Windows 8.1",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_38_Windows_8_1: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 38 on Windows 8.1",
        "-b",
        "firefox",
        "-v",
        "38",
        "--vi",
        "public",
        "-p",
        "Windows 8.1",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_39_Windows_8_1: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 39 on Windows 8.1",
        "-b",
        "firefox",
        "-v",
        "39",
        "--vi",
        "public",
        "-p",
        "Windows 8.1",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_40_Windows_8_1: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 40 on Windows 8.1",
        "-b",
        "firefox",
        "-v",
        "40",
        "--vi",
        "public",
        "-p",
        "Windows 8.1",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_41_Windows_8_1: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 41 on Windows 8.1",
        "-b",
        "firefox",
        "-v",
        "41",
        "--vi",
        "public",
        "-p",
        "Windows 8.1",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_42_Windows_8_1: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 42 on Windows 8.1",
        "-b",
        "firefox",
        "-v",
        "42",
        "--vi",
        "public",
        "-p",
        "Windows 8.1",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },

    SL_firefox_public_43_Windows_8_1: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 43 on Windows 8.1",
        "-b",
        "firefox",
        "-v",
        "43",
        "--vi",
        "public",
        "-p",
        "Windows 8.1",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_44_Windows_8_1: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 44 on Windows 8.1",
        "-b",
        "firefox",
        "-v",
        "44",
        "--vi",
        "public",
        "-p",
        "Windows 8.1",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_45_Windows_8_1: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 45 on Windows 8.1",
        "-b",
        "firefox",
        "-v",
        "45",
        "--vi",
        "public",
        "-p",
        "Windows 8.1",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_46_Windows_8_1: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 46 on Windows 8.1",
        "-b",
        "firefox",
        "-v",
        "46",
        "--vi",
        "public",
        "-p",
        "Windows 8.1",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_47_Windows_8_1: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 47 on Windows 8.1",
        "-b",
        "firefox",
        "-v",
        "47",
        "--vi",
        "public",
        "-p",
        "Windows 8.1",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_48_Windows_8_1: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 48 on Windows 8.1",
        "-b",
        "firefox",
        "-v",
        "48",
        "--vi",
        "public",
        "-p",
        "Windows 8.1",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_49_Windows_8_1: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 49 on Windows 8.1",
        "-b",
        "firefox",
        "-v",
        "49",
        "--vi",
        "public",
        "-p",
        "Windows 8.1",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    // IE
  
    SL_internet_explorer_public_11_Windows_8_1: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Internet Explorer 11 on Windows 8.1",
        "-b",
        "internet explorer",
        "-v",
        "11",
        "--vi",
        "public",
        "-p",
        "Windows 8.1",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    // Windows 10
  
    // Chrome
  
    SL_chrome_public_dev_Windows_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome dev on Windows 10",
        "-b",
        "chrome",
        "-v",
        "dev",
        "--vi",
        "public",
        "-p",
        "Windows 10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_beta_Windows_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome beta on Windows 10",
        "-b",
        "chrome",
        "-v",
        "beta",
        "--vi",
        "public",
        "-p",
        "Windows 10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_26_Windows_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 26 on Windows 10",
        "-b",
        "chrome",
        "-v",
        "26",
        "--vi",
        "public",
        "-p",
        "Windows 10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_27_Windows_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 27 on Windows 10",
        "-b",
        "chrome",
        "-v",
        "27",
        "--vi",
        "public",
        "-p",
        "Windows 10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_28_Windows_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 28 on Windows 10",
        "-b",
        "chrome",
        "-v",
        "28",
        "--vi",
        "public",
        "-p",
        "Windows 10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_29_Windows_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 29 on Windows 10",
        "-b",
        "chrome",
        "-v",
        "29",
        "--vi",
        "public",
        "-p",
        "Windows 10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_30_Windows_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 30 on Windows 10",
        "-b",
        "chrome",
        "-v",
        "30",
        "--vi",
        "public",
        "-p",
        "Windows 10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_31_Windows_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 31 on Windows 10",
        "-b",
        "chrome",
        "-v",
        "31",
        "--vi",
        "public",
        "-p",
        "Windows 10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_32_Windows_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 32 on Windows 10",
        "-b",
        "chrome",
        "-v",
        "32",
        "--vi",
        "public",
        "-p",
        "Windows 10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_33_Windows_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 33 on Windows 10",
        "-b",
        "chrome",
        "-v",
        "33",
        "--vi",
        "public",
        "-p",
        "Windows 10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_34_Windows_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 34 on Windows 10",
        "-b",
        "chrome",
        "-v",
        "34",
        "--vi",
        "public",
        "-p",
        "Windows 10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_35_Windows_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 35 on Windows 10",
        "-b",
        "chrome",
        "-v",
        "35",
        "--vi",
        "public",
        "-p",
        "Windows 10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_36_Windows_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 36 on Windows 10",
        "-b",
        "chrome",
        "-v",
        "36",
        "--vi",
        "public",
        "-p",
        "Windows 10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_37_Windows_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 37 on Windows 10",
        "-b",
        "chrome",
        "-v",
        "37",
        "--vi",
        "public",
        "-p",
        "Windows 10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_38_Windows_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 38 on Windows 10",
        "-b",
        "chrome",
        "-v",
        "38",
        "--vi",
        "public",
        "-p",
        "Windows 10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_39_Windows_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 39 on Windows 10",
        "-b",
        "chrome",
        "-v",
        "39",
        "--vi",
        "public",
        "-p",
        "Windows 10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_40_Windows_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 40 on Windows 10",
        "-b",
        "chrome",
        "-v",
        "40",
        "--vi",
        "public",
        "-p",
        "Windows 10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_41_Windows_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 41 on Windows 10",
        "-b",
        "chrome",
        "-v",
        "41",
        "--vi",
        "public",
        "-p",
        "Windows 10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_42_Windows_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 42 on Windows 10",
        "-b",
        "chrome",
        "-v",
        "42",
        "--vi",
        "public",
        "-p",
        "Windows 10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_43_Windows_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 43 on Windows 10",
        "-b",
        "chrome",
        "-v",
        "43",
        "--vi",
        "public",
        "-p",
        "Windows 10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_44_Windows_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 44 on Windows 10",
        "-b",
        "chrome",
        "-v",
        "44",
        "--vi",
        "public",
        "-p",
        "Windows 10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_45_Windows_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 45 on Windows 10",
        "-b",
        "chrome",
        "-v",
        "45",
        "--vi",
        "public",
        "-p",
        "Windows 10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_46_Windows_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 46 on Windows 10",
        "-b",
        "chrome",
        "-v",
        "46",
        "--vi",
        "public",
        "-p",
        "Windows 10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_47_Windows_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 47 on Windows 10",
        "-b",
        "chrome",
        "-v",
        "47",
        "--vi",
        "public",
        "-p",
        "Windows 10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_48_Windows_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 48 on Windows 10",
        "-b",
        "chrome",
        "-v",
        "48",
        "--vi",
        "public",
        "-p",
        "Windows 10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_49_Windows_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 49 on Windows 10",
        "-b",
        "chrome",
        "-v",
        "49",
        "--vi",
        "public",
        "-p",
        "Windows 10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_50_Windows_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 50 on Windows 10",
        "-b",
        "chrome",
        "-v",
        "50",
        "--vi",
        "public",
        "-p",
        "Windows 10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_51_Windows_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 51 on Windows 10",
        "-b",
        "chrome",
        "-v",
        "51",
        "--vi",
        "public",
        "-p",
        "Windows 10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_52_Windows_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 52 on Windows 10",
        "-b",
        "chrome",
        "-v",
        "52",
        "--vi",
        "public",
        "-p",
        "Windows 10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_53_Windows_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 53 on Windows 10",
        "-b",
        "chrome",
        "-v",
        "53",
        "--vi",
        "public",
        "-p",
        "Windows 10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_54_Windows_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 54 on Windows 10",
        "-b",
        "chrome",
        "-v",
        "54",
        "--vi",
        "public",
        "-p",
        "Windows 10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    // Firefox
  
    SL_firefox_public_dev_Windows_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox dev on Windows 10",
        "-b",
        "firefox",
        "-v",
        "dev",
        "--vi",
        "public",
        "-p",
        "Windows 10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_beta_Windows_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox beta on Windows 10",
        "-b",
        "firefox",
        "-v",
        "beta",
        "--vi",
        "public",
        "-p",
        "Windows 10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_4_Windows_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 4 on Windows 10",
        "-b",
        "firefox",
        "-v",
        "4",
        "--vi",
        "public",
        "-p",
        "Windows 10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_5_Windows_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 5 on Windows 10",
        "-b",
        "firefox",
        "-v",
        "5",
        "--vi",
        "public",
        "-p",
        "Windows 10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_6_Windows_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 6 on Windows 10",
        "-b",
        "firefox",
        "-v",
        "6",
        "--vi",
        "public",
        "-p",
        "Windows 10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_7_Windows_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 7 on Windows 10",
        "-b",
        "firefox",
        "-v",
        "7",
        "--vi",
        "public",
        "-p",
        "Windows 10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_8_Windows_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 8 on Windows 10",
        "-b",
        "firefox",
        "-v",
        "8",
        "--vi",
        "public",
        "-p",
        "Windows 10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_9_Windows_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 9 on Windows 10",
        "-b",
        "firefox",
        "-v",
        "9",
        "--vi",
        "public",
        "-p",
        "Windows 10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_10_Windows_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 10 on Windows 10",
        "-b",
        "firefox",
        "-v",
        "10",
        "--vi",
        "public",
        "-p",
        "Windows 10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_11_Windows_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 11 on Windows 10",
        "-b",
        "firefox",
        "-v",
        "11",
        "--vi",
        "public",
        "-p",
        "Windows 10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_12_Windows_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 12 on Windows 10",
        "-b",
        "firefox",
        "-v",
        "12",
        "--vi",
        "public",
        "-p",
        "Windows 10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_13_Windows_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 13 on Windows 10",
        "-b",
        "firefox",
        "-v",
        "13",
        "--vi",
        "public",
        "-p",
        "Windows 10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_14_Windows_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 14 on Windows 10",
        "-b",
        "firefox",
        "-v",
        "14",
        "--vi",
        "public",
        "-p",
        "Windows 10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_15_Windows_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 15 on Windows 10",
        "-b",
        "firefox",
        "-v",
        "15",
        "--vi",
        "public",
        "-p",
        "Windows 10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_16_Windows_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 16 on Windows 10",
        "-b",
        "firefox",
        "-v",
        "16",
        "--vi",
        "public",
        "-p",
        "Windows 10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_17_Windows_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 17 on Windows 10",
        "-b",
        "firefox",
        "-v",
        "17",
        "--vi",
        "public",
        "-p",
        "Windows 10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_18_Windows_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 18 on Windows 10",
        "-b",
        "firefox",
        "-v",
        "18",
        "--vi",
        "public",
        "-p",
        "Windows 10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_19_Windows_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 19 on Windows 10",
        "-b",
        "firefox",
        "-v",
        "19",
        "--vi",
        "public",
        "-p",
        "Windows 10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_20_Windows_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 20 on Windows 10",
        "-b",
        "firefox",
        "-v",
        "20",
        "--vi",
        "public",
        "-p",
        "Windows 10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_21_0b1_Windows_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "firefox 21.0b1 on Windows 10",
        "-b",
        "firefox",
        "-v",
        "21.0b1",
        "--vi",
        "public",
        "-p",
        "Windows 10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_22_Windows_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 22 on Windows 10",
        "-b",
        "firefox",
        "-v",
        "22",
        "--vi",
        "public",
        "-p",
        "Windows 10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_23_Windows_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 23 on Windows 10",
        "-b",
        "firefox",
        "-v",
        "23",
        "--vi",
        "public",
        "-p",
        "Windows 10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_24_Windows_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 24 on Windows 10",
        "-b",
        "firefox",
        "-v",
        "24",
        "--vi",
        "public",
        "-p",
        "Windows 10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_25_0b2_Windows_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "firefox 25.0b2 on Windows 10",
        "-b",
        "firefox",
        "-v",
        "25.0b2",
        "--vi",
        "public",
        "-p",
        "Windows 10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_26_Windows_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 26 on Windows 10",
        "-b",
        "firefox",
        "-v",
        "26",
        "--vi",
        "public",
        "-p",
        "Windows 10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_27_Windows_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 27 on Windows 10",
        "-b",
        "firefox",
        "-v",
        "27",
        "--vi",
        "public",
        "-p",
        "Windows 10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_28_Windows_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 28 on Windows 10",
        "-b",
        "firefox",
        "-v",
        "28",
        "--vi",
        "public",
        "-p",
        "Windows 10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_29_Windows_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 29 on Windows 10",
        "-b",
        "firefox",
        "-v",
        "29",
        "--vi",
        "public",
        "-p",
        "Windows 10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_30_Windows_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 30 on Windows 10",
        "-b",
        "firefox",
        "-v",
        "30",
        "--vi",
        "public",
        "-p",
        "Windows 10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_31_Windows_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 31 on Windows 10",
        "-b",
        "firefox",
        "-v",
        "31",
        "--vi",
        "public",
        "-p",
        "Windows 10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_32_Windows_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 32 on Windows 10",
        "-b",
        "firefox",
        "-v",
        "32",
        "--vi",
        "public",
        "-p",
        "Windows 10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_33_Windows_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 33 on Windows 10",
        "-b",
        "firefox",
        "-v",
        "33",
        "--vi",
        "public",
        "-p",
        "Windows 10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_34_Windows_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 34 on Windows 10",
        "-b",
        "firefox",
        "-v",
        "34",
        "--vi",
        "public",
        "-p",
        "Windows 10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_35_Windows_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 35 on Windows 10",
        "-b",
        "firefox",
        "-v",
        "35",
        "--vi",
        "public",
        "-p",
        "Windows 10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_36_Windows_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 36 on Windows 10",
        "-b",
        "firefox",
        "-v",
        "36",
        "--vi",
        "public",
        "-p",
        "Windows 10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_37_Windows_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 37 on Windows 10",
        "-b",
        "firefox",
        "-v",
        "37",
        "--vi",
        "public",
        "-p",
        "Windows 10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_38_Windows_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 38 on Windows 10",
        "-b",
        "firefox",
        "-v",
        "38",
        "--vi",
        "public",
        "-p",
        "Windows 10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_39_Windows_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 39 on Windows 10",
        "-b",
        "firefox",
        "-v",
        "39",
        "--vi",
        "public",
        "-p",
        "Windows 10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_40_Windows_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 40 on Windows 10",
        "-b",
        "firefox",
        "-v",
        "40",
        "--vi",
        "public",
        "-p",
        "Windows 10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_41_Windows_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 41 on Windows 10",
        "-b",
        "firefox",
        "-v",
        "41",
        "--vi",
        "public",
        "-p",
        "Windows 10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_42_Windows_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 42 on Windows 10",
        "-b",
        "firefox",
        "-v",
        "42",
        "--vi",
        "public",
        "-p",
        "Windows 10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_43_Windows_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 43 on Windows 10",
        "-b",
        "firefox",
        "-v",
        "43",
        "--vi",
        "public",
        "-p",
        "Windows 10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_44_Windows_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 44 on Windows 10",
        "-b",
        "firefox",
        "-v",
        "44",
        "--vi",
        "public",
        "-p",
        "Windows 10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_45_Windows_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 45 on Windows 10",
        "-b",
        "firefox",
        "-v",
        "45",
        "--vi",
        "public",
        "-p",
        "Windows 10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_46_Windows_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 46 on Windows 10",
        "-b",
        "firefox",
        "-v",
        "46",
        "--vi",
        "public",
        "-p",
        "Windows 10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_47_Windows_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 47 on Windows 10",
        "-b",
        "firefox",
        "-v",
        "47",
        "--vi",
        "public",
        "-p",
        "Windows 10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_48_Windows_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 48 on Windows 10",
        "-b",
        "firefox",
        "-v",
        "48",
        "--vi",
        "public",
        "-p",
        "Windows 10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_49_Windows_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 49 on Windows 10",
        "-b",
        "firefox",
        "-v",
        "49",
        "--vi",
        "public",
        "-p",
        "Windows 10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    // IE
  
    SL_internet_explorer_public_11_103_Windows_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "internet explorer 11.103 on Windows 10",
        "-b",
        "internet explorer",
        "-v",
        "11.103",
        "--vi",
        "public",
        "-p",
        "Windows 10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    // Edge
  
    SL_MicrosoftEdge_public_13_10586_Windows_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Microsoft Edge 13.10586 on Windows 10",
        "-b",
        "MicrosoftEdge",
        "-v",
        "13.10586",
        "--vi",
        "public",
        "-p",
        "Windows 10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_MicrosoftEdge_public_14_14393_Windows_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Microsoft Edge 14.14393 on Windows 10",
        "-b",
        "MicrosoftEdge",
        "-v",
        "14.14393",
        "--vi",
        "public",
        "-p",
        "Windows 10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    // OS X Mountain Lion (10.8)
  
    // Chrome
  
    SL_chrome_public_27_OS_X_10_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 27 on OS X 10.8",
        "-b",
        "chrome",
        "-v",
        "27",
        "--vi",
        "public",
        "-p",
        "OS X 10.8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_28_OS_X_10_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 28 on OS X 10.8",
        "-b",
        "chrome",
        "-v",
        "28",
        "--vi",
        "public",
        "-p",
        "OS X 10.8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_29_OS_X_10_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 29 on OS X 10.8",
        "-b",
        "chrome",
        "-v",
        "29",
        "--vi",
        "public",
        "-p",
        "OS X 10.8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_30_OS_X_10_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 30 on OS X 10.8",
        "-b",
        "chrome",
        "-v",
        "30",
        "--vi",
        "public",
        "-p",
        "OS X 10.8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_31_OS_X_10_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 31 on OS X 10.8",
        "-b",
        "chrome",
        "-v",
        "31",
        "--vi",
        "public",
        "-p",
        "OS X 10.8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_32_OS_X_10_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 32 on OS X 10.8",
        "-b",
        "chrome",
        "-v",
        "32",
        "--vi",
        "public",
        "-p",
        "OS X 10.8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_33_OS_X_10_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 33 on OS X 10.8",
        "-b",
        "chrome",
        "-v",
        "33",
        "--vi",
        "public",
        "-p",
        "OS X 10.8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_34_OS_X_10_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 34 on OS X 10.8",
        "-b",
        "chrome",
        "-v",
        "34",
        "--vi",
        "public",
        "-p",
        "OS X 10.8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_35_OS_X_10_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 35 on OS X 10.8",
        "-b",
        "chrome",
        "-v",
        "35",
        "--vi",
        "public",
        "-p",
        "OS X 10.8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_36_OS_X_10_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 36 on OS X 10.8",
        "-b",
        "chrome",
        "-v",
        "36",
        "--vi",
        "public",
        "-p",
        "OS X 10.8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_37_OS_X_10_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 37 on OS X 10.8",
        "-b",
        "chrome",
        "-v",
        "37",
        "--vi",
        "public",
        "-p",
        "OS X 10.8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_38_OS_X_10_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 38 on OS X 10.8",
        "-b",
        "chrome",
        "-v",
        "38",
        "--vi",
        "public",
        "-p",
        "OS X 10.8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_39_OS_X_10_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 39 on OS X 10.8",
        "-b",
        "chrome",
        "-v",
        "39",
        "--vi",
        "public",
        "-p",
        "OS X 10.8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_40_OS_X_10_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 40 on OS X 10.8",
        "-b",
        "chrome",
        "-v",
        "40",
        "--vi",
        "public",
        "-p",
        "OS X 10.8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_41_OS_X_10_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 41 on OS X 10.8",
        "-b",
        "chrome",
        "-v",
        "41",
        "--vi",
        "public",
        "-p",
        "OS X 10.8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_42_OS_X_10_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 42 on OS X 10.8",
        "-b",
        "chrome",
        "-v",
        "42",
        "--vi",
        "public",
        "-p",
        "OS X 10.8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_43_OS_X_10_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 43 on OS X 10.8",
        "-b",
        "chrome",
        "-v",
        "43",
        "--vi",
        "public",
        "-p",
        "OS X 10.8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_44_OS_X_10_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 44 on OS X 10.8",
        "-b",
        "chrome",
        "-v",
        "44",
        "--vi",
        "public",
        "-p",
        "OS X 10.8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_45_OS_X_10_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 45 on OS X 10.8",
        "-b",
        "chrome",
        "-v",
        "45",
        "--vi",
        "public",
        "-p",
        "OS X 10.8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_46_OS_X_10_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 46 on OS X 10.8",
        "-b",
        "chrome",
        "-v",
        "46",
        "--vi",
        "public",
        "-p",
        "OS X 10.8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_47_OS_X_10_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 47 on OS X 10.8",
        "-b",
        "chrome",
        "-v",
        "47",
        "--vi",
        "public",
        "-p",
        "OS X 10.8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_48_OS_X_10_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 48 on OS X 10.8",
        "-b",
        "chrome",
        "-v",
        "48",
        "--vi",
        "public",
        "-p",
        "OS X 10.8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_49_OS_X_10_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 49 on OS X 10.8",
        "-b",
        "chrome",
        "-v",
        "49",
        "--vi",
        "public",
        "-p",
        "OS X 10.8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    // Safari
  
    SL_safari_public_6_OS_X_10_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Safari 6 on OS X 10.8",
        "-b",
        "safari",
        "-v",
        "6",
        "--vi",
        "public",
        "-p",
        "OS X 10.8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    // Firefox
  
    SL_firefox_public_dev_OS_X_10_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox dev on OS X 10.8",
        "-b",
        "firefox",
        "-v",
        "dev",
        "--vi",
        "public",
        "-p",
        "OS X 10.8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_beta_OS_X_10_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox beta on OS X 10.8",
        "-b",
        "firefox",
        "-v",
        "beta",
        "--vi",
        "public",
        "-p",
        "OS X 10.8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_4_OS_X_10_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 4 on OS X 10.8",
        "-b",
        "firefox",
        "-v",
        "4",
        "--vi",
        "public",
        "-p",
        "OS X 10.8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_5_OS_X_10_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 5 on OS X 10.8",
        "-b",
        "firefox",
        "-v",
        "5",
        "--vi",
        "public",
        "-p",
        "OS X 10.8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_6_OS_X_10_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 6 on OS X 10.8",
        "-b",
        "firefox",
        "-v",
        "6",
        "--vi",
        "public",
        "-p",
        "OS X 10.8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_7_OS_X_10_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 7 on OS X 10.8",
        "-b",
        "firefox",
        "-v",
        "7",
        "--vi",
        "public",
        "-p",
        "OS X 10.8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_8_OS_X_10_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 8 on OS X 10.8",
        "-b",
        "firefox",
        "-v",
        "8",
        "--vi",
        "public",
        "-p",
        "OS X 10.8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_9_OS_X_10_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 9 on OS X 10.8",
        "-b",
        "firefox",
        "-v",
        "9",
        "--vi",
        "public",
        "-p",
        "OS X 10.8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_10_OS_X_10_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 10 on OS X 10.8",
        "-b",
        "firefox",
        "-v",
        "10",
        "--vi",
        "public",
        "-p",
        "OS X 10.8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_11_OS_X_10_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 11 on OS X 10.8",
        "-b",
        "firefox",
        "-v",
        "11",
        "--vi",
        "public",
        "-p",
        "OS X 10.8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_12_OS_X_10_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 12 on OS X 10.8",
        "-b",
        "firefox",
        "-v",
        "12",
        "--vi",
        "public",
        "-p",
        "OS X 10.8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_13_OS_X_10_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 13 on OS X 10.8",
        "-b",
        "firefox",
        "-v",
        "13",
        "--vi",
        "public",
        "-p",
        "OS X 10.8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_14_OS_X_10_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 14 on OS X 10.8",
        "-b",
        "firefox",
        "-v",
        "14",
        "--vi",
        "public",
        "-p",
        "OS X 10.8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_15_OS_X_10_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 15 on OS X 10.8",
        "-b",
        "firefox",
        "-v",
        "15",
        "--vi",
        "public",
        "-p",
        "OS X 10.8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_16_OS_X_10_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 16 on OS X 10.8",
        "-b",
        "firefox",
        "-v",
        "16",
        "--vi",
        "public",
        "-p",
        "OS X 10.8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_17_OS_X_10_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 17 on OS X 10.8",
        "-b",
        "firefox",
        "-v",
        "17",
        "--vi",
        "public",
        "-p",
        "OS X 10.8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_18_OS_X_10_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 18 on OS X 10.8",
        "-b",
        "firefox",
        "-v",
        "18",
        "--vi",
        "public",
        "-p",
        "OS X 10.8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_19_OS_X_10_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 19 on OS X 10.8",
        "-b",
        "firefox",
        "-v",
        "19",
        "--vi",
        "public",
        "-p",
        "OS X 10.8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_20_OS_X_10_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 20 on OS X 10.8",
        "-b",
        "firefox",
        "-v",
        "20",
        "--vi",
        "public",
        "-p",
        "OS X 10.8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_21_OS_X_10_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 21 on OS X 10.8",
        "-b",
        "firefox",
        "-v",
        "21",
        "--vi",
        "public",
        "-p",
        "OS X 10.8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_22_OS_X_10_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 22 on OS X 10.8",
        "-b",
        "firefox",
        "-v",
        "22",
        "--vi",
        "public",
        "-p",
        "OS X 10.8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_23_OS_X_10_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 23 on OS X 10.8",
        "-b",
        "firefox",
        "-v",
        "23",
        "--vi",
        "public",
        "-p",
        "OS X 10.8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_24_OS_X_10_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 24 on OS X 10.8",
        "-b",
        "firefox",
        "-v",
        "24",
        "--vi",
        "public",
        "-p",
        "OS X 10.8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_25_OS_X_10_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 25 on OS X 10.8",
        "-b",
        "firefox",
        "-v",
        "25",
        "--vi",
        "public",
        "-p",
        "OS X 10.8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_26_OS_X_10_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 26 on OS X 10.8",
        "-b",
        "firefox",
        "-v",
        "26",
        "--vi",
        "public",
        "-p",
        "OS X 10.8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_27_OS_X_10_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 27 on OS X 10.8",
        "-b",
        "firefox",
        "-v",
        "27",
        "--vi",
        "public",
        "-p",
        "OS X 10.8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_28_OS_X_10_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 28 on OS X 10.8",
        "-b",
        "firefox",
        "-v",
        "28",
        "--vi",
        "public",
        "-p",
        "OS X 10.8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_29_OS_X_10_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 29 on OS X 10.8",
        "-b",
        "firefox",
        "-v",
        "29",
        "--vi",
        "public",
        "-p",
        "OS X 10.8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_30_OS_X_10_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 30 on OS X 10.8",
        "-b",
        "firefox",
        "-v",
        "30",
        "--vi",
        "public",
        "-p",
        "OS X 10.8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_31_OS_X_10_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 31 on OS X 10.8",
        "-b",
        "firefox",
        "-v",
        "31",
        "--vi",
        "public",
        "-p",
        "OS X 10.8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_32_OS_X_10_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 32 on OS X 10.8",
        "-b",
        "firefox",
        "-v",
        "32",
        "--vi",
        "public",
        "-p",
        "OS X 10.8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_33_OS_X_10_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 33 on OS X 10.8",
        "-b",
        "firefox",
        "-v",
        "33",
        "--vi",
        "public",
        "-p",
        "OS X 10.8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_34_OS_X_10_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 34 on OS X 10.8",
        "-b",
        "firefox",
        "-v",
        "34",
        "--vi",
        "public",
        "-p",
        "OS X 10.8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_35_OS_X_10_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 35 on OS X 10.8",
        "-b",
        "firefox",
        "-v",
        "35",
        "--vi",
        "public",
        "-p",
        "OS X 10.8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_36_OS_X_10_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 36 on OS X 10.8",
        "-b",
        "firefox",
        "-v",
        "36",
        "--vi",
        "public",
        "-p",
        "OS X 10.8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_37_OS_X_10_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 37 on OS X 10.8",
        "-b",
        "firefox",
        "-v",
        "37",
        "--vi",
        "public",
        "-p",
        "OS X 10.8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_38_OS_X_10_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 38 on OS X 10.8",
        "-b",
        "firefox",
        "-v",
        "38",
        "--vi",
        "public",
        "-p",
        "OS X 10.8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_39_OS_X_10_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 39 on OS X 10.8",
        "-b",
        "firefox",
        "-v",
        "39",
        "--vi",
        "public",
        "-p",
        "OS X 10.8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_40_OS_X_10_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 40 on OS X 10.8",
        "-b",
        "firefox",
        "-v",
        "40",
        "--vi",
        "public",
        "-p",
        "OS X 10.8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_41_OS_X_10_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 41 on OS X 10.8",
        "-b",
        "firefox",
        "-v",
        "41",
        "--vi",
        "public",
        "-p",
        "OS X 10.8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_42_OS_X_10_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 42 on OS X 10.8",
        "-b",
        "firefox",
        "-v",
        "42",
        "--vi",
        "public",
        "-p",
        "OS X 10.8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_43_OS_X_10_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 43 on OS X 10.8",
        "-b",
        "firefox",
        "-v",
        "43",
        "--vi",
        "public",
        "-p",
        "OS X 10.8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_44_OS_X_10_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 44 on OS X 10.8",
        "-b",
        "firefox",
        "-v",
        "44",
        "--vi",
        "public",
        "-p",
        "OS X 10.8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_45_OS_X_10_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 45 on OS X 10.8",
        "-b",
        "firefox",
        "-v",
        "45",
        "--vi",
        "public",
        "-p",
        "OS X 10.8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_46_OS_X_10_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 46 on OS X 10.8",
        "-b",
        "firefox",
        "-v",
        "46",
        "--vi",
        "public",
        "-p",
        "OS X 10.8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_47_OS_X_10_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 47 on OS X 10.8",
        "-b",
        "firefox",
        "-v",
        "47",
        "--vi",
        "public",
        "-p",
        "OS X 10.8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_48_OS_X_10_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 48 on OS X 10.8",
        "-b",
        "firefox",
        "-v",
        "48",
        "--vi",
        "public",
        "-p",
        "OS X 10.8",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    // OS X Mavericks (10.9)
  
    // Chrome
  
    SL_chrome_public_dev_OS_X_10_9: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome dev on OS X 10.9",
        "-b",
        "chrome",
        "-v",
        "dev",
        "--vi",
        "public",
        "-p",
        "OS X 10.9",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_beta_OS_X_10_9: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome beta on OS X 10.9",
        "-b",
        "chrome",
        "-v",
        "beta",
        "--vi",
        "public",
        "-p",
        "OS X 10.9",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_31_OS_X_10_9: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 31 on OS X 10.9",
        "-b",
        "chrome",
        "-v",
        "31",
        "--vi",
        "public",
        "-p",
        "OS X 10.9",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_32_OS_X_10_9: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 32 on OS X 10.9",
        "-b",
        "chrome",
        "-v",
        "32",
        "--vi",
        "public",
        "-p",
        "OS X 10.9",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_33_OS_X_10_9: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 33 on OS X 10.9",
        "-b",
        "chrome",
        "-v",
        "33",
        "--vi",
        "public",
        "-p",
        "OS X 10.9",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_34_OS_X_10_9: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 34 on OS X 10.9",
        "-b",
        "chrome",
        "-v",
        "34",
        "--vi",
        "public",
        "-p",
        "OS X 10.9",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_35_OS_X_10_9: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 35 on OS X 10.9",
        "-b",
        "chrome",
        "-v",
        "35",
        "--vi",
        "public",
        "-p",
        "OS X 10.9",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_36_OS_X_10_9: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 36 on OS X 10.9",
        "-b",
        "chrome",
        "-v",
        "36",
        "--vi",
        "public",
        "-p",
        "OS X 10.9",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_37_OS_X_10_9: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 37 on OS X 10.9",
        "-b",
        "chrome",
        "-v",
        "37",
        "--vi",
        "public",
        "-p",
        "OS X 10.9",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_38_OS_X_10_9: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 38 on OS X 10.9",
        "-b",
        "chrome",
        "-v",
        "38",
        "--vi",
        "public",
        "-p",
        "OS X 10.9",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_39_OS_X_10_9: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 39 on OS X 10.9",
        "-b",
        "chrome",
        "-v",
        "39",
        "--vi",
        "public",
        "-p",
        "OS X 10.9",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_40_OS_X_10_9: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 40 on OS X 10.9",
        "-b",
        "chrome",
        "-v",
        "40",
        "--vi",
        "public",
        "-p",
        "OS X 10.9",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_41_OS_X_10_9: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 41 on OS X 10.9",
        "-b",
        "chrome",
        "-v",
        "41",
        "--vi",
        "public",
        "-p",
        "OS X 10.9",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_42_OS_X_10_9: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 42 on OS X 10.9",
        "-b",
        "chrome",
        "-v",
        "42",
        "--vi",
        "public",
        "-p",
        "OS X 10.9",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_43_OS_X_10_9: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 43 on OS X 10.9",
        "-b",
        "chrome",
        "-v",
        "43",
        "--vi",
        "public",
        "-p",
        "OS X 10.9",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_44_OS_X_10_9: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 44 on OS X 10.9",
        "-b",
        "chrome",
        "-v",
        "44",
        "--vi",
        "public",
        "-p",
        "OS X 10.9",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_45_OS_X_10_9: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 45 on OS X 10.9",
        "-b",
        "chrome",
        "-v",
        "45",
        "--vi",
        "public",
        "-p",
        "OS X 10.9",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_46_OS_X_10_9: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 46 on OS X 10.9",
        "-b",
        "chrome",
        "-v",
        "46",
        "--vi",
        "public",
        "-p",
        "OS X 10.9",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_47_OS_X_10_9: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 47 on OS X 10.9",
        "-b",
        "chrome",
        "-v",
        "47",
        "--vi",
        "public",
        "-p",
        "OS X 10.9",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_48_OS_X_10_9: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 48 on OS X 10.9",
        "-b",
        "chrome",
        "-v",
        "48",
        "--vi",
        "public",
        "-p",
        "OS X 10.9",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_49_OS_X_10_9: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 49 on OS X 10.9",
        "-b",
        "chrome",
        "-v",
        "49",
        "--vi",
        "public",
        "-p",
        "OS X 10.9",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_50_OS_X_10_9: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 50 on OS X 10.9",
        "-b",
        "chrome",
        "-v",
        "50",
        "--vi",
        "public",
        "-p",
        "OS X 10.9",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_51_OS_X_10_9: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 51 on OS X 10.9",
        "-b",
        "chrome",
        "-v",
        "51",
        "--vi",
        "public",
        "-p",
        "OS X 10.9",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_52_OS_X_10_9: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 52 on OS X 10.9",
        "-b",
        "chrome",
        "-v",
        "52",
        "--vi",
        "public",
        "-p",
        "OS X 10.9",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_53_OS_X_10_9: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 53 on OS X 10.9",
        "-b",
        "chrome",
        "-v",
        "53",
        "--vi",
        "public",
        "-p",
        "OS X 10.9",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_54_OS_X_10_9: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 54 on OS X 10.9",
        "-b",
        "chrome",
        "-v",
        "54",
        "--vi",
        "public",
        "-p",
        "OS X 10.9",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    // Safari
  
    SL_safari_public_7_OS_X_10_9: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Safari 7 on OS X 10.9",
        "-b",
        "safari",
        "-v",
        "7",
        "--vi",
        "public",
        "-p",
        "OS X 10.9",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    // Firefox
  
    SL_firefox_public_dev_OS_X_10_9: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox dev on OS X 10.9",
        "-b",
        "firefox",
        "-v",
        "dev",
        "--vi",
        "public",
        "-p",
        "OS X 10.9",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_beta_OS_X_10_9: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox beta on OS X 10.9",
        "-b",
        "firefox",
        "-v",
        "beta",
        "--vi",
        "public",
        "-p",
        "OS X 10.9",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_4_OS_X_10_9: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 4 on OS X 10.9",
        "-b",
        "firefox",
        "-v",
        "4",
        "--vi",
        "public",
        "-p",
        "OS X 10.9",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_5_OS_X_10_9: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 5 on OS X 10.9",
        "-b",
        "firefox",
        "-v",
        "5",
        "--vi",
        "public",
        "-p",
        "OS X 10.9",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_6_OS_X_10_9: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 6 on OS X 10.9",
        "-b",
        "firefox",
        "-v",
        "6",
        "--vi",
        "public",
        "-p",
        "OS X 10.9",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_7_OS_X_10_9: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 7 on OS X 10.9",
        "-b",
        "firefox",
        "-v",
        "7",
        "--vi",
        "public",
        "-p",
        "OS X 10.9",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_8_OS_X_10_9: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 8 on OS X 10.9",
        "-b",
        "firefox",
        "-v",
        "8",
        "--vi",
        "public",
        "-p",
        "OS X 10.9",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_9_OS_X_10_9: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 9 on OS X 10.9",
        "-b",
        "firefox",
        "-v",
        "9",
        "--vi",
        "public",
        "-p",
        "OS X 10.9",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_10_OS_X_10_9: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 10 on OS X 10.9",
        "-b",
        "firefox",
        "-v",
        "10",
        "--vi",
        "public",
        "-p",
        "OS X 10.9",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_11_OS_X_10_9: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 11 on OS X 10.9",
        "-b",
        "firefox",
        "-v",
        "11",
        "--vi",
        "public",
        "-p",
        "OS X 10.9",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_12_OS_X_10_9: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 12 on OS X 10.9",
        "-b",
        "firefox",
        "-v",
        "12",
        "--vi",
        "public",
        "-p",
        "OS X 10.9",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_13_OS_X_10_9: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 13 on OS X 10.9",
        "-b",
        "firefox",
        "-v",
        "13",
        "--vi",
        "public",
        "-p",
        "OS X 10.9",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_14_OS_X_10_9: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 14 on OS X 10.9",
        "-b",
        "firefox",
        "-v",
        "14",
        "--vi",
        "public",
        "-p",
        "OS X 10.9",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_15_OS_X_10_9: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 15 on OS X 10.9",
        "-b",
        "firefox",
        "-v",
        "15",
        "--vi",
        "public",
        "-p",
        "OS X 10.9",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_16_OS_X_10_9: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 16 on OS X 10.9",
        "-b",
        "firefox",
        "-v",
        "16",
        "--vi",
        "public",
        "-p",
        "OS X 10.9",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_17_OS_X_10_9: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 17 on OS X 10.9",
        "-b",
        "firefox",
        "-v",
        "17",
        "--vi",
        "public",
        "-p",
        "OS X 10.9",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_18_OS_X_10_9: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 18 on OS X 10.9",
        "-b",
        "firefox",
        "-v",
        "18",
        "--vi",
        "public",
        "-p",
        "OS X 10.9",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_19_OS_X_10_9: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 19 on OS X 10.9",
        "-b",
        "firefox",
        "-v",
        "19",
        "--vi",
        "public",
        "-p",
        "OS X 10.9",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_20_OS_X_10_9: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 20 on OS X 10.9",
        "-b",
        "firefox",
        "-v",
        "20",
        "--vi",
        "public",
        "-p",
        "OS X 10.9",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_21_OS_X_10_9: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 21 on OS X 10.9",
        "-b",
        "firefox",
        "-v",
        "21",
        "--vi",
        "public",
        "-p",
        "OS X 10.9",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_22_OS_X_10_9: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 22 on OS X 10.9",
        "-b",
        "firefox",
        "-v",
        "22",
        "--vi",
        "public",
        "-p",
        "OS X 10.9",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_23_OS_X_10_9: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 23 on OS X 10.9",
        "-b",
        "firefox",
        "-v",
        "23",
        "--vi",
        "public",
        "-p",
        "OS X 10.9",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_24_OS_X_10_9: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 24 on OS X 10.9",
        "-b",
        "firefox",
        "-v",
        "24",
        "--vi",
        "public",
        "-p",
        "OS X 10.9",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_25_OS_X_10_9: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 25 on OS X 10.9",
        "-b",
        "firefox",
        "-v",
        "25",
        "--vi",
        "public",
        "-p",
        "OS X 10.9",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_26_OS_X_10_9: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 26 on OS X 10.9",
        "-b",
        "firefox",
        "-v",
        "26",
        "--vi",
        "public",
        "-p",
        "OS X 10.9",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_27_OS_X_10_9: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 27 on OS X 10.9",
        "-b",
        "firefox",
        "-v",
        "27",
        "--vi",
        "public",
        "-p",
        "OS X 10.9",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_28_OS_X_10_9: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 28 on OS X 10.9",
        "-b",
        "firefox",
        "-v",
        "28",
        "--vi",
        "public",
        "-p",
        "OS X 10.9",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_29_OS_X_10_9: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 29 on OS X 10.9",
        "-b",
        "firefox",
        "-v",
        "29",
        "--vi",
        "public",
        "-p",
        "OS X 10.9",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_30_OS_X_10_9: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 30 on OS X 10.9",
        "-b",
        "firefox",
        "-v",
        "30",
        "--vi",
        "public",
        "-p",
        "OS X 10.9",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_31_OS_X_10_9: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 31 on OS X 10.9",
        "-b",
        "firefox",
        "-v",
        "31",
        "--vi",
        "public",
        "-p",
        "OS X 10.9",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_32_OS_X_10_9: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 32 on OS X 10.9",
        "-b",
        "firefox",
        "-v",
        "32",
        "--vi",
        "public",
        "-p",
        "OS X 10.9",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_33_OS_X_10_9: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 33 on OS X 10.9",
        "-b",
        "firefox",
        "-v",
        "33",
        "--vi",
        "public",
        "-p",
        "OS X 10.9",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_34_OS_X_10_9: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 34 on OS X 10.9",
        "-b",
        "firefox",
        "-v",
        "34",
        "--vi",
        "public",
        "-p",
        "OS X 10.9",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_35_OS_X_10_9: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 35 on OS X 10.9",
        "-b",
        "firefox",
        "-v",
        "35",
        "--vi",
        "public",
        "-p",
        "OS X 10.9",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_36_OS_X_10_9: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 36 on OS X 10.9",
        "-b",
        "firefox",
        "-v",
        "36",
        "--vi",
        "public",
        "-p",
        "OS X 10.9",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_37_OS_X_10_9: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 37 on OS X 10.9",
        "-b",
        "firefox",
        "-v",
        "37",
        "--vi",
        "public",
        "-p",
        "OS X 10.9",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_38_OS_X_10_9: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 38 on OS X 10.9",
        "-b",
        "firefox",
        "-v",
        "38",
        "--vi",
        "public",
        "-p",
        "OS X 10.9",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_39_OS_X_10_9: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 39 on OS X 10.9",
        "-b",
        "firefox",
        "-v",
        "39",
        "--vi",
        "public",
        "-p",
        "OS X 10.9",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_40_OS_X_10_9: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 40 on OS X 10.9",
        "-b",
        "firefox",
        "-v",
        "40",
        "--vi",
        "public",
        "-p",
        "OS X 10.9",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_41_OS_X_10_9: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 41 on OS X 10.9",
        "-b",
        "firefox",
        "-v",
        "41",
        "--vi",
        "public",
        "-p",
        "OS X 10.9",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_42_OS_X_10_9: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 42 on OS X 10.9",
        "-b",
        "firefox",
        "-v",
        "42",
        "--vi",
        "public",
        "-p",
        "OS X 10.9",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_43_OS_X_10_9: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 43 on OS X 10.9",
        "-b",
        "firefox",
        "-v",
        "43",
        "--vi",
        "public",
        "-p",
        "OS X 10.9",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_44_OS_X_10_9: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 44 on OS X 10.9",
        "-b",
        "firefox",
        "-v",
        "44",
        "--vi",
        "public",
        "-p",
        "OS X 10.9",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_45_OS_X_10_9: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 45 on OS X 10.9",
        "-b",
        "firefox",
        "-v",
        "45",
        "--vi",
        "public",
        "-p",
        "OS X 10.9",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_46_OS_X_10_9: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 46 on OS X 10.9",
        "-b",
        "firefox",
        "-v",
        "46",
        "--vi",
        "public",
        "-p",
        "OS X 10.9",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_47_OS_X_10_9: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 47 on OS X 10.9",
        "-b",
        "firefox",
        "-v",
        "47",
        "--vi",
        "public",
        "-p",
        "OS X 10.9",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_48_OS_X_10_9: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 48 on OS X 10.9",
        "-b",
        "firefox",
        "-v",
        "48",
        "--vi",
        "public",
        "-p",
        "OS X 10.9",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_49_OS_X_10_9: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 49 on OS X 10.9",
        "-b",
        "firefox",
        "-v",
        "49",
        "--vi",
        "public",
        "-p",
        "OS X 10.9",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    // OS X Yosemite (10.10)
  
    // Chrome
  
    SL_chrome_public_dev_OS_X_10_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome dev on OS X 10.10",
        "-b",
        "chrome",
        "-v",
        "dev",
        "--vi",
        "public",
        "-p",
        "OS X 10.10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_beta_OS_X_10_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome beta on OS X 10.10",
        "-b",
        "chrome",
        "-v",
        "beta",
        "--vi",
        "public",
        "-p",
        "OS X 10.10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_37_OS_X_10_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 37 on OS X 10.10",
        "-b",
        "chrome",
        "-v",
        "37",
        "--vi",
        "public",
        "-p",
        "OS X 10.10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_38_OS_X_10_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 38 on OS X 10.10",
        "-b",
        "chrome",
        "-v",
        "38",
        "--vi",
        "public",
        "-p",
        "OS X 10.10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_39_OS_X_10_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 39 on OS X 10.10",
        "-b",
        "chrome",
        "-v",
        "39",
        "--vi",
        "public",
        "-p",
        "OS X 10.10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_40_OS_X_10_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 40 on OS X 10.10",
        "-b",
        "chrome",
        "-v",
        "40",
        "--vi",
        "public",
        "-p",
        "OS X 10.10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_41_OS_X_10_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 41 on OS X 10.10",
        "-b",
        "chrome",
        "-v",
        "41",
        "--vi",
        "public",
        "-p",
        "OS X 10.10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_42_OS_X_10_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 42 on OS X 10.10",
        "-b",
        "chrome",
        "-v",
        "42",
        "--vi",
        "public",
        "-p",
        "OS X 10.10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_43_OS_X_10_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 43 on OS X 10.10",
        "-b",
        "chrome",
        "-v",
        "43",
        "--vi",
        "public",
        "-p",
        "OS X 10.10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_44_OS_X_10_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 44 on OS X 10.10",
        "-b",
        "chrome",
        "-v",
        "44",
        "--vi",
        "public",
        "-p",
        "OS X 10.10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_45_OS_X_10_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 45 on OS X 10.10",
        "-b",
        "chrome",
        "-v",
        "45",
        "--vi",
        "public",
        "-p",
        "OS X 10.10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_46_OS_X_10_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 46 on OS X 10.10",
        "-b",
        "chrome",
        "-v",
        "46",
        "--vi",
        "public",
        "-p",
        "OS X 10.10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_47_OS_X_10_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 47 on OS X 10.10",
        "-b",
        "chrome",
        "-v",
        "47",
        "--vi",
        "public",
        "-p",
        "OS X 10.10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_48_OS_X_10_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 48 on OS X 10.10",
        "-b",
        "chrome",
        "-v",
        "48",
        "--vi",
        "public",
        "-p",
        "OS X 10.10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_49_OS_X_10_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 49 on OS X 10.10",
        "-b",
        "chrome",
        "-v",
        "49",
        "--vi",
        "public",
        "-p",
        "OS X 10.10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_50_OS_X_10_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 50 on OS X 10.10",
        "-b",
        "chrome",
        "-v",
        "50",
        "--vi",
        "public",
        "-p",
        "OS X 10.10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_51_OS_X_10_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 51 on OS X 10.10",
        "-b",
        "chrome",
        "-v",
        "51",
        "--vi",
        "public",
        "-p",
        "OS X 10.10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_52_OS_X_10_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 52 on OS X 10.10",
        "-b",
        "chrome",
        "-v",
        "52",
        "--vi",
        "public",
        "-p",
        "OS X 10.10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_53_OS_X_10_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 53 on OS X 10.10",
        "-b",
        "chrome",
        "-v",
        "53",
        "--vi",
        "public",
        "-p",
        "OS X 10.10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_54_OS_X_10_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 54 on OS X 10.10",
        "-b",
        "chrome",
        "-v",
        "54",
        "--vi",
        "public",
        "-p",
        "OS X 10.10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    // Safari
  
    SL_safari_public_8_OS_X_10_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Safari 8 on OS X 10.10",
        "-b",
        "safari",
        "-v",
        "8",
        "--vi",
        "public",
        "-p",
        "OS X 10.10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    // Firefox
  
    SL_firefox_public_dev_OS_X_10_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox dev on OS X 10.10",
        "-b",
        "firefox",
        "-v",
        "dev",
        "--vi",
        "public",
        "-p",
        "OS X 10.10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_beta_OS_X_10_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox beta on OS X 10.10",
        "-b",
        "firefox",
        "-v",
        "beta",
        "--vi",
        "public",
        "-p",
        "OS X 10.10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_32_OS_X_10_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 32 on OS X 10.10",
        "-b",
        "firefox",
        "-v",
        "32",
        "--vi",
        "public",
        "-p",
        "OS X 10.10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_33_OS_X_10_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 33 on OS X 10.10",
        "-b",
        "firefox",
        "-v",
        "33",
        "--vi",
        "public",
        "-p",
        "OS X 10.10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_34_OS_X_10_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 34 on OS X 10.10",
        "-b",
        "firefox",
        "-v",
        "34",
        "--vi",
        "public",
        "-p",
        "OS X 10.10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_35_OS_X_10_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 35 on OS X 10.10",
        "-b",
        "firefox",
        "-v",
        "35",
        "--vi",
        "public",
        "-p",
        "OS X 10.10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_36_OS_X_10_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 36 on OS X 10.10",
        "-b",
        "firefox",
        "-v",
        "36",
        "--vi",
        "public",
        "-p",
        "OS X 10.10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_37_OS_X_10_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 37 on OS X 10.10",
        "-b",
        "firefox",
        "-v",
        "37",
        "--vi",
        "public",
        "-p",
        "OS X 10.10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_38_OS_X_10_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 38 on OS X 10.10",
        "-b",
        "firefox",
        "-v",
        "38",
        "--vi",
        "public",
        "-p",
        "OS X 10.10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_39_OS_X_10_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 39 on OS X 10.10",
        "-b",
        "firefox",
        "-v",
        "39",
        "--vi",
        "public",
        "-p",
        "OS X 10.10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_40_OS_X_10_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 40 on OS X 10.10",
        "-b",
        "firefox",
        "-v",
        "40",
        "--vi",
        "public",
        "-p",
        "OS X 10.10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_41_OS_X_10_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 41 on OS X 10.10",
        "-b",
        "firefox",
        "-v",
        "41",
        "--vi",
        "public",
        "-p",
        "OS X 10.10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_42_OS_X_10_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 42 on OS X 10.10",
        "-b",
        "firefox",
        "-v",
        "42",
        "--vi",
        "public",
        "-p",
        "OS X 10.10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_43_OS_X_10_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 43 on OS X 10.10",
        "-b",
        "firefox",
        "-v",
        "43",
        "--vi",
        "public",
        "-p",
        "OS X 10.10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_44_OS_X_10_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 44 on OS X 10.10",
        "-b",
        "firefox",
        "-v",
        "44",
        "--vi",
        "public",
        "-p",
        "OS X 10.10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_45_OS_X_10_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 45 on OS X 10.10",
        "-b",
        "firefox",
        "-v",
        "45",
        "--vi",
        "public",
        "-p",
        "OS X 10.10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_46_OS_X_10_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 46 on OS X 10.10",
        "-b",
        "firefox",
        "-v",
        "46",
        "--vi",
        "public",
        "-p",
        "OS X 10.10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_47_OS_X_10_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 47 on OS X 10.10",
        "-b",
        "firefox",
        "-v",
        "47",
        "--vi",
        "public",
        "-p",
        "OS X 10.10",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    // OS X El Capitan (10.11)
  
    // Chrome
  
    SL_chrome_public_dev_OS_X_10_11: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome dev on OS X 10.11",
        "-b",
        "chrome",
        "-v",
        "dev",
        "--vi",
        "public",
        "-p",
        "OS X 10.11",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_beta_OS_X_10_11: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome beta on OS X 10.11",
        "-b",
        "chrome",
        "-v",
        "beta",
        "--vi",
        "public",
        "-p",
        "OS X 10.11",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_27_OS_X_10_11: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 27 on OS X 10.11",
        "-b",
        "chrome",
        "-v",
        "27",
        "--vi",
        "public",
        "-p",
        "OS X 10.11",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_28_OS_X_10_11: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 28 on OS X 10.11",
        "-b",
        "chrome",
        "-v",
        "28",
        "--vi",
        "public",
        "-p",
        "OS X 10.11",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_29_OS_X_10_11: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 29 on OS X 10.11",
        "-b",
        "chrome",
        "-v",
        "29",
        "--vi",
        "public",
        "-p",
        "OS X 10.11",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_30_OS_X_10_11: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 30 on OS X 10.11",
        "-b",
        "chrome",
        "-v",
        "30",
        "--vi",
        "public",
        "-p",
        "OS X 10.11",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_31_OS_X_10_11: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 31 on OS X 10.11",
        "-b",
        "chrome",
        "-v",
        "31",
        "--vi",
        "public",
        "-p",
        "OS X 10.11",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_32_OS_X_10_11: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 32 on OS X 10.11",
        "-b",
        "chrome",
        "-v",
        "32",
        "--vi",
        "public",
        "-p",
        "OS X 10.11",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_33_OS_X_10_11: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 33 on OS X 10.11",
        "-b",
        "chrome",
        "-v",
        "33",
        "--vi",
        "public",
        "-p",
        "OS X 10.11",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_34_OS_X_10_11: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 34 on OS X 10.11",
        "-b",
        "chrome",
        "-v",
        "34",
        "--vi",
        "public",
        "-p",
        "OS X 10.11",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_35_OS_X_10_11: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 35 on OS X 10.11",
        "-b",
        "chrome",
        "-v",
        "35",
        "--vi",
        "public",
        "-p",
        "OS X 10.11",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_36_OS_X_10_11: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 36 on OS X 10.11",
        "-b",
        "chrome",
        "-v",
        "36",
        "--vi",
        "public",
        "-p",
        "OS X 10.11",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_37_OS_X_10_11: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 37 on OS X 10.11",
        "-b",
        "chrome",
        "-v",
        "37",
        "--vi",
        "public",
        "-p",
        "OS X 10.11",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_38_OS_X_10_11: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 38 on OS X 10.11",
        "-b",
        "chrome",
        "-v",
        "38",
        "--vi",
        "public",
        "-p",
        "OS X 10.11",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_39_OS_X_10_11: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 39 on OS X 10.11",
        "-b",
        "chrome",
        "-v",
        "39",
        "--vi",
        "public",
        "-p",
        "OS X 10.11",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_40_OS_X_10_11: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 40 on OS X 10.11",
        "-b",
        "chrome",
        "-v",
        "40",
        "--vi",
        "public",
        "-p",
        "OS X 10.11",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_41_OS_X_10_11: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 41 on OS X 10.11",
        "-b",
        "chrome",
        "-v",
        "41",
        "--vi",
        "public",
        "-p",
        "OS X 10.11",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_42_OS_X_10_11: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 42 on OS X 10.11",
        "-b",
        "chrome",
        "-v",
        "42",
        "--vi",
        "public",
        "-p",
        "OS X 10.11",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_43_OS_X_10_11: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 43 on OS X 10.11",
        "-b",
        "chrome",
        "-v",
        "43",
        "--vi",
        "public",
        "-p",
        "OS X 10.11",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_44_OS_X_10_11: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 44 on OS X 10.11",
        "-b",
        "chrome",
        "-v",
        "44",
        "--vi",
        "public",
        "-p",
        "OS X 10.11",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_45_OS_X_10_11: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 45 on OS X 10.11",
        "-b",
        "chrome",
        "-v",
        "45",
        "--vi",
        "public",
        "-p",
        "OS X 10.11",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_46_OS_X_10_11: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 46 on OS X 10.11",
        "-b",
        "chrome",
        "-v",
        "46",
        "--vi",
        "public",
        "-p",
        "OS X 10.11",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_47_OS_X_10_11: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 47 on OS X 10.11",
        "-b",
        "chrome",
        "-v",
        "47",
        "--vi",
        "public",
        "-p",
        "OS X 10.11",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_48_OS_X_10_11: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 48 on OS X 10.11",
        "-b",
        "chrome",
        "-v",
        "48",
        "--vi",
        "public",
        "-p",
        "OS X 10.11",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_49_OS_X_10_11: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 49 on OS X 10.11",
        "-b",
        "chrome",
        "-v",
        "49",
        "--vi",
        "public",
        "-p",
        "OS X 10.11",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_50_OS_X_10_11: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 50 on OS X 10.11",
        "-b",
        "chrome",
        "-v",
        "50",
        "--vi",
        "public",
        "-p",
        "OS X 10.11",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_51_OS_X_10_11: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 51 on OS X 10.11",
        "-b",
        "chrome",
        "-v",
        "51",
        "--vi",
        "public",
        "-p",
        "OS X 10.11",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_52_OS_X_10_11: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 52 on OS X 10.11",
        "-b",
        "chrome",
        "-v",
        "52",
        "--vi",
        "public",
        "-p",
        "OS X 10.11",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_53_OS_X_10_11: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 53 on OS X 10.11",
        "-b",
        "chrome",
        "-v",
        "53",
        "--vi",
        "public",
        "-p",
        "OS X 10.11",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_chrome_public_54_OS_X_10_11: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Chrome 54 on OS X 10.11",
        "-b",
        "chrome",
        "-v",
        "54",
        "--vi",
        "public",
        "-p",
        "OS X 10.11",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    // Safari
  
    SL_safari_public_9_OS_X_10_11: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Safari 9 on OS X 10.11",
        "-b",
        "safari",
        "-v",
        "9",
        "--vi",
        "public",
        "-p",
        "OS X 10.11",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_safari_public_10_OS_X_10_11: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Safari 10 on OS X 10.11",
        "-b",
        "safari",
        "-v",
        "10",
        "--vi",
        "public",
        "-p",
        "OS X 10.11",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    // Firefox
  
    SL_firefox_public_dev_OS_X_10_11: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox dev on OS X 10.11",
        "-b",
        "firefox",
        "-v",
        "dev",
        "--vi",
        "public",
        "-p",
        "OS X 10.11",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_beta_OS_X_10_11: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox beta on OS X 10.11",
        "-b",
        "firefox",
        "-v",
        "beta",
        "--vi",
        "public",
        "-p",
        "OS X 10.11",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_4_OS_X_10_11: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 4 on OS X 10.11",
        "-b",
        "firefox",
        "-v",
        "4",
        "--vi",
        "public",
        "-p",
        "OS X 10.11",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_5_OS_X_10_11: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 5 on OS X 10.11",
        "-b",
        "firefox",
        "-v",
        "5",
        "--vi",
        "public",
        "-p",
        "OS X 10.11",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_6_OS_X_10_11: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 6 on OS X 10.11",
        "-b",
        "firefox",
        "-v",
        "6",
        "--vi",
        "public",
        "-p",
        "OS X 10.11",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_7_OS_X_10_11: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 7 on OS X 10.11",
        "-b",
        "firefox",
        "-v",
        "7",
        "--vi",
        "public",
        "-p",
        "OS X 10.11",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_8_OS_X_10_11: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 8 on OS X 10.11",
        "-b",
        "firefox",
        "-v",
        "8",
        "--vi",
        "public",
        "-p",
        "OS X 10.11",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_9_OS_X_10_11: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 9 on OS X 10.11",
        "-b",
        "firefox",
        "-v",
        "9",
        "--vi",
        "public",
        "-p",
        "OS X 10.11",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_10_OS_X_10_11: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 10 on OS X 10.11",
        "-b",
        "firefox",
        "-v",
        "10",
        "--vi",
        "public",
        "-p",
        "OS X 10.11",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_11_OS_X_10_11: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 11 on OS X 10.11",
        "-b",
        "firefox",
        "-v",
        "11",
        "--vi",
        "public",
        "-p",
        "OS X 10.11",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_12_OS_X_10_11: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 12 on OS X 10.11",
        "-b",
        "firefox",
        "-v",
        "12",
        "--vi",
        "public",
        "-p",
        "OS X 10.11",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_13_OS_X_10_11: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 13 on OS X 10.11",
        "-b",
        "firefox",
        "-v",
        "13",
        "--vi",
        "public",
        "-p",
        "OS X 10.11",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_14_OS_X_10_11: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 14 on OS X 10.11",
        "-b",
        "firefox",
        "-v",
        "14",
        "--vi",
        "public",
        "-p",
        "OS X 10.11",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_15_OS_X_10_11: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 15 on OS X 10.11",
        "-b",
        "firefox",
        "-v",
        "15",
        "--vi",
        "public",
        "-p",
        "OS X 10.11",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_16_OS_X_10_11: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 16 on OS X 10.11",
        "-b",
        "firefox",
        "-v",
        "16",
        "--vi",
        "public",
        "-p",
        "OS X 10.11",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_17_OS_X_10_11: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 17 on OS X 10.11",
        "-b",
        "firefox",
        "-v",
        "17",
        "--vi",
        "public",
        "-p",
        "OS X 10.11",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_18_OS_X_10_11: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 18 on OS X 10.11",
        "-b",
        "firefox",
        "-v",
        "18",
        "--vi",
        "public",
        "-p",
        "OS X 10.11",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_19_OS_X_10_11: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 19 on OS X 10.11",
        "-b",
        "firefox",
        "-v",
        "19",
        "--vi",
        "public",
        "-p",
        "OS X 10.11",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_20_OS_X_10_11: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 20 on OS X 10.11",
        "-b",
        "firefox",
        "-v",
        "20",
        "--vi",
        "public",
        "-p",
        "OS X 10.11",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_21_OS_X_10_11: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 21 on OS X 10.11",
        "-b",
        "firefox",
        "-v",
        "21",
        "--vi",
        "public",
        "-p",
        "OS X 10.11",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_22_OS_X_10_11: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 22 on OS X 10.11",
        "-b",
        "firefox",
        "-v",
        "22",
        "--vi",
        "public",
        "-p",
        "OS X 10.11",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_23_OS_X_10_11: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 23 on OS X 10.11",
        "-b",
        "firefox",
        "-v",
        "23",
        "--vi",
        "public",
        "-p",
        "OS X 10.11",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_24_OS_X_10_11: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 24 on OS X 10.11",
        "-b",
        "firefox",
        "-v",
        "24",
        "--vi",
        "public",
        "-p",
        "OS X 10.11",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_25_OS_X_10_11: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 25 on OS X 10.11",
        "-b",
        "firefox",
        "-v",
        "25",
        "--vi",
        "public",
        "-p",
        "OS X 10.11",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_26_OS_X_10_11: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 26 on OS X 10.11",
        "-b",
        "firefox",
        "-v",
        "26",
        "--vi",
        "public",
        "-p",
        "OS X 10.11",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_27_OS_X_10_11: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 27 on OS X 10.11",
        "-b",
        "firefox",
        "-v",
        "27",
        "--vi",
        "public",
        "-p",
        "OS X 10.11",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_28_OS_X_10_11: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 28 on OS X 10.11",
        "-b",
        "firefox",
        "-v",
        "28",
        "--vi",
        "public",
        "-p",
        "OS X 10.11",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_29_OS_X_10_11: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 29 on OS X 10.11",
        "-b",
        "firefox",
        "-v",
        "29",
        "--vi",
        "public",
        "-p",
        "OS X 10.11",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_30_OS_X_10_11: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 30 on OS X 10.11",
        "-b",
        "firefox",
        "-v",
        "30",
        "--vi",
        "public",
        "-p",
        "OS X 10.11",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_31_OS_X_10_11: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 31 on OS X 10.11",
        "-b",
        "firefox",
        "-v",
        "31",
        "--vi",
        "public",
        "-p",
        "OS X 10.11",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_32_OS_X_10_11: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 32 on OS X 10.11",
        "-b",
        "firefox",
        "-v",
        "32",
        "--vi",
        "public",
        "-p",
        "OS X 10.11",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_33_OS_X_10_11: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 33 on OS X 10.11",
        "-b",
        "firefox",
        "-v",
        "33",
        "--vi",
        "public",
        "-p",
        "OS X 10.11",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_34_OS_X_10_11: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 34 on OS X 10.11",
        "-b",
        "firefox",
        "-v",
        "34",
        "--vi",
        "public",
        "-p",
        "OS X 10.11",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_35_OS_X_10_11: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 35 on OS X 10.11",
        "-b",
        "firefox",
        "-v",
        "35",
        "--vi",
        "public",
        "-p",
        "OS X 10.11",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_36_OS_X_10_11: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 36 on OS X 10.11",
        "-b",
        "firefox",
        "-v",
        "36",
        "--vi",
        "public",
        "-p",
        "OS X 10.11",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_37_OS_X_10_11: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 37 on OS X 10.11",
        "-b",
        "firefox",
        "-v",
        "37",
        "--vi",
        "public",
        "-p",
        "OS X 10.11",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_38_OS_X_10_11: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 38 on OS X 10.11",
        "-b",
        "firefox",
        "-v",
        "38",
        "--vi",
        "public",
        "-p",
        "OS X 10.11",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_39_OS_X_10_11: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 39 on OS X 10.11",
        "-b",
        "firefox",
        "-v",
        "39",
        "--vi",
        "public",
        "-p",
        "OS X 10.11",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_40_OS_X_10_11: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 40 on OS X 10.11",
        "-b",
        "firefox",
        "-v",
        "40",
        "--vi",
        "public",
        "-p",
        "OS X 10.11",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_41_OS_X_10_11: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 41 on OS X 10.11",
        "-b",
        "firefox",
        "-v",
        "41",
        "--vi",
        "public",
        "-p",
        "OS X 10.11",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_42_OS_X_10_11: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 42 on OS X 10.11",
        "-b",
        "firefox",
        "-v",
        "42",
        "--vi",
        "public",
        "-p",
        "OS X 10.11",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_43_OS_X_10_11: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 43 on OS X 10.11",
        "-b",
        "firefox",
        "-v",
        "43",
        "--vi",
        "public",
        "-p",
        "OS X 10.11",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_44_OS_X_10_11: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 44 on OS X 10.11",
        "-b",
        "firefox",
        "-v",
        "44",
        "--vi",
        "public",
        "-p",
        "OS X 10.11",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_45_OS_X_10_11: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 45 on OS X 10.11",
        "-b",
        "firefox",
        "-v",
        "45",
        "--vi",
        "public",
        "-p",
        "OS X 10.11",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_46_OS_X_10_11: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 46 on OS X 10.11",
        "-b",
        "firefox",
        "-v",
        "46",
        "--vi",
        "public",
        "-p",
        "OS X 10.11",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_47_OS_X_10_11: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 47 on OS X 10.11",
        "-b",
        "firefox",
        "-v",
        "47",
        "--vi",
        "public",
        "-p",
        "OS X 10.11",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_48_OS_X_10_11: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 48 on OS X 10.11",
        "-b",
        "firefox",
        "-v",
        "48",
        "--vi",
        "public",
        "-p",
        "OS X 10.11",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_firefox_public_49_OS_X_10_11: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Firefox 49 on OS X 10.11",
        "-b",
        "firefox",
        "-v",
        "49",
        "--vi",
        "public",
        "-p",
        "OS X 10.11",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    // Appium
  
    // iPhone Simulator
  
    // Safari
    
    SL_ios_8_1_public_iPhone_Simulator_portrait: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "iOS 8.1 on iPhone Simulator",
        "--vi",
        "public",
        "-b",
        "ios",
        "-v",
        "8.1",
        "-dn",
        "iPhone Simulator",
        "-do",
        "portrait",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
    
    SL_ios_8_2_public_iPhone_Simulator_portrait: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "iOS 8.2 on iPhone Simulator",
        "--vi",
        "public",
        "-b",
        "ios",
        "-v",
        "8.2",
        "-dn",
        "iPhone Simulator",
        "-do",
        "portrait",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
    
    SL_ios_8_3_public_iPhone_Simulator_portrait: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "iOS 8.3 on iPhone Simulator",
        "--vi",
        "public",
        "-b",
        "ios",
        "-v",
        "8.3",
        "-dn",
        "iPhone Simulator",
        "-do",
        "portrait",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
    
    SL_ios_8_4_public_iPhone_Simulator_portrait: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "iOS 8.4 on iPhone Simulator",
        "--vi",
        "public",
        "-b",
        "ios",
        "-v",
        "8.4",
        "-dn",
        "iPhone Simulator",
        "-do",
        "portrait",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
    
    SL_ios_9_public_iPhone_Simulator_portrait: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "iOS 9 on iPhone Simulator",
        "--vi",
        "public",
        "-b",
        "ios",
        "-v",
        "9",
        "-dn",
        "iPhone Simulator",
        "-do",
        "portrait",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
    
    SL_ios_9_1_public_iPhone_Simulator_portrait: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "iOS 9.1 on iPhone Simulator",
        "--vi",
        "public",
        "-b",
        "ios",
        "-v",
        "9.1",
        "-dn",
        "iPhone Simulator",
        "-do",
        "portrait",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
    
    SL_ios_9_2_public_iPhone_Simulator_portrait: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "iOS 9.2 on iPhone Simulator",
        "--vi",
        "public",
        "-b",
        "ios",
        "-v",
        "9.2",
        "-dn",
        "iPhone Simulator",
        "-do",
        "portrait",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
    
    SL_ios_9_3_public_iPhone_Simulator_portrait: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "iOS 9.3 on iPhone Simulator",
        "--vi",
        "public",
        "-b",
        "ios",
        "-v",
        "9.3",
        "-dn",
        "iPhone Simulator",
        "-do",
        "portrait",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
    
    SL_ios_10_public_iPhone_Simulator_portrait: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "iOS 10 on iPhone Simulator",
        "--vi",
        "public",
        "-b",
        "ios",
        "-v",
        "10",
        "-dn",
        "iPhone Simulator",
        "-do",
        "portrait",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
    
    // Android Simulator
    
    // Android Browser
    
    SL_android_4_public_Android_Emulator_portrait: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Android 4 on Android Emulator",
        "--vi",
        "public",
        "-b",
        "android",
        "-v",
        "4.0",
        "-dn",
        "Android Emulator",
        "-do",
        "portrait",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
    
    SL_android_4_1_public_Android_Emulator_portrait: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Android 4.1 on Android Emulator",
        "--vi",
        "public",
        "-b",
        "android",
        "-v",
        "4.1",
        "-dn",
        "Android Emulator",
        "-do",
        "portrait",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
    
    SL_android_4_2_public_Android_Emulator_portrait: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Android 4.2 on Android Emulator",
        "--vi",
        "public",
        "-b",
        "android",
        "-v",
        "4.2",
        "-dn",
        "Android Emulator",
        "-do",
        "portrait",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
    
    SL_android_4_3_public_Android_Emulator_portrait: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Android 4.3 on Android Emulator",
        "--vi",
        "public",
        "-b",
        "android",
        "-v",
        "4.3",
        "-dn",
        "Android Emulator",
        "-do",
        "portrait",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
    
    SL_android_4_4_public_Android_Emulator_portrait: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Android 4.4 on Android Emulator",
        "--vi",
        "public",
        "-b",
        "android",
        "-v",
        "4.4",
        "-dn",
        "Android Emulator",
        "-do",
        "portrait",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
  
    SL_android_5_public_Android_Emulator_portrait: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Android 5 on Android Emulator",
        "--vi",
        "public",
        "-b",
        "android",
        "-v",
        "5",
        "-dn",
        "Android Emulator",
        "-do",
        "portrait",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    },
    
    SL_android_5_1_public_Android_Emulator_portrait: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-ln",
        "Android 5.1 on Android Emulator",
        "--vi",
        "public",
        "-b",
        "android",
        "-v",
        "5.1",
        "-dn",
        "Android Emulator",
        "-do",
        "portrait",
        "--at",
        "--no-ct",
        "--u"
      ],
      "protocol": "browser"
    }
  }
};