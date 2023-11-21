document.addEventListener('DOMContentLoaded', function () {
    const surveyForm = document.getElementById('survey-form');
    const summaryContainer = document.getElementById('summary-container');
    const summary = document.getElementById('summary');

    surveyForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const formData = new FormData(surveyForm);
        let summaryHTML = '<h2>Survey Summary</h2>';

        formData.forEach((value, key) => {
            summaryHTML += `<p><strong>${key}:</strong> ${value}</p>`;
        });

        summary.innerHTML = summaryHTML;
        surveyForm.style.display = 'none';
        summaryContainer.style.display = 'block';
    });
});
