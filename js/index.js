$(document).ready(function(){
    buildProductView(data);
   
});


function buildProductView(arr){

    arr.forEach((place) => {
        let perProduct = '<div class="col-4"' +
        '<div class="card"style="width: 8rem;">' + 
        '<img src="' + place.image + '" class="card-img-top" >' + 
        '<div class="card-body">' + 
         '<p class="card-text">' + place.name + '</p>' +
        '</div>' +
        '</div>' +
      '</div>';
      $("#places").append(perProduct);
    });
}