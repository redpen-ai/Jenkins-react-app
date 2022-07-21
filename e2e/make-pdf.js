// babel version
const path = require("path") ;

let printPdf = require('@rpii/wdio-html-reporter-pdf').default ;

(async () => {
    let args = process.argv.slice(2) ;
    let reportName = args[0] ? args[0] : "E2E-report";

    try {
        // need full paths
        let htmlReportFile = path.resolve(__dirname, '../reports/html-reports/' + reportName + '.html');
        console.log(htmlReportFile);
        let pdfFile = path.resolve(__dirname, '../reports/' + reportName + '.pdf');
        //for linux you will need these options
        let options = ['--no-sandbox', '--disable-gpu', '--disable-extensions'];
        await printPdf(htmlReportFile, pdfFile, options);
    } catch (ex)  {
        console.error(ex);
    }
})();
