/**
 *   The main class containing the point of entry.
 */
var Mfg = (function () {
    function Mfg() {
    }
    /**
     *   The application's point of entry.
     */
    Mfg.main = function () {
        var myValue;
        myValue = 'my first TypeScript';
        console.log(myValue);
        Mfg.setDocumentTitle();
    };
    //--------------------------------------------------------------------------------------------------------------
    /**
     *   Dynamically sets the document's title.
     */
    Mfg.setDocumentTitle = function () {
        document.title = "TypeScript Minimal Primer, (c) 2017 Mayflower GmbH, v. 1.0";
    };
    //--------------------------------------------------------------------------------------------------------------
    /**
     *   Dynamically applies css to the HTML body tag.
     */
    Mfg.styleHtmlBody = function () {
        var style = document.body.style;
        style.backgroundColor = "green;;
        style.textAlign = "center";
        style.margin = "25px";
    };
    return Mfg;
}());
/**
 * Being invoked when the application starts.
 */
window.onload = function () {
    Mfg.main();
    Mfg.styleHtmlBody();
};
//# sourceMappingURL=Mfg.js.map