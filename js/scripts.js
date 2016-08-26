function Pizza(topping1, topping2, topping3, size){
  this.topping1 = topping1;
  this.topping2 = topping2;
  this.topping3 = topping3;
  this.size = size;
}

function Order(name, number){
  this.name = name;
  this.phoneNum = number;
  this.pizzas = [];
}

Pizza.prototype.price = function(){
  return (this.topping1 + this.topping2 + this.topping3 + this.size);
}

Order.prototype.totalPrice = function(array){
  var totalPrice = 0;
  for(var i = 0; i < array.length; i++){
    totalPrice += this.pizzas[i].price();
  }
  return (totalPrice).toFixed(2);
}

$(document).ready(function(){
  $("#add-button").click(function(){
    $("#add-order").append('<div class="new-order">' +
                              '<h4>Choose up to 3 toppings:</h4>' +
                              '<div class="form-group">' +
                                '<label for="toppings"><em>Topping 1:</em></label>' +
                                '<select class="form-control topping1">' +
                                  '<option selected="true" value="0">Please select one:</option>' +
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

  $("form#order").submit(function(event){
    event.preventDefault();
    var name = $("#name").val();
    var number = $("#number").val();
    var order = new Order(name, number);
    $(".new-order").each(function() {
      var topping1 = parseFloat($(this).find(".topping1").val());
      var topping2 = parseFloat($(this).find(".topping2").val());
      var topping3 = parseFloat($(this).find(".topping3").val());
      var size = parseFloat($(this).find(".size").val());
      var pizza = new Pizza(topping1, topping2, topping3, size);
      order.pizzas.push(pizza)
    });
    $("#insert-name").text(order.name);
    $("#price").text(order.totalPrice(order.pizzas));
    $("#output, #delivery-option").show();
    $("#order").hide();
  });

  $("button#yes-deliver").click(function(event){
    $("#delivery-option").hide();
    $("#address").show();
  });

  $("form#address").submit(function(event){
    event.preventDefault();
    var street = $("#street").val();
    var city = $("#city").val();
    var state = $("#state").val();
    var zipcode = $("#zipcode").val();
    var address = (street + ", " + city + ", " + state + ", " + zipcode).toUpperCase();
    $("#address").hide();
    $("#insert-address").text(address);
    $("#delivery, #new-order-button").show();
  });

  $("button#no-deliver").click(function(event){
    $("#delivery-option").hide();
    $("#pick-up, #new-order-button").show();
  });

  $("#new-order").click(function(event){
    $("#order")[0].reset();
    $("#address")[0].reset();
    $("#output, #pick-up, #delivery, #new-order-button").hide();
    $("#order").show();
  });

});
