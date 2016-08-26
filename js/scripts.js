function Pizza(topping, size){
  this.topping = topping;
  this.size = size;
}

Pizza.prototype.price = function(){
  return (this.topping + this.size).toFixed(2);
}

$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var topping = parseFloat($("#toppings").val());
    var size = parseInt($("input:radio[name=size]:checked").val());
    var order = new Pizza(topping, size);
    $("#price").text(order.price());
    $(".output").show();
  });
});
