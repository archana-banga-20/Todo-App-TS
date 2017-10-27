
    var toggle = document.getElementById('toggleVisibility');
    var toggleDiv = document.getElementById('hiddenAdd');
    var todoTitle = document.getElementById('title');
    var activeBody = document.getElementById('activeBody');
    var completeBody = document.getElementById('completeBody');
    var deleteBody = document.getElementById('deleteBody');
    var todoType = document.getElementById('todoTypes');


    var add = document.getElementById('add');


    toggle.onclick = function () {
        if(toggleDiv.style.display == 'block'){
            toggleDiv.style.display = 'none';
        }
        else{
            toggleDiv.style.display = 'block';
        }
    }

    add.onclick = function () {
        debugger;
        var id = addTodo(todoTitle.value,todoType.value);

        todoTitle.innerHTML = '';
        if (id != null) {
            addTodoDiv(todoTitle.value, id,todoType.value);
        }
    };

    function addTodoDiv(title, id,todoType) {
        console.log(title);
        var todo = document.createElement('div');
        todo.style.fontFamily = 'Book Antiqua';
        todo.id = id;
        var image = document.createElement("IMG");
        image.setAttribute("src", "public/addTodo.png");
        image.setAttribute("width", "20");
        image.setAttribute("height", "20");
        image.style.float = 'left';
        image.style.margin = '10px';

        todo.appendChild(image);

        var todoTypeLabel = document.createElement('label');
        todoTypeLabel.innerHTML = todoType;
        todoTypeLabel.id = id;

        todoTypeLabel.style.width = '70px';
        todoTypeLabel.style.marginTop = '10px';

        todo.appendChild(todoTypeLabel);

        var delImage = document.createElement("IMG");
        delImage.setAttribute("src", "public/delete.png");
        delImage.setAttribute("width", "20");
        delImage.setAttribute("height", "20");
        delImage.setAttribute('hidden_id', id);
        delImage.style.margin = '10px';
        delImage.style.float = 'right';
        delImage.setAttribute('class','imageCursor');
        todo.appendChild(delImage);

        var compImage = document.createElement("IMG");
        compImage.setAttribute("src", "public/complete.jpg");
        compImage.setAttribute("width", "20");
        compImage.setAttribute("height", "20");
        compImage.setAttribute('hidden_id', id);
        compImage.style.margin = '10px';
        compImage.style.float = 'right';
        compImage.setAttribute('class','imageCursor');
        todo.appendChild(compImage);

        var activeImage = document.createElement("IMG");
        activeImage.setAttribute("src", "public/active.jpg");
        activeImage.setAttribute("width", "20");
        activeImage.setAttribute("height", "20");
        activeImage.setAttribute('hidden_id', id);
        activeImage.style.margin = '10px';
        activeImage.style.float = 'right';
        activeImage.style.display = 'none';
        activeImage.setAttribute('class','imageCursor');
        todo.appendChild(activeImage);

        var titleText = document.createElement('label');
        titleText.innerHTML = title;
        titleText.id = id;
        titleText.style.width = '70px';
        titleText.style.marginLeft = '20px';

        todo.appendChild(titleText);


        activeBody.appendChild(todo);

        console.log(titleText);
        titleText.ondblclick = function () {
            var title = titleText.textContent;
            console.log(title);

            todo.removeChild(titleText);
            todo.removeChild(compImage);
            todo.removeChild(delImage);
            var titleText2 = document.createElement('input');
            titleText2.type = 'text';
            titleText2.value = title;
            titleText2.id = id;
            titleText2.size="10";
            titleText2.style.marginTop = '13px';

            todo.appendChild(titleText2);
            todo.appendChild(delImage);
            todo.appendChild(compImage);

            titleText2.onclick = function () {
                titleText2.focus();
                titleText2.select();
            }

            var title = '';
            titleText2.onchange = function () {
                title = titleText2.value;
                console.log(title);
                console.log(id);
                updateTodo(id, title)

                todo.removeChild(titleText2);
                titleText.innerHTML = title;
                titleText.id = id;
                titleText.style.width = '70px';


                todo.appendChild(titleText);

                displayTodo();
            }
            }

        compImage.onclick = function () {
            completeTodo(parseInt(compImage.getAttribute('hidden_id')));
            document.getElementById(id).remove();
            completeBody.appendChild(todo);
            compImage.style.display = 'none';
            console.log(activeImage);
            console.log(deleteBody);
            activeImage.style.display = 'block';
            delImage.style.display = 'block';
            titleText.style.textDecoration = 'none';
            titleText.style.color = 'black';
            displayTodo();
        }

        delImage.onclick = function () {
            deleteTodo(parseInt(delImage.getAttribute('hidden_id')));
            document.getElementById(id).remove();
            deleteBody.appendChild(todo);
            compImage.style.display = 'none';
            activeImage.style.display = 'block';
            delImage.style.display = 'none';
            titleText.style.textDecoration = 'line-through';
            titleText.style.color = 'red';
            displayTodo();
        }

        activeImage.onclick = function () {
            activeTodo(parseInt(activeImage.getAttribute('hidden_id')));
            document.getElementById(id).remove();
            activeBody.appendChild(todo);
            compImage.style.display = 'block';
            activeImage.style.display = 'none';
            delImage.style.display = 'block';
            titleText.style.textDecoration = 'none';
            titleText.style.color = 'black';

            displayTodo();
        }
    }
