/*jshint node:true*/
module.exports = {
  "framework": "qunit",
  "test_page": "tests/index.html?hidepassed",
  "disable_watching": true,

  "launch_in_ci": [
    "PhantomJS",
    "SL_chrome_public_dev_Windows_7",
    "SL_chrome_public_beta_Windows_7",
    "SL_chrome_public_54_Windows_7",
    "SL_firefox_public_dev_Windows_7",
    "SL_firefox_public_beta_Windows_7",
    "SL_firefox_public_49_Windows_7",
    "SL_internet_explorer_public_11_Windows_7",
    "SL_opera_public_12_12_Windows_7",
    "SL_chrome_public_dev_Windows_8",
    "SL_chrome_public_beta_Windows_8",
    "SL_chrome_public_54_Windows_8",
    "SL_firefox_public_dev_Windows_8",
    "SL_firefox_public_beta_Windows_8",
    "SL_firefox_public_49_Windows_8",
    "SL_internet_explorer_public_11_Windows_8",
    "SL_chrome_public_dev_Windows_10",
    "SL_chrome_public_beta_Windows_10",
    "SL_chrome_public_54_Windows_10",
    "SL_firefox_public_dev_Windows_10",
    "SL_firefox_public_beta_Windows_10",
    "SL_firefox_public_49_Windows_10",
    "SL_internet_explorer_public_11_Windows_10",
    "SL_MicrosoftEdge_public_14_14393_Windows_10"
  ],

  "launch_in_dev": [
    "PhantomJS",
    "Chrome"
  ],

  launchers: {
    // Windows 7

    // Chrome

    SL_chrome_public_dev_Windows_7: {
      "exe": "ember",
      "args": [
        "sauce:launch",
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

    // Safari

    SL_safari_public_5_1_Windows_7: {
      "exe": "ember",
      "args": [
        "sauce:launch",
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

    // Firefox

    SL_firefox_public_dev_Windows_7: {
      "exe": "ember",
      "args": [
        "sauce:launch",
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

    'SL_firefox_public_21.0b1_Windows_7': {
      "exe": "ember",
      "args": [
        "sauce:launch",
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

    'SL_firefox_public_25.0b2_Windows_7': {
      "exe": "ember",
      "args": [
        "sauce:launch",
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

    // Windows 8

    // Chrome

    SL_chrome_public_dev_Windows_8: {
      "exe": "ember",
      "args": [
        "sauce:launch",
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

    'SL_firefox_public_21.0b1_Windows_8': {
      "exe": "ember",
      "args": [
        "sauce:launch",
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

    'SL_firefox_public_25.0b2_Windows_8': {
      "exe": "ember",
      "args": [
        "sauce:launch",
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

    // Windows 10

    // Chrome

    SL_chrome_public_dev_Windows_10: {
      "exe": "ember",
      "args": [
        "sauce:launch",
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

    'SL_firefox_public_21.0b1_Windows_10': {
      "exe": "ember",
      "args": [
        "sauce:launch",
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

    'SL_firefox_public_25.0b2_Windows_10': {
      "exe": "ember",
      "args": [
        "sauce:launch",
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
    }
  }
};
