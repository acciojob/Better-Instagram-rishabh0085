//your code here
const images = document.querySelectorAll('.image');

        let draggingElement = null;

        images.forEach(image => {
            image.addEventListener('dragstart', dragStart);
            image.addEventListener('dragover', dragOver);
            image.addEventListener('drop', drop);
        });

        function dragStart(event) {
            draggingElement = event.target;
            event.dataTransfer.setData('text/plain', event.target.id);
            setTimeout(() => {
                event.target.classList.add('dragging');
            }, 0);
        }

        function dragOver(event) {
            event.preventDefault();
        }

        function drop(event) {
            const id = event.dataTransfer.getData('text/plain');
            const droppedElement = document.getElementById(id);

            if (droppedElement !== draggingElement) {
                const tempBackground = droppedElement.style.backgroundImage;
                droppedElement.style.backgroundImage = draggingElement.style.backgroundImage;
                draggingElement.style.backgroundImage = tempBackground;
            }

            event.preventDefault();
            draggingElement.classList.remove('dragging');
        }