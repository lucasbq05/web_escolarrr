document.addEventListener('DOMContentLoaded', function() {
    const ticketForm = document.getElementById('ticketForm');
    const ticketTitle = document.getElementById('ticketTitle');
    const ticketDescription = document.getElementById('ticketDescription');
    const ticketsUl = document.getElementById('tickets');
    const clearTicketsButton = document.getElementById('clearTickets');

    // Cargar tickets desde el almacenamiento local
    loadTickets();

    ticketForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const title = ticketTitle.value;
        const description = ticketDescription.value;

        if (title && description) {
            // Crear un nuevo ticket
            const ticket = {
                title: title,
                description: description,
                seen: false
            };

            // Guardar el ticket en el almacenamiento local
            saveTicket(ticket);

            // Limpiar el formulario
            ticketTitle.value = '';
            ticketDescription.value = '';
        }
    });

    clearTicketsButton.addEventListener('click', function() {
        // Borrar todos los tickets del almacenamiento local
        localStorage.removeItem('tickets');
        loadTickets();
    });

    function saveTicket(ticket) {
        let tickets = getTicketsFromStorage();
        tickets.push(ticket);
        localStorage.setItem('tickets', JSON.stringify(tickets));
        loadTickets();
    }

    function getTicketsFromStorage() {
        const tickets = localStorage.getItem('tickets');
        return tickets ? JSON.parse(tickets) : [];
    }

    function loadTickets() {
        const tickets = getTicketsFromStorage();
        ticketsUl.innerHTML = '';
        tickets.forEach((ticket, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
                <strong>${ticket.title}</strong>
                <p>${ticket.description}</p>
                <span class="mark-as-seen${ticket.seen ? ' seen' : ''}" data-index="${index}">
                    ${ticket.seen ? '✓' : '✗'}
                </span>
            `;
            ticketsUl.appendChild(li);
        });
        
        // Agregar listeners a los botones de "marcar como visto"
        document.querySelectorAll('.mark-as-seen').forEach(button => {
            button.addEventListener('click', function() {
                const index = this.getAttribute('data-index');
                markAsSeen(index);
            });
        });
    }

    function markAsSeen(index) {
        let tickets = getTicketsFromStorage();
        tickets[index].seen = true;
        localStorage.setItem('tickets', JSON.stringify(tickets));
        loadTickets();
    }
});

