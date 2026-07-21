export const NAV_ITEMS:{href:string;label:string}[]=[
    { href: '/',label:'Dashboard'},
    { href: '/search', label: 'Search' },
    { href: '/watchlist',label:'watchlist'},
]

export const MARKET_OVERVIEW_WIDGET_CONFIG={
    "allow_symbol_change": true,
        "calendar": false,
        "details": false,
        "hide_side_toolbar": true,
        "hide_top_toolbar": false,
        "hide_legend": false,
        "hide_volume": false,
        "hotlist": false,
        "interval": "D",
        "locale": "en",
        "save_image": true,
        "style": "1",
        "symbol": "NASexport const NAV_ITEMS = [\n" +
            "    { href: '/', label: 'Dashboard' },\n" +
            "    { href: '/search', label: 'Search' },\n" +
            "    // { href: '/watchlist', label: 'Watchlist' },\n" +
            "];\n" +
            "\n" +
            "// Sign-up form select options\n" +
            "export const INVESTMENT_GOALS = [\n" +
            "    { value: 'Growth', label: 'Growth' },\n" +
            "    { value: 'Income', label: 'Income' },\n" +
            "    { value: 'Balanced', label: 'Balanced' },\n" +
            "    { value: 'Conservative', label: 'Conservative' },\n" +
            "];\n" +
            "\n" +
            "export const RISK_TOLERANCE_OPTIONS = [\n" +
            "    { value: 'Low', label: 'Low' },\n" +
            "    { value: 'Medium', label: 'Medium' },\n" +
            "    { value: 'High', label: 'High' },\n" +
            "];\n" +
            "\n" +
            "export const PREFERRED_INDUSTRIES = [\n" +
            "    { value: 'Technology', label: 'Technology' },\n" +
            "    { value: 'Healthcare', label: 'Healthcare' },\n" +
            "    { value: 'Finance', label: 'Finance' },\n" +
            "    { value: 'Energy', label: 'Energy' },\n" +
            "    { value: 'Consumer Goods', label: 'Consumer Goods' },\n" +
            "];\n" +
            "\n" +
            "export const ALERT_TYPE_OPTIONS = [\n" +
            "    { value: 'upper', label: 'Upper' },\n" +
            "    { value: 'lower', label: 'Lower' },\n" +
            "];\n" +
            "\n" +
            "export const CONDITION_OPTIONS = [\n" +
            "    { value: 'greater', label: 'Greater than (>)' },\n" +
            "    { value: 'less', label: 'Less than (<)' },\n" +
            "];\n" +
            "\n" +
            "// TradingView Charts\n" +
            "export const MARKET_OVERVIEW_WIDGET_CONFIG = {\n" +
            "    colorTheme: 'dark', // dark mode\n" +
            "    dateRange: '12M', // last 12 months\n" +
            "    locale: 'en', // language\n" +
            "    largeChartUrl: '', // link to a large chart if needed\n" +
            "    isTransparent: true, // makes background transparent\n" +
            "    showFloatingTooltip: true, // show tooltip on hover\n" +
            "    plotLineColorGrowing: '#0FEDBE', // line color when price goes up\n" +
            "    plotLineColorFalling: '#0FEDBE', // line color when price falls\n" +
            "    gridLineColor: 'rgba(240, 243, 250, 0)', // grid line color\n" +
            "    scaleFontColor: '#DBDBDB', // font color for scale\n" +
            "    belowLineFillColorGrowing: 'rgba(41, 98, 255, 0.12)', // fill under line when growing\n" +
            "    belowLineFillColorFalling: 'rgba(41, 98, 255, 0.12)', // fill under line when falling\n" +
            "    belowLineFillColorGrowingBottom: 'rgba(41, 98, 255, 0)',\n" +
            "    belowLineFillColorFallingBottom: 'rgba(41, 98, 255, 0)',\n" +
            "    symbolActiveColor: 'rgba(15, 237, 190, 0.05)', // highlight color for active symbol\n" +
            "    tabs: [\n" +
            "        {\n" +
            "            title: 'Financial',\n" +
            "            symbols: [\n" +
            "                { s: 'NYSE:JPM', d: 'JPMorgan Chase' },\n" +
            "                { s: 'NYSE:WFC', d: 'Wells Fargo Co New' },\n" +
            "                { s: 'NYSE:BAC', d: 'Bank Amer Corp' },\n" +
            "                { s: 'NYSE:HSBC', d: 'Hsbc Hldgs Plc' },\n" +
            "                { s: 'NYSE:C', d: 'Citigroup Inc' },\n" +
            "                { s: 'NYSE:MA', d: 'Mastercard Incorporated' },\n" +
            "            ],\n" +
            "        },\n" +
            "        {\n" +
            "            title: 'Technology',\n" +
            "            symbols: [\n" +
            "                { s: 'NASDAQ:AAPL', d: 'Apple' },\n" +
            "                { s: 'NASDAQ:GOOGL', d: 'Alphabet' },\n" +
            "                { s: 'NASDAQ:MSFT', d: 'Microsoft' },\n" +
            "                { s: 'NASDAQ:FB', d: 'Meta Platforms' },\n" +
            "                { s: 'NYSE:ORCL', d: 'Oracle Corp' },\n" +
            "                { s: 'NASDAQ:INTC', d: 'Intel Corp' },\n" +
            "            ],\n" +
            "        },\n" +
            "        {\n" +
            "            title: 'Services',\n" +
            "            symbols: [\n" +
            "                { s: 'NASDAQ:AMZN', d: 'Amazon' },\n" +
            "                { s: 'NYSE:BABA', d: 'Alibaba Group Hldg Ltd' },\n" +
            "                { s: 'NYSE:T', d: 'At&t Inc' },\n" +
            "                { s: 'NYSE:WMT', d: 'Walmart' },\n" +
            "                { s: 'NYSE:V', d: 'Visa' },\n" +
            "            ],\n" +
            "        },\n" +
            "    ],\n" +
            "    support_host: 'https://www.tradingview.com', // TradingView host\n" +
            "    backgroundColor: '#141414', // background color\n" +
            "    width: '100%', // full width\n" +
            "    height: 600, // height in px\n" +
            "    showSymbolLogo: true, // show logo next to symbols\n" +
            "    showChart: true, // display mini chart\n" +
            "};\n" +
            "\n" +
            "export const HEATMAP_WIDGET_CONFIG = {\n" +
            "    dataSource: 'SPX500',\n" +
            "    blockSize: 'market_cap_basic',\n" +
            "    blockColor: 'change',\n" +
            "    grouping: 'sector',\n" +
            "    isTransparent: true,\n" +
            "    locale: 'en',\n" +
            "    symbolUrl: '',\n" +
            "    colorTheme: 'dark',\n" +
            "    exchanges: [],\n" +
            "    hasTopBar: false,\n" +
            "    isDataSetEnabled: false,\n" +
            "    isZoomEnabled: true,\n" +
            "    hasSymbolTooltip: true,\n" +
            "    isMonoSize: false,\n" +
            "    width: '100%',\n" +
            "    height: '600',\n" +
            "};\n" +
            "\n" +
            "export const TOP_STORIES_WIDGET_CONFIG = {\n" +
            "    displayMode: 'regular',\n" +
            "    feedMode: 'market',\n" +
            "    colorTheme: 'dark',\n" +
            "    isTransparent: true,\n" +
            "    locale: 'en',\n" +
            "    market: 'stock',\n" +
            "    width: '100%',\n" +
            "    height: '600',\n" +
            "};\n" +
            "\n" +
            "export const MARKET_DATA_WIDGET_CONFIG = {\n" +
            "    title: 'Stocks',\n" +
            "    width: '100%',\n" +
            "    height: 600,\n" +
            "    locale: 'en',\n" +
            "    showSymbolLogo: true,\n" +
            "    colorTheme: 'dark',\n" +
            "    isTransparent: false,\n" +
            "    backgroundColor: '#0F0F0F',\n" +
            "    symbolsGroups: [\n" +
            "        {\n" +
            "            name: 'Financial',\n" +
            "            symbols: [\n" +
            "                { name: 'NYSE:JPM', displayName: 'JPMorgan Chase' },\n" +
            "                { name: 'NYSE:WFC', displayName: 'Wells Fargo Co New' },\n" +
            "                { name: 'NYSE:BAC', displayName: 'Bank Amer Corp' },\n" +
            "                { name: 'NYSE:HSBC', displayName: 'Hsbc Hldgs Plc' },\n" +
            "                { name: 'NYSE:C', displayName: 'Citigroup Inc' },\n" +
            "                { name: 'NYSE:MA', displayName: 'Mastercard Incorporated' },\n" +
            "            ],\n" +
            "        },\n" +
            "        {\n" +
            "            name: 'Technology',\n" +
            "            symbols: [\n" +
            "                { name: 'NASDAQ:AAPL', displayName: 'Apple' },\n" +
            "                { name: 'NASDAQ:GOOGL', displayName: 'Alphabet' },\n" +
            "                { name: 'NASDAQ:MSFT', displayName: 'Microsoft' },\n" +
            "                { name: 'NASDAQ:FB', displayName: 'Meta Platforms' },\n" +
            "                { name: 'NYSE:ORCL', displayName: 'Oracle Corp' },\n" +
            "                { name: 'NASDAQ:INTC', displayName: 'Intel Corp' },\n" +
            "            ],\n" +
            "        },\n" +
            "        {\n" +
            "            name: 'Services',\n" +
            "            symbols: [\n" +
            "                { name: 'NASDAQ:AMZN', displayName: 'Amazon' },\n" +
            "                { name: 'NYSE:BABA', displayName: 'Alibaba Group Hldg Ltd' },\n" +
            "                { name: 'NYSE:T', displayName: 'At&t Inc' },\n" +
            "                { name: 'NYSE:WMT', displayName: 'Walmart' },\n" +
            "                { name: 'NYSE:V', displayName: 'Visa' },\n" +
            "            ],\n" +
            "        },\n" +
            "    ],\n" +
            "};\n" +
            "\n" +
            "export const SYMBOL_INFO_WIDGET_CONFIG = (symbol: string) => ({\n" +
            "    symbol: symbol.toUpperCase(),\n" +
            "    colorTheme: 'dark',\n" +
            "    isTransparent: true,\n" +
            "    locale: 'en',\n" +
            "    width: '100%',\n" +
            "    height: 170,\n" +
            "});\n" +
            "\n" +
            "export const CANDLE_CHART_WIDGET_CONFIG = (symbol: string) => ({\n" +
            "    allow_symbol_change: false,\n" +
            "    calendar: false,\n" +
            "    details: true,\n" +
            "    hide_side_toolbar: true,\n" +
            "    hide_top_toolbar: false,\n" +
            "    hide_legend: false,\n" +
            "    hide_volume: false,\n" +
            "    hotlist: false,\n" +
            "    interval: 'D',\n" +
            "    locale: 'en',\n" +
            "    save_image: false,\n" +
            "    style: 1,\n" +
            "    symbol: symbol.toUpperCase(),\n" +
            "    theme: 'dark',\n" +
            "    timezone: 'Etc/UTC',\n" +
            "    backgroundColor: '#141414',\n" +
            "    gridColor: '#141414',\n" +
            "    watchlist: [],\n" +
            "    withdateranges: false,\n" +
            "    compareSymbols: [],\n" +
            "    studies: [],\n" +
            "    width: '100%',\n" +
            "    height: 600,\n" +
            "});\n" +
            "\n" +
            "export const BASELINE_WIDGET_CONFIG = (symbol: string) => ({\n" +
            "    allow_symbol_change: false,\n" +
            "    calendar: false,\n" +
            "    details: false,\n" +
            "    hide_side_toolbar: true,\n" +
            "    hide_top_toolbar: false,\n" +
            "    hide_legend: false,\n" +
            "    hide_volume: false,\n" +
            "    hotlist: false,\n" +
            "    interval: 'D',\n" +
            "    locale: 'en',\n" +
            "    save_image: false,\n" +
            "    style: 10,\n" +
            "    symbol: symbol.toUpperCase(),\n" +
            "    theme: 'dark',\n" +
            "    timezone: 'Etc/UTC',\n" +
            "    backgroundColor: '#141414',\n" +
            "    gridColor: '#141414',\n" +
            "    watchlist: [],\n" +
            "    withdateranges: false,\n" +
            "    compareSymbols: [],\n" +
            "    studies: [],\n" +
            "    width: '100%',\n" +
            "    height: 600,\n" +
            "});\n" +
            "\n" +
            "export const TECHNICAL_ANALYSIS_WIDGET_CONFIG = (symbol: string) => ({\n" +
            "    symbol: symbol.toUpperCase(),\n" +
            "    colorTheme: 'dark',\n" +
            "    isTransparent: 'true',\n" +
            "    locale: 'en',\n" +
            "    width: '100%',\n" +
            "    height: 400,\n" +
            "    interval: '1h',\n" +
            "    largeChartUrl: '',\n" +
            "});\n" +
            "\n" +
            "export const COMPANY_PROFILE_WIDGET_CONFIG = (symbol: string) => ({\n" +
            "    symbol: symbol.toUpperCase(),\n" +
            "    colorTheme: 'dark',\n" +
            "    isTransparent: 'true',\n" +
            "    locale: 'en',\n" +
            "    width: '100%',\n" +
            "    height: 440,\n" +
            "});\n" +
            "\n" +
            "export const COMPANY_FINANCIALS_WIDGET_CONFIG = (symbol: string) => ({\n" +
            "    symbol: symbol.toUpperCase(),\n" +
            "    colorTheme: 'dark',\n" +
            "    isTransparent: 'true',\n" +
            "    locale: 'en',\n" +
            "    width: '100%',\n" +
            "    height: 464,\n" +
            "    displayMode: 'regular',\n" +
            "    largeChartUrl: '',\n" +
            "});\n" +
            "\n" +
            "export const POPULAR_STOCK_SYMBOLS = [\n" +
            "    // Tech Giants (the big technology companies)\n" +
            "    'AAPL',\n" +
            "    'MSFT',\n" +
            "    'GOOGL',\n" +
            "    'AMZN',\n" +
            "    'TSLA',\n" +
            "    'META',\n" +
            "    'NVDA',\n" +
            "    'NFLX',\n" +
            "    'ORCL',\n" +
            "    'CRM',\n" +
            "\n" +
            "    // Growing Tech Companies\n" +
            "    'ADBE',\n" +
            "    'INTC',\n" +
            "    'AMD',\n" +
            "    'PYPL',\n" +
            "    'UBER',\n" +
            "    'ZOOM',\n" +
            "    'SPOT',\n" +
            "    'SQ',\n" +
            "    'SHOP',\n" +
            "    'ROKU',\n" +
            "\n" +
            "    // Newer Tech Companies\n" +
            "    'SNOW',\n" +
            "    'PLTR',\n" +
            "    'COIN',\n" +
            "    'RBLX',\n" +
            "    'DDOG',\n" +
            "    'CRWD',\n" +
            "    'NET',\n" +
            "    'OKTA',\n" +
            "    'TWLO',\n" +
            "    'ZM',\n" +
            "\n" +
            "    // Consumer & Delivery Apps\n" +
            "    'DOCU',\n" +
            "    'PTON',\n" +
            "    'PINS',\n" +
            "    'SNAP',\n" +
            "    'LYFT',\n" +
            "    'DASH',\n" +
            "    'ABNB',\n" +
            "    'RIVN',\n" +
            "    'LCID',\n" +
            "    'NIO',\n" +
            "\n" +
            "    // International Companies\n" +
            "    'XPEV',\n" +
            "    'LI',\n" +
            "    'BABA',\n" +
            "    'JD',\n" +
            "    'PDD',\n" +
            "    'TME',\n" +
            "    'BILI',\n" +
            "    'DIDI',\n" +
            "    'GRAB',\n" +
            "    'SE',\n" +
            "];\n" +
            "\n" +
            "export const NO_MARKET_NEWS =\n" +
            "    '<p class=\"mobile-text\" style=\"margin:0 0 20px 0;font-size:16px;line-height:1.6;color:#4b5563;\">No market news available today. Please check back tomorrow.</p>';\n" +
            "\n" +
            "export const WATCHLIST_TABLE_HEADER = [\n" +
            "    'Company',\n" +
            "    'Symbol',\n" +
            "    'Price',\n" +
            "    'Change',\n" +
            "    'Market Cap',\n" +
            "    'P/E Ratio',\n" +
            "    'Alert',\n" +
            "    'Action',\n" +
            "];DAQ:AAPL",
        "theme": "dark",
        "timezone": "Etc/UTC",
        "backgroundColor": "#0F0F0F",
        "gridColor": "rgba(242, 242, 242, 0.06)",
        "watchlist": [],
        "withdateranges": false,
        "compareSymbols": [],
        "studies": [],
        "autosize": true
}