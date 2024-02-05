let card_id;
        async function search() {
            searchTerm = document.getElementById('searchInput').value;

            const response = await fetch(`https://api.sheety.co/64c3d1d28ec1e2d2861f4303f9cfa355/camunbankia/cards?filter[cardNum]=${searchTerm}`);
            const data = await response.json();
            if (data.cards && data.cards.length > 0) {

                card_id = data.cards[0].id;
                const searchStatusElement = document.getElementById('searchStatus');
                searchStatusElement.style.display = 'block';
                searchStatusElement.innerHTML = 'Card found';

                // Afficher les résultats dans un nouveau formulaire
                const resultBlock = document.getElementById('resultBlock');
                resultBlock.style.display = 'block';
                const resultContainer = document.getElementById('resultContainer');
                resultContainer.innerHTML = `

                        <span class="yellow-255-text">W</span>ithdrawal limit....:
                        <input style="width: 150px" class="tui-input" type="number" value="${data.cards[0].plafond1}" id="object1" /><br>
                        <span class="yellow-255-text">P</span>ayment limit.......:
                        <input style="width: 150px" class="tui-input" type="number" value="${data.cards[0].plafond2}" id="object2" /><br>


      `;
                
            } else {
                // Afficher un message d'erreur si aucune carte n'est trouvée
                const searchStatusElement = document.getElementById('searchStatus');
                searchStatusElement.style.display = 'block';
                searchStatusElement.innerHTML = 'Carte inexistante';
                const resultBlock = document.getElementById('resultBlock');
                resultBlock.style.display = 'none';
            }
        }







        function update() {

            const resultBlock = document.getElementById('resultBlock');
            resultBlock.style.display = 'block';

        }