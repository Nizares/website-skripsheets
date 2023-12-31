document.addEventListener("DOMContentLoaded", function() {
    var abjadButtons = document.querySelectorAll(".abjad-button");

    abjadButtons.forEach(function(abjadButton) {
        abjadButton.addEventListener("click", function() {
            var dataCustom = abjadButton.getAttribute("dataCustom");
            var dataCustom1 = Number(dataCustom);
            let id_abjad = dataCustom1;

            var formData = new FormData();
            formData.append("id_abjad", id_abjad);

            fetch('https://sibi-backend-bjvdoiweyq-et.a.run.app/detailabjad', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                const resultElement = document.getElementById('classAbjad');
                const resultElement2 = document.getElementById('classDeskripsi');
                const resultElement3 = document.getElementById('classUrlGambar');
                const resultElement4 = document.getElementById('classUrlVideo');
                const resultElement5 = document.getElementById('section-box1');
                resultElement.textContent = `${data.class}`;
                resultElement2.textContent = `${data.description}`;
                resultElement3.src = `${data.img_url}`;
                resultElement4.src = `${data.video_url}`;
                resultElement5.classList.remove("hidden");
            })
        });
    });
});