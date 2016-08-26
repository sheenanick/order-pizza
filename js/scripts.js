function Pizza(topping1, topping2, topping3, size){
  this.topping1 = topping1;
  this.topping2 = topping2;
  this.topping3 = topping3;
  this.size = size;
}

function Order(){
  this.pizzas = [];
}

Pizza.prototype.price = function(){
  return (this.topping1 + this.topping2 + this.topping3 + this.size);
}

Order.prototype.totalPrice = function(array){
  var totalPrice = 0
  for(var i = 0; i < array.length; i++){
    totalPrice += this.pizzas[i].price()
  }
  return (totalPrice).toFixed(2);
}

$(document).ready(function(){
  var counter = 0
  $("#add-button").click(function(){
    counter += 1
    $("#add-order").append('<div class="new-order">' +
                              '<h4>Choose up to 3 toppings:</h4>' +
                              '<div class="form-group">' +
                                '<label for="toppings"><em>Topping 1:</em></label>' +
                                '<select required class="form-control topping1">' +
                                  '<option disabled selected="true" value="">Please select one:</option>' +
                                  '<option value="1">Cheese</option>' +
                                  '<option value="1.5">Pepperoni</option>' +
                                  '<option value="1.75">Olives</option>' +
                                  '<option value="1.25">Mushrooms</option>' +
                                  '<option value="2">Artichokes</option>' +
                                '</select>' +
                              '</div>' +
                              '<div class="form-group">' +
                                '<label for="toppings"><em>Topping 2:</em></label>' +
                                '<select class="form-control topping2">' +
                                  '<option selected="true" value="0">Please select one:</option>' +
                                  '<option value="1">Cheese</option>' +
                                  '<option value="1.5">Pepperoni</option>' +
                                  '<option value="1.75">Olives</option>' +
                                  '<option value="1.25">Mushrooms</option>' +
                                  '<option value="2">Artichokes</option>' +
                                '</select>' +
                              '</div>' +
                              '<div class="form-group">' +
                                '<label for="toppings"><em>Topping 3:</em></label>' +
                                '<select class="form-control topping3">' +
                                  '<option selected="true" value="0">Please select one:</option>' +
                                  '<option value="1">Cheese</option>' +
                                  '<option value="1.5">Pepperoni</option>' +
                                  '<option value="1.75">Olives</option>' +
                                  '<option value="1.25">Mushrooms</option>' +
                                  '<option value="2">Artichokes</option>' +
                                '</select>' +
                              '</div>' +
                              '<h4>Choose a size:</h4>' +
                              '<div class="form-group">' +
                                '<select class="form-control size">' +
                                  '<option selected="true" value="0">Please select one:</option>' +
                                  '<option value="5">Small</option>' +
                                  '<option value="10">Medium</option>' +
                                  '<option value="15">Large</option>' +
                                '</select>' +
                              '</div>' +
                            '</div>');
  });

  $("form").submit(function(event){
    event.preventDefault();
    var order = new Order();
    $(".new-order").each(function() {
      var topping1 = parseFloat($(this).find(".topping1").val());
      var topping2 = parseFloat($(this).find(".topping2").val());
      var topping3 = parseFloat($(this).find(".topping3").val());
      var size = parseInt($(this).find(".size").val());
      var pizza = new Pizza(topping1, topping2, topping3, size);
      order.pizzas.push(pizza)
    });
    $("#price").text(order.totalPrice(order.pizzas));
    $(".output").show();
  });
});
