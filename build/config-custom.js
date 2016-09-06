sofia.config = $.extend(sofia.config, {

	settingsPrefix: '20160325',
	// first load
	windows: [
		{type: 'bible', data: {textid: 'ENGNIV', fragmentid: 'JN6_66'}},
		{type: 'bible', data: {textid: 'ENGNAS', fragmentid: 'JN6_66'}},
		{type: 'search', data: {textid: 'ENGNIV', searchtext:'words of life'}}
	],
	serverSearchPath: 'search.php',
	aboutPagePath: 'http://Bible.cloud/study/about.html',
	enableBibleSelectorTabs: true,
	textsIndexPath: 'dbs_texts.json',
bibleSelectorDefaultList: ["ARZVDV","CHNCU1","CHNNCS","CHNCUV","CHNNCT","ENGESV","ENGNAS","ENGKJV", "ENGHCS","ENGNIV","ENGNET","ENGWEB","GRCTIS","HNDWTC","HBOWLC","PORJFA","RU1IBS","SPNR60","SPNBLA"],
	// Enables the use of online sources (Google Maps, FCBH, Jesus Film, etc.)
	enableOnlineSources: true,


    newCommentaryWindowTextId: "comm_eng_tske",

    // Faith Comes by Hearing
    fcbhKey: '111a125057abd2f8931f6d6ad9f2921f',
    jfmKey: '52b06248a3c6e8.12980089',
    gaKey: 'UA-3734687-19',


    fcbhTextExclusions: ['ALSSHQ', 'ARZVDV', 'ARAWBT', 'BNGWTC', 'BZJWBT', 'MOPWBT', 'BBASIM', 'TBZSIM', 'FUESIM', 'FUHSIM', 'DOPSIM', 'MKLSIM', 'SOYSIM', 'CAVWBT', 'CAOWBT', 'CAPSBB', 'CAXSBB', 'ESEWBT', 'GUISBU', 'GNWWBT', 'GYRWBT', 'IGNSBB', 'QULSBB', 'QUHSBB', 'SRIWBT', 'TNAWBT', 'NHRBSB', 'APYWBT', 'APNWBT', 'APUWBT', 'BKQWBT', 'GUBWBT', 'HIXWBT', 'URBWBT', 'KBCWBT', 'KGPWBT', 'KGKWBT', 'KPJWBT', 'KYZWBT', 'TXUTBL', 'MBCWBT', 'MBLWBT', 'GUNWBT', 'MYUWBT', 'MBJWBT', 'NABWBT', 'PABTBL', 'PADWBT', 'RKBWBT', 'MAVWBT', 'PAHTBL', 'TERTBL', 'TUOWBT', 'XAVTBL', 'BOXWYI', 'CMEWBT', 'BSSWBT', 'ANVWBT', 'KENWBT', 'MQBWBT', 'NHUWBT', 'ALQCBS', 'CRXWBT', 'CAFWBT', 'DGRCBS', 'MICCBS', 'BJVWBT', 'DAAWYI', 'ARNSBU', 'CHNWTS', 'CHNCU1', 'CHNNCS', 'CHNCUV', 'CHNNCT', 'KWIWBT', 'BSNTBL', 'CBVWBT', 'KBHWBT', 'CBCWBT', 'TUFWBT', 'CUBWBT', 'CUIWBT', 'SJAWBT', 'GUHWBT', 'GUMTBL', 'GVCWBT', 'GUOWBT', 'INBWBT', 'MYYWBT', 'HTOWBT', 'BMRWBT', 'PIOWBT', 'PIRWBT', 'SNNWBT', 'TNCWBT', 'TAVWBT', 'TUEWBT', 'BAOWBT', 'NOAWBE', 'NOAWBT', 'YCNWBT', 'BZDWBT', 'YREWBT', 'CESKMS', 'CESNKB', 'CBIWBT', 'CONWBT', 'COFWBT', 'QVZWBT', 'SEYWBT', 'JIVAIE', 'AUCWBT', 'COPSHC', 'COPBHC', 'COPCNT', 'ENGASV', 'ENGBBE', 'ENGDBY', 'ENGDRV', 'ENGESV', 'ENGKJV', 'ENGLXX12', 'ENGNAS', 'ENGNET', 'ENGNIV', 'ENGRV5', 'ENGAMP', 'ENGT4T', 'ENGWEB', 'ENGWEBUK', 'AMHAMH', 'AMFSIM', 'DWRENT', 'DWRTBL', 'GMVTBL', 'GMVWBT', 'GO1TBL', 'GOFTBL', 'WALSIM', 'BREBRG', 'FRAOST', 'FRELSG', 'GERL12', 'NCUWBT', 'NKOWBT', 'GRCSBL', 'GRCTIS', 'CHAPGA', 'ACRWBT', 'ACRTNT', 'ACCIBS', 'AGUNVS', 'KNJWBT', 'CAAWBT', 'IXIWBT', 'IXLWBT', 'JACWBT', 'CAKSOU', 'CAKSWY', 'CAKSBG', 'CAKSMJ', 'CAKWES', 'CAKSDS', 'CAKEAS', 'QUCTRA', 'QUCNEW', 'MAMSBG', 'MAMCOM', 'POHBSG', 'KEKIBS', 'TTCWBT', 'TZJEAS', 'TZJWES', 'USPWBT', 'SUSPBT', 'YALPBT', 'AKEBSS', 'WAPWBT', 'HBOMAS', 'HBOWLC', 'CABNVS', 'JICWBT', 'HNDWTC', 'GUJWTC', 'TCVWTC', 'TCWWTC', 'KANWTC', 'ALPWBT', 'BLZLAI', 'PTULAI', 'HEGWBT', 'KJEWBT', 'MKNUBB', 'LEXWBT', 'MQJWBT', 'NBQWBT', 'YVATBL', 'AZBBSA', 'GLKWBT', 'PESPBS', 'AIIABT', 'SPYWBT', 'SXBWBT', 'AMUWBT', 'AZGTBL', 'CTAWBT', 'CTPWBT', 'CCOTBL', 'CNLTBL', 'CLETBL', 'CHZWBT', 'CPATBL', 'CHQWBT', 'CSOTBL', 'CNTTBL', 'CUCTBL', 'CTUWBT', 'CHDWBT', 'CHFTBL', 'CRNWBT', 'CUXWBT', 'CUTWBT', 'HUSWBT', 'HUSTBL', 'HUVTBL', 'HCHWBT', 'LACTBL', 'MAZTBL', 'MAQTBL', 'MAUWBT', 'MAJBTT', 'MAASJV', 'VMYWBT', 'MCOTBL', 'MIRTBL', 'MXQTBL', 'MXPWBT', 'MTOWBT', 'MIBWBT', 'MIHWBT', 'MIZTBL', 'XTDTBL', 'MXTTBL', 'XTMWBT', 'MIETBL', 'MILTBL', 'MIOWBT', 'MJCWBT', 'MIGWBT', 'MKSTBL', 'MITTBL', 'MXBMVR', 'MPMTBL', 'NHWTBL', 'NHEWBT', 'NGUTBL', 'AZZTBL', 'NCHTBL', 'NHETBL', 'NCLTBL', 'NHYTBL', 'NCJTBL', 'NPLWYI', 'NHGWBT', 'NHIWBT', 'OTMWBT', 'OTSWBT', 'OTETBL', 'OTQTBL', 'OTNWBT', 'POETBL', 'PLSWBT', 'POIWBT', 'TACWBT', 'TEETBL', 'TPTWBT', 'NTPTBL', 'STPTBL', 'TOJWBT', 'TOCTBL', 'TOSTBL', 'TOPWBT', 'TKUWBT', 'TOOWBT', 'TRCTBL', 'TZOSAN', 'TZOHUI', 'TZOZIN', 'YAQTBL', 'ZPOTBL', 'ZADWBT', 'ZPVTBL', 'ZPCWBT', 'ZCAWYI', 'ZAITBL', 'ZPLTBL', 'ZAMILM', 'ZAWMVR', 'ZPMTBL', 'ZACSIM', 'ZAOTBL', 'ZTQTBL', 'ZARTBL', 'ZABTBL', 'ZPIWYI', 'ZASWYI', 'ZAATBL', 'ZSRWBT', 'ZATWBT', 'ZPZTBL', 'ZPUTBL', 'ZTYTBL', 'ZAVTBL', 'ZPQTBL', 'ZOSTBL', 'CHKBSM', 'KPGKPT', 'KOSPUB', 'PONPJA', 'PONPSA', 'PONSSP', 'EKOWBT', 'MGHWBT', 'NYUWBT', 'SEHWBT', 'TKEWBT', 'MYAOJV', 'ZYPWBT', 'ATBWBT', 'LIFWBT', 'LIFDEV', 'SUZWBT', 'NPLWTC', 'PRIWBT', 'BQPSIM', 'BQCSIM', 'BUSSIM', 'IKKWBT', 'IKWWBT', 'KDLWBT', 'TSWWBT', 'SABWBT', 'EMPWYI', 'KVNWBT', 'GYMWBT', 'CUKNVS', 'TFRWBT', 'AAUWBT', 'ADZPNG', 'AGDWBT', 'AMPWBT', 'GAHPNG', 'AMNANA', 'AMNNAI', 'ABTMAP', 'ABTWOS', 'AEYWBT', 'APZPNG', 'ABYWBT', 'AGMPNG', 'AKHBSP', 'AAIWBT', 'AAKWBT', 'AGGPNG', 'BOJPNG', 'AUIWBT', 'AONWBT', 'TBGNOR', 'MWCWBT', 'APRWBT', 'MSYPNG', 'AVTWBT', 'KUDPNG', 'AWBTBL', 'AWXWBT', 'AUYTBL', 'BBBTBL', 'MLPTBL', 'BCHPNG', 'BEFWBT', 'BIGTBL', 'BHLPNG', 'BONPNG', 'BJRWBT', 'BNPWBT', 'KSRPNG', 'MUXTBL', 'BZHPNG', 'BUKLBT', 'APETBL', 'BDDPNG', 'BMUPNG', 'CJVTBL', 'MPSTBL', 'DGZWBT', 'ASOTBL', 'DWWTBL', 'DEDWBT', 'DOBPNG', 'KQCWBT', 'KJSWBT', 'ETRTBL', 'ENQPN2', 'ENQPNG', 'NOUTBL', 'FAIPNG', 'FAAWBT', 'AOJFIL', 'PPOWBT', 'FORNYB', 'PWGGTT', 'BMKWBT', 'BBRWBT', 'GVFWBT', 'GHSWBT', 'DAHPNG', 'HLAPNG', 'WOSWBT', 'HMOPNG', 'HOTWBT', 'HUIPNG', 'YMLTBL', 'VIVWBT', 'IMOTBL', 'INOTBL', 'IPIPNG', 'KBMTBL', 'NCAWBT', 'JAEPNG', 'KQFWBT', 'KMHKAL', 'KHZPNG', 'BCOWBT', 'KBQWBT', 'KMSPNG', 'XLAPNG', 'SOQWBT', 'KQWWIN', 'GAMWBT', 'KMUTBL', 'LEUPNG', 'YUJTBL', 'RWOKAR', 'KMPPNG', 'BMHWBT', 'KYGTBL', 'GEBPBT', 'KPWPNG', 'KPFPNG', 'XBIWAM', 'XBIYAN', 'KPRTBL', 'KZEWBT', 'KSDPNG', 'KUEPNG', 'KUPTBL', 'KTOPNG', 'KWJWBT', 'KYCPNG', 'LBBWBT', 'UVLWBT', 'MMXTBL', 'MZZWBT', 'MTITBL', 'MCQSPP', 'MVAPNG', 'MMOWBT', 'MBHTBL', 'MLHPNG', 'DADWBT', 'MHLPNG', 'MNAPNG', 'MEKPNG', 'MEDPNG', 'SIMPNG', 'MEETBL', 'MPTTBL', 'MPPWBT', 'MVNJLB', 'KMHMIN', 'MPXPNG', 'MOXFNS', 'KGFGBT', 'MEUPNG', 'KPXTBL', 'AOJTBL', 'EMIWBT', 'MYWPNG', 'NASPNG', 'NAFTBL', 'NAKTBL', 'NSSWBT', 'NVMWBT', 'NSNWBT', 'NIFWBT', 'IANWBT', 'NIITBL', 'GAWWBT', 'KLTWBT', 'NOPNTT', 'LIDWBT', 'KKCWBT', 'OPMTBL', 'ONGTBL', 'AOMTBL', 'OMWAAT', 'OMWSTA', 'ONSPNG', 'OKVTBL', 'PTPTBL', 'GFKTBL', 'ATAPNG', 'BYXPNG', 'RAITBL', 'RWORAW', 'ROOTBL', 'SBEWBT', 'SLLTBL', 'SNYTBL', 'SPSTBL', 'TUCOOV', 'TUCTUA', 'AMMTBL', 'SSGWBT', 'SPLPNG', 'SSXPNG', 'IWSTBL', 'SNPKOM', 'SNPLAM', 'SNCPNG', 'XSITBL', 'SSDWBT', 'SWPPNG', 'SUEWBT', 'SUKTBL', 'SGZWBT', 'KNVARA', 'KNVPNG', 'TBGWBT', 'TBCPNG', 'TGGWBT', 'TPAWBT', 'TBOWBT', 'TAWPBT', 'TLFTBL', 'TIFWBT', 'TIMTBL', 'TPIPNG', 'WEDTOP', 'TTETBL', 'IOUTBL', 'LCMPNG', 'UBRTBL', 'GDNPNG', 'UBUAND', 'UBUKAL', 'UBUNOP', 'WNUPNG', 'USAWBT', 'TPZWBT', 'OMWVEQ', 'WAJWBT', 'RROPNG', 'WRSPNG', 'WNCPNG', 'KMOBIL', 'WSKPNG', 'WEDWBT', 'WERTBL', 'KEWPNG', 'GDRPNG', 'WIUTBL', 'WUVWBT', 'YRBTBL', 'YUWPNG', 'YBYWBT', 'YSSYAW', 'YLETBL', 'YSSYAM', 'BYRPNG', 'BYRWAG', 'YONPNG', 'YUTWBT', 'ZIATBL', 'MCAWBT', 'ACUTBL', 'AGRTBL', 'CPCWBT', 'AMRWBT', 'ARLWBT', 'CNIWBT', 'CJOWBT', 'CPUWBT', 'CPBWBT', 'BOATBL', 'CBUWBT', 'KAQWBT', 'COTTBL', 'CBRWBT', 'CBTWBT', 'QUBWBT', 'HUBWBT', 'HUUWBT', 'CBSWBT', 'MCBWBT', 'MCFWBT', 'NOTWBT', 'QVCTBL', 'QVETBL', 'QVHWBT', 'QWHLLB', 'QVWWBT', 'QUFLLB', 'QVMTBL', 'QVNLLB', 'QXNWBT', 'QXHWBT', 'QVSTBL', 'QXOWBT', 'QUPWBT', 'MCDWBT', 'SHPTBL', 'TCATBL', 'URATBL', 'YADTBL', 'YAATBL', 'AMETBL', 'PIBWBT', 'AGNWPS', 'BLWWBT', 'BKDWBT', 'SMKWBT', 'CLUWBT', 'CBKWBT', 'EBKWBT', 'ABXWBT', 'CGCWBT', 'BPRWBT', 'MSMWPS', 'ATDWBT', 'MBTWBT', 'OBOWBT', 'MBBWPS', 'ATTWBT', 'PRFWBT', 'BGSWBT', 'TBLWBT', 'RUSBIB', 'ACFWBT', 'KWDWBT', 'SOMSIM', 'AFRA53', 'SPNBLA', 'SPNNBL', 'SPNR09', 'DIKWBT', 'UDUSIM', 'CARWBT', 'DJKWBT', 'HNSWBT', 'JVNWBT', 'SRMWBT', 'SRNBSS', 'TGKIBT', 'SWASWA', 'CWEPBT', 'RUFPBT', 'KDEWBT', 'POYPBT', 'GNGWYI', 'TONPNG', 'GWIWBT', 'HWCWBT', 'HOPWBT', 'PAONAB', 'GULWBT', 'OODWBT', 'APWWBT', 'ESKWBT', 'KLVWBT', 'TNKWBT', 'TNNWBT', 'PMAWBT', 'TVKWBT', 'NWIWBT', 'TGPWBT', 'TNPWBT', 'LATCLV', 'VIETBL'],

    enableFeedback: false,
    "eng2pEnableAll": false
});
