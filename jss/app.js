document.addEventListener('DOMContentLoaded', () => {
    initializeCard();
});

function initializeCard() {
    // Set personal information
    document.getElementById('name').textContent = config.personal.name;
    document.getElementById('title').textContent = config.personal.jobTitle;
    
    // Set social media links
    document.getElementById('facebook').href = config.social.facebook;
    document.getElementById('twitter').href = config.social.twitter;
    document.getElementById('linkedin').href = config.social.linkedin;
}

function saveContact() {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:${config.personal.name}
TITLE:${config.personal.jobTitle}
TEL:${config.personal.phone}
EMAIL:${config.personal.email}
URL:${config.personal.website}
ADR:;;${config.office.address}
ORG:${config.company.name}
END:VCARD`;

    const blob = new Blob([vcard], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${config.personal.name.replace(/\s+/g, '_')}.vcf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
}

function navigateToOffice() {
    window.open(config.office.googleMapsUrl, '_blank');
}

function bookAppointment() {
    window.open(config.booking.calendlyUrl, '_blank');
}