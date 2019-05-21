(function () {
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/posts",
        type: "GET",
        success: function (res) {
            $.each(res, function (index, element) {
                $("table > tbody").append(`
                <tr>
                    <td class="title">${element.title}</td>
                    <td class="body">${element.body}</td>
                    <td class="text-center">
                        <button class="edit btn btn-success"><a href="../Edit-page/index.html">EDIT</a>
                        </button>
                        <button class="delete btn btn-danger data-toggle="confirmation"">DELETE</button>
                    </td>
                </tr>
            
                `);
                $.each(res, function (index, element) {
                    $(".blog").append(
                    `<section class="card shadow p-3 mb-5 bg-white rounded">
                    <section class="card-body">
                    
                     <h4 class="card-title"> ${element.title}</h4>
                     <p class="card-text"> ${element.body}</p>
                     </section>
                     </section>
                     `
                    )
                })
            })
        }
    });

    /////////////////////////////////// MOVING TO DASHBOARD ////////////////////////////////

    $("#DashBoard").on("click",function(){
        location.href=("Login/index.html");
    })

////////////////////////////////////////////// EDITING PART  /////////////////////////////////////////////////////////

    $("#table").on("click", ".edit", function () {
        localStorage.setItem("keyTitle", $(this).parents(".text-center").siblings(".title").text())
        localStorage.setItem("keyBody", $(this).parents(".text-center").siblings(".body").text())

    })


    $("#tit").val(localStorage.getItem("keyTitle"))
    $("#area").val(localStorage.getItem("keyBody"))


    $("#table").on("click", ".delete", function () {
        swal({
            title: "Warning",
            text: "Delete the post",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    $(this).parents("tr").slideUp();
                    swal("post are deleted", {
                        icon: "success",
                    });
                }
            });

    })
    $("#save").on("click", function () {
        localStorage.setItem("keyTitle", ($("#tit").val()));

        location.href = "../dashboard/index.html"
        $(".title").html(localStorage.getItem("keyTitle"))
    })
    
})();
