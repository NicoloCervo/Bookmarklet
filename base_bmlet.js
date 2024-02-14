javascript: (() => {
    constdocumentHTML = document.documentElement.outerHTML;
    constmatches = documentHTML.matchAll(/[\w.+=~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*/g);
    const flatMatches = Array.from(matches).map((item) => item[0]);
    const uniqueMatches = Array.from(new Set(flatMatches));
    if (uniqueMatches.length > 0) {
        const result = uniqueMatches.join('\n');
        alert(result);
    } else {
        alert('No emails found!');
    }
})();
