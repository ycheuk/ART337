document.addEventListener("DOMContentLoaded", function () {
    showContent('overview');
});

function showContent(section) {
    const contentContainer = document.getElementById('contentContainer');
    const overviewContent = document.getElementById('overview-content');
    const interviewsContent = document.getElementById('interviews-content');
    const gingerbreadContent = document.getElementById('gingerbread-content');
    const subjectcContent = document.getElementById('subjectc-content');
    const genshinContent = document.getElementById('genshin-content');
    const teamsContent = document.getElementById('teams-content');
    const conclusionContent = document.getElementById('conclusion-content');

    if (section === 'overview') {
        overviewContent.style.display = 'flex';
        interviewsContent.style.display = 'none';
        gingerbreadContent.style.display = 'none';
        subjectcContent.style.display = 'none';
        genshinContent.style.display = 'none';
        teamsContent.style.display = 'none';
        conclusionContent.style.display = 'none';
    } else if (section === 'interviews') {
        overviewContent.style.display = 'none';
        interviewsContent.style.display = 'block';
        gingerbreadContent.style.display = 'none';
        subjectcContent.style.display = 'none';
        genshinContent.style.display = 'none';
        teamsContent.style.display = 'none';
        conclusionContent.style.display = 'none';
    } else if (section === 'gingerbread') {
        overviewContent.style.display = 'none';
        interviewsContent.style.display = 'none';
        gingerbreadContent.style.display = 'flex';
        subjectcContent.style.display = 'none';
        genshinContent.style.display = 'none';
        teamsContent.style.display = 'none';
        conclusionContent.style.display = 'none';
    } else if (section === 'subjectc') {
        overviewContent.style.display = 'none';
        interviewsContent.style.display = 'none';
        gingerbreadContent.style.display = 'none';
        subjectcContent.style.display = 'flex';
        genshinContent.style.display = 'none';
        teamsContent.style.display = 'none';
        conclusionContent.style.display = 'none';
    } else if (section === 'teams') {
        overviewContent.style.display = 'none';
        interviewsContent.style.display = 'none';
        gingerbreadContent.style.display = 'none';
        subjectcContent.style.display = 'none';
        genshinContent.style.display = 'none';
        teamsContent.style.display = 'flex';
        conclusionContent.style.display = 'none';
    } else if (section === 'genshin') {
        overviewContent.style.display = 'none';
        interviewsContent.style.display = 'none';
        gingerbreadContent.style.display = 'none';
        subjectcContent.style.display = 'none';
        genshinContent.style.display = 'none';
        genshinContent.style.display = 'block';
        teamsContent.style.display = 'none';
        conclusionContent.style.display = 'none';
    } else if (section === 'conclusion') {
        overviewContent.style.display = 'none';
        interviewsContent.style.display = 'none';
        gingerbreadContent.style.display = 'none';
        subjectcContent.style.display = 'none';
        genshinContent.style.display = 'none';
        genshinContent.style.display = 'none';
        teamsContent.style.display = 'none';
        conclusionContent.style.display = 'flex';
    } else {
        overviewContent.style.display = 'none';
        interviewsContent.style.display = 'none';
        gingerbreadContent.style.display = 'none';
        subjectcContent.style.display = 'none';
        teamsContent.style.display = 'none';
        conclusionContent.style.display = 'none';

        let sectionContent = '';
        switch(section) {
            case 'genshin':
                sectionContent = 'Your genshin Content Here...';
                break;
            default:
                sectionContent = 'Default Content';
        }
        contentContainer.innerHTML = sectionContent;
    }
}
