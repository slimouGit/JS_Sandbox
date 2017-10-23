/**
 *   The main class containing the point of entry.
 */
class Mfg {
    /**
     *   The application's point of entry.
     */
    public static main():void
    {
        let myValue: string;
        myValue = 'my first TypeScript';
        console.log(myValue);

        Mfg.setDocumentTitle();
    }
    //--------------------------------------------------------------------------------------------------------------

    /**
     *   Dynamically sets the document's title.
     */
    private static setDocumentTitle():void
    {
        document.title = "TypeScript Minimal Primer, (c) 2017 Mayflower GmbH, v. 1.0";
    }
    //--------------------------------------------------------------------------------------------------------------

    /**
     *   Dynamically applies css to the HTML body tag.
     */
    private static styleHtmlBody():void
    {
        let style:CSSStyleDeclaration = document.body.style;

        style.backgroundColor = "green;
        style.textAlign       = "center";
        style.margin          = "25px";
    }
    //--------------------------------------------------------------------------------------------------------------
}

/**
 * Being invoked when the application starts.
 */
window.onload = function()
{
    Mfg.main();
    Mfg.styleHtmlBody();
};
