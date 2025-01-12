document.addEventListener('DOMContentLoaded', () => {
    // Load user data
    loadUserData();
});

function loadUserData() {
    // Set text content
    document.getElementById('userName').textContent = config.name;
    document.getElementById('jobTitle').textContent = config.jobTitle;
    document.getElementById('company').textContent = config.company;

    // Set social links
    document.getElementById('githubLink').href = config.social.github;
    document.getElementById('linkedinLink').href = config.social.linkedin;
    document.getElementById('websiteLink').href = config.social.website;
}

function saveContact() {
    const vCard = generateVCard();
    const blob = new Blob([vCard], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${config.vcard.firstName}_${config.vcard.lastName}.vcf`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
}

function generateVCard() {
    return `BEGIN:VCARD
VERSION:3.0
N:${config.vcard.lastName};${config.vcard.firstName};;;
FN:${config.vcard.firstName} ${config.vcard.lastName}
ORG:${config.vcard.organization}
TITLE:${config.vcard.title}
TEL;TYPE=WORK,VOICE:${config.vcard.workPhone}
EMAIL;TYPE=WORK:${config.vcard.workEmail}
URL:${config.vcard.url}
ADR;TYPE=WORK:;;${config.vcard.workAddress};;;;
END:VCARD`;
}

function callMe() {
    window.location.href = `tel:${config.phone}`;
}

function emailMe() {
    window.location.href = `mailto:${config.email}`;
}

function navigateToOffice() {
    window.open(config.officeLocation, '_blank');
}

function visitWebsite() {
    window.open(config.website, '_blank');
}

function bookAppointment() {
    window.open(config.bookingUrl, '_blank');
}