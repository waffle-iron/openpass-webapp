/*jshint node:true*/
module.exports = {
  "framework": "qunit",
  "test_page": "tests/index.html?hidepassed",
  "disable_watching": true,

  "launch_in_ci": [
    "PhantomJS",
    
    // Linux
    
    "SL_chrome_public_48_Linux",
    "SL_firefox_public_45_Linux",
    "SL_opera_public_12_15_Linux",
    
    // Windows XP
    
    "SL_chrome_public_49_Windows_XP",
    "SL_internet_explorer_public_8_Windows_XP",
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
    "SL_firefox_public_49_OS_X_10_11"
  ],

  "launch_in_dev": [
    "PhantomJS",
    "Chrome",
    "Firefox",
    "IE",
    "Safari",
    "Opera"
  ],
  
  "browser_args": {
    "Chrome": [
      "--auto-open-devtools-for-tabs",
      "--purge-memory-button",
      "--disable-translate",
      "--disable-plugins"
    ],
    "Firefox": [
      "-console",
      "-safe-mode"
    ],
    "IE": [
      "/extoff"
    ],
    "Opera": [
      "-nosession"
    ]
  },
  
  launchers: {
    // Linux
    
    // Chrome

    SL_chrome_public_26_Linux: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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

    SL_internet_explorer_public_8_Windows_XP: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "--timeout",
        "10000",
        "-b",
        "internet explorer",
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

    // Firefox

    SL_firefox_public_4_Windows_XP: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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

    SL_internet_explorer_public_8_Windows_7: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "--timeout",
        "10000",
        "-b",
        "internet explorer",
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

    SL_internet_explorer_public_9_Windows_7: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
        "--timeout",
        "10000",
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
    }
  }
};
