function clickme(){
    alert('thanks for clicking me')
}

function clickMeToo(){
    alert('thanks for clicking me too')
}

const todoItems = [
    'Make Breakfast',
    'Walk dogs',
    'Make Dinner',
    'Take shower',
    'Watch a movie',
    'Go to bed'
]


function init() {
    const hello = document.getElementById("hello");
    hello.style.color = "red";
    hello.innerHTML = "Hello There How are you?"

    const hello2 = $("#hello");//  == JQuery("hello")
// hello2.css('color','blue')
    hello2.css({'color': 'blue', 'background-color': 'red'})

// == $("#hello").css({'color':'blue','background-color':'red'})

    hello2.html('Hey there, how are you doing?')
// == $("#hello").css({'color':'blue','background-color':'red'}).html('Hey there, how are you doing?')

    /*const walkDogs = $('<li>Walk dogs</li>')
    todoList.append(walkDogs)
    const makeDinner = $('<li>Make Dinner</li>')
    todoList.append(makeDinner)
    const makeBreakfast = $('<li>Make Breakfast</li>')
    todoList.prepend(makeBreakfast)*/

    const renderTodos = (todos) =>{
        const todoList = $('#todo');
        todoList.empty();
        todos.forEach((item,order)=> {
            const  newTodoItem = `<li>
                                    <button id=${order} class="delete">X</button>
                                    ${item}
                                    </li>`
            todoList.append(newTodoItem);
        })

    }

    renderTodos(todoItems);
    
    const addToDo = () => {
        const todoText = $('#new-todo').val()
        todoItems.push(todoText)
        renderTodos(todoItems)

    }

    $('#add-todo').click(addToDo)
    $('#todo').on('click','.delete',(event) =>{
        const target = $(event.target)
        const index = target.attr('id')
        console.log(index)
        todoItems.splice(index,1)
        renderTodos(todoItems)
    })





    $('#click-me-too').click(clickMeToo())
    $('#clickToHide').click(() => {
        $("#hideMe").hide()}
    )
    $('#clickToShow').click(() => {
        $("#hideMe").show()}
    )

    $("#enter").mouseenter(function(){
        alert("Entered h1!");
    });
    $("#enter").mouseleave(function(){
        alert("Left h1!");
    });

    $("#toggleBtn").click(function(){
        $("#toggle").toggle();
    });


    $("#down").mousedown(function(){
        alert("Mouse down!");
    });
    $("#up").mouseup(function(){
        alert("Mouse up!");
    });


    $("button#left").click(function(){
        $("animate").animate({left: '250px'});
        $("animate").animate({right: '250px'});
    });












}
$(init)

