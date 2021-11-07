<!DOCTYPE html>
<html lang="de">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Zotero Example with JavaScript</title>
        <link rel="stylesheet" type="text/css" href="style.css" />
        <script src="https://www.w3schools.com/lib/w3data.js"></script>
    </head>
    <body>
        <h1>Hello World!</h1>
        <div w3-include-html="https://api.zotero.org/groups/4472460/collections/FK3UWFVP/items/top?format=bib&style=geistes-und-kulturwissenschaften-heilmann&linkwrap=1"></div>
        <script>
            w3IncludeHTML("https://api.zotero.org/groups/4472460/collections/FK3UWFVP/items/top?format=bib&style=geistes-und-kulturwissenschaften-heilmann&linkwrap=1");
        </script>
    </body>
</html>
