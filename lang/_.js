/*
Copyright (c) 2011 BitTorrent, Inc. All rights reserved.

Use of this source code is governed by a BSD-style that can be
found in the LICENSE file.
*/

var LANG_CONST = [
	  "CT_MASK1"
	, "DLG_BTN_OK"
	, "DLG_BTN_CANCEL"
	, "DLG_BTN_APPLY"
	, "DLG_BTN_YES"
	, "DLG_BTN_NO"
	, "DLG_BTN_CLOSE"
	, "DLG_SETTINGS_00"
	, "DLG_SETTINGS_1_GENERAL_01"
	, "DLG_SETTINGS_1_GENERAL_02"
	, "DLG_SETTINGS_1_GENERAL_10"
	, "DLG_SETTINGS_1_GENERAL_11"
	, "DLG_SETTINGS_1_GENERAL_12"
	, "DLG_SETTINGS_1_GENERAL_13"
	, "DLG_SETTINGS_1_GENERAL_17"
	, "DLG_SETTINGS_1_GENERAL_18"
	, "DLG_SETTINGS_1_GENERAL_19"
	, "DLG_SETTINGS_1_GENERAL_20"
	, "DLG_SETTINGS_2_UI_01"
	, "DLG_SETTINGS_2_UI_02"
	, "DLG_SETTINGS_2_UI_03"
	, "DLG_SETTINGS_2_UI_04"
	, "DLG_SETTINGS_2_UI_05"
	, "DLG_SETTINGS_2_UI_06"
	, "DLG_SETTINGS_2_UI_07"
	, "DLG_SETTINGS_2_UI_15"
	, "DLG_SETTINGS_2_UI_16"
	, "DLG_SETTINGS_2_UI_17"
	, "DLG_SETTINGS_2_UI_18"
	, "DLG_SETTINGS_2_UI_19"
	, "DLG_SETTINGS_2_UI_20"
	, "DLG_SETTINGS_2_UI_22"
	, "DLG_SETTINGS_3_PATHS_01"
	, "DLG_SETTINGS_3_PATHS_02"
	, "DLG_SETTINGS_3_PATHS_03"
	, "DLG_SETTINGS_3_PATHS_06"
	, "DLG_SETTINGS_3_PATHS_07"
	, "DLG_SETTINGS_3_PATHS_10"
	, "DLG_SETTINGS_3_PATHS_11"
	, "DLG_SETTINGS_3_PATHS_12"
	, "DLG_SETTINGS_3_PATHS_15"
	, "DLG_SETTINGS_3_PATHS_18"
	, "DLG_SETTINGS_3_PATHS_19"
	, "DLG_SETTINGS_4_CONN_01"
	, "DLG_SETTINGS_4_CONN_02"
	, "DLG_SETTINGS_4_CONN_04"
	, "DLG_SETTINGS_4_CONN_05"
	, "DLG_SETTINGS_4_CONN_06"
	, "DLG_SETTINGS_4_CONN_07"
	, "DLG_SETTINGS_4_CONN_08"
	, "DLG_SETTINGS_4_CONN_09"
	, "DLG_SETTINGS_4_CONN_11"
	, "DLG_SETTINGS_4_CONN_13"
	, "DLG_SETTINGS_4_CONN_15"
	, "DLG_SETTINGS_4_CONN_16"
	, "DLG_SETTINGS_4_CONN_18"
	, "DLG_SETTINGS_4_CONN_19"
	, "DLG_SETTINGS_4_CONN_20"
	, "DLG_SETTINGS_4_CONN_21"
	, "DLG_SETTINGS_4_CONN_22"
	, "DLG_SETTINGS_4_CONN_23"
	, "DLG_SETTINGS_4_CONN_24"
	, "DLG_SETTINGS_4_CONN_25"
	, "DLG_SETTINGS_5_BANDWIDTH_01"
	, "DLG_SETTINGS_5_BANDWIDTH_02"
	, "DLG_SETTINGS_5_BANDWIDTH_03"
	, "DLG_SETTINGS_5_BANDWIDTH_05"
	, "DLG_SETTINGS_5_BANDWIDTH_07"
	, "DLG_SETTINGS_5_BANDWIDTH_08"
	, "DLG_SETTINGS_5_BANDWIDTH_10"
	, "DLG_SETTINGS_5_BANDWIDTH_11"
	, "DLG_SETTINGS_5_BANDWIDTH_14"
	, "DLG_SETTINGS_5_BANDWIDTH_15"
	, "DLG_SETTINGS_5_BANDWIDTH_17"
	, "DLG_SETTINGS_5_BANDWIDTH_18"
	, "DLG_SETTINGS_5_BANDWIDTH_19"
	, "DLG_SETTINGS_5_BANDWIDTH_20"
	, "DLG_SETTINGS_6_BITTORRENT_01"
	, "DLG_SETTINGS_6_BITTORRENT_02"
	, "DLG_SETTINGS_6_BITTORRENT_03"
	, "DLG_SETTINGS_6_BITTORRENT_04"
	, "DLG_SETTINGS_6_BITTORRENT_05"
	, "DLG_SETTINGS_6_BITTORRENT_06"
	, "DLG_SETTINGS_6_BITTORRENT_07"
	, "DLG_SETTINGS_6_BITTORRENT_08"
	, "DLG_SETTINGS_6_BITTORRENT_10"
	, "DLG_SETTINGS_6_BITTORRENT_11"
	, "DLG_SETTINGS_6_BITTORRENT_13"
	, "DLG_SETTINGS_6_BITTORRENT_14"
	, "DLG_SETTINGS_6_BITTORRENT_15"
	, "DLG_SETTINGS_7_TRANSFERCAP_01"
	, "DLG_SETTINGS_7_TRANSFERCAP_02"
	, "DLG_SETTINGS_7_TRANSFERCAP_03"
	, "DLG_SETTINGS_7_TRANSFERCAP_04"
	, "DLG_SETTINGS_7_TRANSFERCAP_05"
	, "DLG_SETTINGS_7_TRANSFERCAP_06"
	, "DLG_SETTINGS_7_TRANSFERCAP_07"
	, "DLG_SETTINGS_7_TRANSFERCAP_08"
	, "DLG_SETTINGS_7_TRANSFERCAP_09"
	, "DLG_SETTINGS_7_TRANSFERCAP_10"
	, "DLG_SETTINGS_7_TRANSFERCAP_11"
	, "DLG_SETTINGS_7_TRANSFERCAP_12"
	, "DLG_SETTINGS_8_QUEUEING_01"
	, "DLG_SETTINGS_8_QUEUEING_02"
	, "DLG_SETTINGS_8_QUEUEING_04"
	, "DLG_SETTINGS_8_QUEUEING_06"
	, "DLG_SETTINGS_8_QUEUEING_07"
	, "DLG_SETTINGS_8_QUEUEING_09"
	, "DLG_SETTINGS_8_QUEUEING_11"
	, "DLG_SETTINGS_8_QUEUEING_12"
	, "DLG_SETTINGS_8_QUEUEING_13"
	, "DLG_SETTINGS_9_SCHEDULER_01"
	, "DLG_SETTINGS_9_SCHEDULER_02"
	, "DLG_SETTINGS_9_SCHEDULER_04"
	, "DLG_SETTINGS_9_SCHEDULER_05"
	, "DLG_SETTINGS_9_SCHEDULER_07"
	, "DLG_SETTINGS_9_SCHEDULER_09"
	, "DLG_SETTINGS_9_WEBUI_01"
	, "DLG_SETTINGS_9_WEBUI_02"
	, "DLG_SETTINGS_9_WEBUI_03"
	, "DLG_SETTINGS_9_WEBUI_05"
	, "DLG_SETTINGS_9_WEBUI_07"
	, "DLG_SETTINGS_9_WEBUI_09"
	, "DLG_SETTINGS_9_WEBUI_10"
	, "DLG_SETTINGS_9_WEBUI_12"
	, "DLG_SETTINGS_A_ADVANCED_01"
	, "DLG_SETTINGS_A_ADVANCED_02"
	, "DLG_SETTINGS_A_ADVANCED_03"
	, "DLG_SETTINGS_A_ADVANCED_04"
	, "DLG_SETTINGS_A_ADVANCED_05"
	, "DLG_SETTINGS_B_ADV_UI_01"
	, "DLG_SETTINGS_B_ADV_UI_02"
	, "DLG_SETTINGS_B_ADV_UI_03"
	, "DLG_SETTINGS_B_ADV_UI_05"
	, "DLG_SETTINGS_B_ADV_UI_07"
	, "DLG_SETTINGS_B_ADV_UI_08"
	, "DLG_SETTINGS_C_ADV_CACHE_01"
	, "DLG_SETTINGS_C_ADV_CACHE_02"
	, "DLG_SETTINGS_C_ADV_CACHE_03"
	, "DLG_SETTINGS_C_ADV_CACHE_05"
	, "DLG_SETTINGS_C_ADV_CACHE_06"
	, "DLG_SETTINGS_C_ADV_CACHE_07"
	, "DLG_SETTINGS_C_ADV_CACHE_08"
	, "DLG_SETTINGS_C_ADV_CACHE_09"
	, "DLG_SETTINGS_C_ADV_CACHE_10"
	, "DLG_SETTINGS_C_ADV_CACHE_11"
	, "DLG_SETTINGS_C_ADV_CACHE_12"
	, "DLG_SETTINGS_C_ADV_CACHE_13"
	, "DLG_SETTINGS_C_ADV_CACHE_14"
	, "DLG_SETTINGS_C_ADV_CACHE_15"
	, "DLG_SETTINGS_C_ADV_RUN_01"
	, "DLG_SETTINGS_C_ADV_RUN_02"
	, "DLG_SETTINGS_C_ADV_RUN_04"
	, "DLG_SETTINGS_C_ADV_RUN_06"
	, "DLG_TORRENTPROP_00"
	, "DLG_TORRENTPROP_1_GEN_01"
	, "DLG_TORRENTPROP_1_GEN_03"
	, "DLG_TORRENTPROP_1_GEN_04"
	, "DLG_TORRENTPROP_1_GEN_06"
	, "DLG_TORRENTPROP_1_GEN_08"
	, "DLG_TORRENTPROP_1_GEN_10"
	, "DLG_TORRENTPROP_1_GEN_11"
	, "DLG_TORRENTPROP_1_GEN_12"
	, "DLG_TORRENTPROP_1_GEN_14"
	, "DLG_TORRENTPROP_1_GEN_16"
	, "DLG_TORRENTPROP_1_GEN_17"
	, "DLG_TORRENTPROP_1_GEN_18"
	, "DLG_TORRENTPROP_1_GEN_19"
	, "DLG_ADDEDITRSSFEED_03"
	, "DLG_ADDEDITRSSFEED_04"
	, "DLG_ADDEDITRSSFEED_05"
	, "DLG_ADDEDITRSSFEED_06"
	, "DLG_ADDEDITRSSFEED_07"
	, "DLG_ADDEDITRSSFEED_08"
	, "DLG_ADDEDITRSSFEED_09"
	, "DLG_RSSDOWNLOADER_02"
	, "DLG_RSSDOWNLOADER_03"
	, "DLG_RSSDOWNLOADER_04"
	, "DLG_RSSDOWNLOADER_05"
	, "DLG_RSSDOWNLOADER_06"
	, "DLG_RSSDOWNLOADER_07"
	, "DLG_RSSDOWNLOADER_08"
	, "DLG_RSSDOWNLOADER_09"
	, "DLG_RSSDOWNLOADER_10"
	, "DLG_RSSDOWNLOADER_11"
	, "DLG_RSSDOWNLOADER_12"
	, "DLG_RSSDOWNLOADER_13"
	, "DLG_RSSDOWNLOADER_14"
	, "DLG_RSSDOWNLOADER_15"
	, "DLG_RSSDOWNLOADER_16"
	, "DLG_RSSDOWNLOADER_17"
	, "DLG_RSSDOWNLOADER_18"
	, "DLG_RSSDOWNLOADER_19"
	, "DLG_RSSDOWNLOADER_20"
	, "DLG_RSSDOWNLOADER_21"
	, "DLG_RSSDOWNLOADER_22"
	, "DLG_RSSDOWNLOADER_23"
	, "DLG_RSSDOWNLOADER_24"
	, "DLG_RSSDOWNLOADER_25"
	, "DLG_RSSDOWNLOADER_26"
	, "DLG_RSSDOWNLOADER_27"
	, "DLG_RSSDOWNLOADER_28"
	, "DLG_RSSDOWNLOADER_29"
	, "DLG_RSSDOWNLOADER_30"
	, "DLG_RSSDOWNLOADER_31"
	, "DLG_RSSDOWNLOADER_32"
	, "DLG_RSSDOWNLOADER_33"
	, "DLG_RSSDOWNLOADER_34"
	, "DLG_RSSDOWNLOADER_35"
	, "DLG_RSSDOWNLOADER_36"
	, "FEED_COL_FULLNAME"
	, "FEED_COL_NAME"
	, "FEED_COL_EPISODE"
	, "FEED_COL_FORMAT"
	, "FEED_COL_CODEC"
	, "FEED_COL_DATE"
	, "FEED_COL_FEED"
	, "FEED_COL_URL"
	, "PRS_COL_IP"
	, "PRS_COL_PORT"
	, "PRS_COL_CLIENT"
	, "PRS_COL_FLAGS"
	, "PRS_COL_PCNT"
	, "PRS_COL_RELEVANCE"
	, "PRS_COL_DOWNSPEED"
	, "PRS_COL_UPSPEED"
	, "PRS_COL_REQS"
	, "PRS_COL_WAITED"
	, "PRS_COL_UPLOADED"
	, "PRS_COL_DOWNLOADED"
	, "PRS_COL_HASHERR"
	, "PRS_COL_PEERDL"
	, "PRS_COL_MAXUP"
	, "PRS_COL_MAXDOWN"
	, "PRS_COL_QUEUED"
	, "PRS_COL_INACTIVE"
	, "FI_COL_DONE"
	, "FI_COL_FIRSTPC"
	, "FI_COL_NAME"
	, "FI_COL_NUMPCS"
	, "FI_COL_PCNT"
	, "FI_COL_PRIO"
	, "FI_COL_SIZE"
	, "FI_PRI0"
	, "FI_PRI1"
	, "FI_PRI2"
	, "FI_PRI3"
	, "GN_TP_01"
	, "GN_TP_02"
	, "GN_TP_03"
	, "GN_TP_04"
	, "GN_TP_05"
	, "GN_TP_06"
	, "GN_TP_07"
	, "GN_TP_08"
	, "GN_TP_09"
	, "GN_TP_10"
	, "GN_GENERAL"
	, "GN_TRANSFER"
	, "GN_XCONN"
	, "MAIN_TITLEBAR_SPEED"
	, "MENU_COPY"
	, "MENU_RESET"
	, "MENU_UNLIMITED"
	, "MP_RESOLVE_IPS"
	, "MF_GETFILE"
	, "MF_DONT"
	, "MF_HIGH"
	, "MF_LOW"
	, "MF_NORMAL"
	, "ML_COPY_MAGNETURI"
	, "ML_DELETE_DATA"
	, "ML_DELETE_TORRENT"
	, "ML_DELETE_DATATORRENT"
	, "ML_FORCE_RECHECK"
	, "ML_FORCE_START"
	, "ML_LABEL"
	, "ML_PAUSE"
	, "ML_PROPERTIES"
	, "ML_QUEUEDOWN"
	, "ML_QUEUEUP"
	, "ML_REMOVE"
	, "ML_REMOVE_AND"
	, "ML_START"
	, "ML_STOP"
	, "OV_CAT_ACTIVE"
	, "OV_CAT_ALL"
	, "OV_CAT_COMPL"
	, "OV_CAT_DL"
	, "OV_CAT_INACTIVE"
	, "OV_CAT_NOLABEL"
	, "OV_COL_AVAIL"
	, "OV_COL_DATE_ADDED"
	, "OV_COL_DATE_COMPLETED"
	, "OV_COL_DONE"
	, "OV_COL_DOWNLOADED"
	, "OV_COL_DOWNSPD"
	, "OV_COL_ETA"
	, "OV_COL_LABEL"
	, "OV_COL_NAME"
	, "OV_COL_ORDER"
	, "OV_COL_PEERS"
	, "OV_COL_REMAINING"
	, "OV_COL_SEEDS"
	, "OV_COL_SEEDS_PEERS"
	, "OV_COL_SHARED"
	, "OV_COL_SIZE"
	, "OV_COL_SOURCE_URL"
	, "OV_COL_STATUS"
	, "OV_COL_UPPED"
	, "OV_COL_UPSPD"
	, "OV_CONFIRM_DELETEDATA_MULTIPLE"
	, "OV_CONFIRM_DELETEDATA_ONE"
	, "OV_CONFIRM_DELETE_MULTIPLE"
	, "OV_CONFIRM_DELETE_ONE"
	, "OV_CONFIRM_DELETE_RSSFILTER"
	, "OV_FL_CHECKED"
	, "OV_FL_DOWNLOADING"
	, "OV_FL_ERROR"
	, "OV_FL_FINISHED"
	, "OV_FL_PAUSED"
	, "OV_FL_QUEUED"
	, "OV_FL_QUEUED_SEED"
	, "OV_FL_SEEDING"
	, "OV_FL_STOPPED"
	, "OV_NEWLABEL_CAPTION"
	, "OV_NEWLABEL_TEXT"
	, "OV_NEW_LABEL"
	, "OV_REMOVE_LABEL"
	, "OV_TABS"
	, "OV_TB_ADDTORR"
	, "OV_TB_ADDURL"
	, "OV_TB_PAUSE"
	, "OV_TB_PREF"
	, "OV_TB_QUEUEDOWN"
	, "OV_TB_QUEUEUP"
	, "OV_TB_REMOVE"
	, "OV_TB_RSSDOWNLDR"
	, "OV_TB_START"
	, "OV_TB_STOP"
	, "MM_FILE"
	, "MM_FILE_ADD_TORRENT"
	, "MM_FILE_ADD_URL"
	, "MM_OPTIONS"
	, "MM_OPTIONS_PREFERENCES"
	, "MM_OPTIONS_SHOW_CATEGORY"
	, "MM_OPTIONS_SHOW_DETAIL"
	, "MM_OPTIONS_SHOW_STATUS"
	, "MM_OPTIONS_SHOW_TOOLBAR"
	, "MM_OPTIONS_TAB_ICONS"
	, "MM_HELP"
	, "MM_HELP_UT_WEBPAGE"
	, "MM_HELP_UT_FORUMS"
	, "MM_HELP_WEBUI_FEEDBACK"
	, "MM_HELP_ABOUT_WEBUI"
	, "STM_TORRENTS"
	, "STM_TORRENTS_PAUSEALL"
	, "STM_TORRENTS_RESUMEALL"
	, "SB_DOWNLOAD"
	, "SB_LOCAL"
	, "SB_OVERHEAD"
	, "SB_TOTAL"
	, "SB_UPLOAD"
	, "SIZE_B"
	, "SIZE_EB"
	, "SIZE_GB"
	, "SIZE_KB"
	, "SIZE_MB"
	, "SIZE_PB"
	, "SIZE_TB"
	, "ST_CAPT_ADVANCED"
	, "ST_CAPT_BANDWIDTH"
	, "ST_CAPT_CONNECTION"
	, "ST_CAPT_DISK_CACHE"
	, "ST_CAPT_FOLDER"
	, "ST_CAPT_GENERAL"
	, "ST_CAPT_SCHEDULER"
	, "ST_CAPT_QUEUEING"
	, "ST_CAPT_UI_EXTRAS"
	, "ST_CAPT_UI_SETTINGS"
	, "ST_CAPT_BITTORRENT"
	, "ST_CAPT_WEBUI"
	, "ST_CAPT_TRANSFER_CAP"
	, "ST_CAPT_RUN_PROGRAM"
	, "ST_CBO_UI_DBLCLK_TOR"
	, "ST_CBO_ENCRYPTIONS"
	, "ST_CBO_PROXY"
	, "ST_CBO_TCAP_MODES"
	, "ST_CBO_TCAP_UNITS"
	, "ST_CBO_TCAP_PERIODS"
	, "ST_COL_NAME"
	, "ST_COL_VALUE"
	, "ST_SCH_DAYCODES"
	, "ST_SCH_DAYNAMES"
	, "ST_SCH_LGND_FULL"
	, "ST_SCH_LGND_FULLEX"
	, "ST_SCH_LGND_LIMITED"
	, "ST_SCH_LGND_LIMITEDEX"
	, "ST_SCH_LGND_SEEDING"
	, "ST_SCH_LGND_SEEDINGEX"
	, "ST_SCH_LGND_OFF"
	, "ST_SCH_LGND_OFFEX"
	, "ST_SEEDTIMES_HOURS"
	, "ST_SEEDTIMES_IGNORE"
	, "ST_SEEDTIMES_MINUTES"
	, "TIME_DAYS_HOURS"
	, "TIME_HOURS_MINS"
	, "TIME_MINS_SECS"
	, "TIME_SECS"
	, "TIME_WEEKS_DAYS"
	, "TIME_YEARS_WEEKS"
].invert();

var LANG_LIST = {
	  "ar"   : "Arabic"
	, "be"   : "Belarusian"
	, "bg"   : "Bulgarian"
	, "bs"   : "Bosnian"
	, "ca"   : "Catalan"
	, "cs"   : "Czech"
	, "da"   : "Danish"
	, "de"   : "German"
	, "el"   : "Greek"
	, "en"   : "English"
	, "es"   : "Spanish"
	, "et"   : "Estonian"
	, "fi"   : "Finnish"
	, "fr"   : "French"
	, "fyNL" : "Frisian"
	, "ga"   : "Gaeilge"
	, "gl"   : "Galician"
	, "he"   : "Hebrew"
	, "hu"   : "Hungarian"
	, "is"   : "Icelandic"
	, "it"   : "Italian"
	, "ja"   : "Japanese"
	, "ka"   : "Georgian"
	, "ko"   : "Korean"
	, "lt"   : "Lithuanian"
	, "lv"   : "Latvian"
	, "nl"   : "Dutch"
	, "nnNO" : "Norwegian Nynorsk"
	, "no"   : "Norwegian"
	, "pl"   : "Polish"
	, "pt"   : "Portuguese (Portugal)"
	, "ptBR" : "Portuguese (Brazil)"
	, "ro"   : "Romanian"
	, "ru"   : "Russian"
	, "sk"   : "Slovak"
	, "sl"   : "Slovenian"
	, "sq"   : "Albanian"
	, "srSR" : "Serbian (Cyrillic)"
	, "sv"   : "Swedish"
	, "th"   : "Thai"
	, "tr"   : "Turkish"
	, "tw"   : "Taiwan"
	, "uk"   : "Ukrainian"
	, "va"   : "Valencian"
	, "vi"   : "Vietnamese"
	, "zhCN" : "Chinese (Simplified)"
	, "zhTW" : "Chinese (Traditional)"
};

function _(id, index) {
	var str = LANG_STR[LANG_CONST[id]];

	if (typeof(str) === 'undefined') {
		return "[ UNRECOGNIZED STRING ID: '" + id + "' ]";
	}

	if (typeof(index) === 'number' && index >= 1) {
		str = str.split("||");

		if (index > str.length) {
			index = str.length - 1;
		}

		return str[index];
	}

	return str;
}
