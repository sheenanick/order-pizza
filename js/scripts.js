function Pizza(topping1, topping2, topping3, size){
  this.topping1 = topping1;
  this.topping2 = topping2;
  this.topping3 = topping3;
  this.size = size;
}

Pizza.prototype.price = function(){
  return (this.topping1 + this.topping2 + this.topping3 + this.size).toFixed(2);
}

$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var topping1 = parseFloat($("#toppings").val());
    var topping2 = parseFloat($("#toppings").val());
    var topping3 = parseFloat($("#toppings").val());
    var size = parseInt($("input:radio[name=size]:checked").val());
    var order = new Pizza(topping1, topping2, topping3, size);
    $("#price").text(order.price());
    $(".output").show();
  });
});
