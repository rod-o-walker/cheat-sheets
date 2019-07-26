function addPage(topic) {
    let title = prompt(`Enter page title ...`);
    let encodedTitle = title.toLowerCase().replace(/\s+/, '-');
    let filename = `${encodedTitle}.md`;
    let content = [
        '---',
        'layout: topic-page',
        `topic: ${topic}`,
        `permalink: /${topic}/${encodedTitle}`,
        `title: ${title}`,
        'summary: INSERT SUMMARY HERE',
        '---'
    ].join('\n');
    let url = `https://github.com/rod-o-walker/cheat-sheets/new/master/topics?filename=topics/${topic}/${filename}&value=${encodeURI(content)}`;

    window.open(url, '_blank');
}

function editPage(permalink) {
    let url = `https://github.com/rod-o-walker/cheat-sheets/edit/master/topics/${permalink}.md`;
    window.open(url, '_blank');
}
